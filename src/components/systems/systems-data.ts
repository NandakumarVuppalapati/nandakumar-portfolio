export interface SystemPostmortem {
  incident: string;
  date?: string;
  symptom: string;
  rootCause: string;
  fix: string;
  whatChanged: string;
}

export interface SystemEntry {
  slug: string;
  badge: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  problem: string;
  whatIBuilt: string;
  architecture: string;
  whatCanFail: string;
  whatITriedToBreak: string;
  postmortem: SystemPostmortem;
  techStack: string[];
  githubUrl: string;
}

// Written from the repos themselves — READMEs, ADRs, chaos-test code, commit
// history — verified in a full pass before any of this copy was drafted.
// Nothing here states a claim the linked repo doesn't back up.
export const SYSTEMS: SystemEntry[] = [
  {
    slug: "cdc-lakehouse",
    badge: "Flagship",
    title: "CDC Lakehouse with Data Contracts",
    summary:
      "A change-data-capture lakehouse that fails the pipeline, not just warns, the moment an upstream schema change would break a downstream consumer.",
    image: "/systems/cdc-lakehouse.jpg",
    imageAlt:
      "Diagram of the CDC lakehouse pipeline: PostgreSQL through Debezium and Kafka into a data-contracts validation layer, branching to quarantine on a breaking change, otherwise continuing into the lakehouse and out to consumers.",
    tags: ["Debezium", "Kafka", "Iceberg", "dbt", "Great Expectations", "Dagster"],
    problem:
      "Most pipelines only warn when an upstream schema change breaks something a downstream consumer depends on. Warnings get ignored. This system fails the pipeline outright, the moment a breaking change would reach a consumer, at three independent points before bad data gets there.",
    whatIBuilt:
      "Debezium captures row-level changes from a live PostgreSQL database and streams them through Kafka into Apache Iceberg tables. dbt handles transformation across Bronze/Silver/Gold layers, with three independent contract-enforcement layers — Apicurio schema registry, dbt Model Contracts, and Great Expectations — checking compatibility before data moves forward. Dagster orchestrates the pipeline, Prometheus and Grafana watch it, OpenLineage and Marquez track column-level lineage, and Terraform provisions the whole stack. Entirely free and self-hosted — no cloud bill to run it.",
    architecture:
      "Postgres → Debezium → Kafka → Iceberg (Bronze, via MinIO + a Nessie catalog) → dbt transformation → Trino for querying. Built in three tiers: a working pipeline skeleton first, then the contract/orchestration/CI layer, then lineage, infrastructure-as-code, and chaos testing — each tier verified against the live stack before moving to the next, not just designed on paper.",
    whatCanFail:
      "An incompatible schema change reaching a consumer. A value that's shape-correct but semantically wrong (right type, wrong content) slipping past a layer that only checks structure. Infrastructure failing outright — a broker going down mid-stream — and the pipeline either not noticing or not actually recovering even when it reports that it has.",
    whatITriedToBreak:
      "A chaos test (chaos/kafka_broker_chaos_test.py) that kills the live Kafka broker mid-flight — a full, ungraceful outage, not a graceful stop — inserts marker rows first so there's a precise, checkable payload in flight, then polls Kafka Connect's real status API and measures actual recovery time.",
    postmortem: {
      incident: "chaos/kafka_broker_chaos_test.py — first live run",
      date: "2026-08-20",
      symptom:
        "The script completed, reported \"all connectors/tasks RUNNING again,\" and declared the run a success. Manually checking Trino for the 3 marker rows found zero of them. Not fewer than expected — zero.",
      rootCause:
        "Two separate, compounding failures, both invisible to Kafka Connect's own status API, which reported RUNNING throughout. (1) A Postgres logical-replication slot was held by a zombie backend connection for 21+ hours — Debezium kept retrying against it every ~10s, forever, without ever surfacing FAILED. (2) Once (1) was fixed, a downstream Iceberg sink connector was still stuck: its Kafka consumer group showed LAG=3, quietly behind, while reporting healthy.",
      fix: "(1) pg_terminate_backend() on the zombie connection, which freed the slot immediately. (2) An unconditional restart (not the script's usual onlyFailed=true, a no-op against a connector never marked FAILED) forced the sink to catch up; lag dropped to 0 immediately.",
      whatChanged:
        "Kafka Connect's RUNNING state is not a trustworthy recovery signal, on either side of the pipeline. The chaos script was rewritten to check real consumer-group lag on the sink side instead of trusting the framework's own status field. A clean re-run afterward: 155.6s kill-to-recovered, verified in Trino, not just in the script's own output.",
    },
    techStack: [
      "PostgreSQL",
      "Debezium",
      "Apache Kafka",
      "Apache Iceberg",
      "MinIO",
      "Nessie",
      "Trino",
      "dbt Core",
      "Great Expectations",
      "Apicurio",
      "Dagster",
      "OpenLineage / Marquez",
      "Prometheus / Grafana",
      "Terraform",
    ],
    githubUrl: "https://github.com/NandakumarVuppalapati/cdc-lakehouse-data-contracts",
  },
  {
    slug: "fraud-feature-platform",
    badge: "Production ML",
    title: "Real-Time ML Feature Platform for Fraud Scoring",
    summary:
      "One feature definition, computed by two engines and served through one abstraction, so the batch training path and the real-time serving path can't quietly drift apart.",
    image: "/systems/fraud-feature-platform.jpg",
    imageAlt:
      "Diagram of the fraud-scoring feature platform: a fast Kafka/Flink real-time stream and a slower Spark batch path converging into a shared Feast feature store, then a FastAPI scoring endpoint.",
    tags: ["Kafka", "Flink", "Feast", "Spark", "MLflow", "FastAPI"],
    problem:
      "Fraud pipelines tend to split into two camps: pure batch, where features are hours stale by the time a transaction is scored, or an ad-hoc real-time system where someone reimplements the batch feature logic in a different language for low-latency serving — and the two versions quietly drift apart. That drift is training/serving skew, one of the harder-to-detect bug classes in applied ML.",
    whatIBuilt:
      "One feature definition, computed by two engines and served through one abstraction so both paths agree on what \"features as of this moment\" means: Kafka streams transactions, Flink computes rolling behavioral features in real time, Feast serves those definitions consistently to both training and serving, and a model trained on point-in-time-correct historical data scores transactions through a FastAPI endpoint. Runs entirely on free, open-source tooling via Docker Compose.",
    architecture:
      "Real-time path: Kafka → Flink SQL (rolling windows per card) → Feast push → Redis (online store) → FastAPI /score. Training path: the full 1,296,675-row Kaggle fraud dataset → Spark batch feature computation → Parquet (offline store) → training, logged and registered to MLflow.",
    whatCanFail:
      "A tuning trade-off between feature freshness and completeness in Flink's windowing — raise the watermark and features are more complete but staler, lower it and they're fresher but a late event can silently miss its window. More structurally: the online (Flink) and offline (Spark) paths are two independent implementations of the same feature logic, kept in sync only by convention, both reading the same definition file by hand. That's a real, acknowledged gap, not hidden in the README.",
    whatITriedToBreak:
      "Trained on the full 1.3M-row dataset instead of a downsampled subset, specifically to keep the result honest at the scale a real fraud team would actually work against.",
    postmortem: {
      incident: "training/train.py — OOM on the full dataset",
      symptom:
        "Feast's point-in-time join (get_historical_features()) OOM-killed repeatedly, even after narrowing the join to a ~46,000-row slice, on a machine with ~7.6GB available to Docker. The obvious fix — downsample the training set — was rejected: it would have quietly defeated the entire point of training at production scale.",
      rootCause:
        "Feast's asof join exists to handle the general case where a label's timestamp and its feature snapshot's timestamp differ. Here they don't, by construction: the offline feature job emits exactly one feature row per transaction, computed from that card's history strictly up to that transaction's own timestamp. An asof join against an exact timestamp match degenerates to a direct read — Feast was doing unnecessary, memory-heavy work to solve a problem that didn't exist in this data shape.",
      fix: "Read the offline parquet straight into pandas instead of through Feast's join. Identical, point-in-time-correct result, without the memory blowup.",
      whatChanged:
        "Training ran end to end on the full dataset, not a sample. Real reported results: AUC-ROC 0.9749, Recall 90.0%, Precision 6.9% — precision deliberately traded down, since scale_pos_weight is tuned to catch 9 of 10 fraud cases, the standard cost asymmetry in fraud scoring.",
    },
    techStack: [
      "Apache Kafka",
      "Apache Flink",
      "Feast",
      "Redis",
      "Apache Spark",
      "MLflow",
      "FastAPI",
      "Docker Compose",
    ],
    githubUrl:
      "https://github.com/NandakumarVuppalapati/real-time-ml-feature-platform-for-fraud-scoring",
  },
  {
    slug: "rag-eval-harness",
    badge: "Evaluation",
    title: "RAG Evaluation & Observability Harness",
    summary:
      "A harness that continuously interrogates a real RAG system over real SEC filings, instead of just running it, so retrieval and generation quality get tracked, not assumed.",
    image: "/systems/rag-eval-harness.jpg",
    imageAlt:
      "Diagram of the RAG evaluation harness: SEC filings through retrieval and generation into a Ragas evaluation stage, branching to a flagged-regression path, otherwise continuing to a dashboard.",
    tags: ["Ragas", "Pinecone", "Airflow", "FastAPI", "Claude", "Postgres"],
    problem:
      "Production RAG systems rarely have a good answer to \"how do you know when it's wrong?\" Retrieval can quietly start missing the right passages. Generation can hallucinate fluently without throwing a single error. Neither shows up as a normal API status code.",
    whatIBuilt:
      "A harness that continuously interrogates a real RAG system instead of just running it. The pipeline answers financial-research questions over a real corpus of public SEC 10-K/10-Q filings from 10 companies, generating grounded answers with Claude. A 66-question golden dataset — numeric questions grounded in XBRL data, narrative questions verified against filing text, cross-document comparisons, and 11 deliberately unanswerable questions that should be refused — runs against that pipeline on a schedule, scored with Ragas on faithfulness, relevancy, context precision/recall, and refusal rate, with results persisted so regressions get flagged automatically instead of noticed by a user.",
    architecture:
      "SEC EDGAR filings → ingestion/chunking → two parallel Pinecone indexes (voyage-finance-2, a finance-tuned embedding model, benchmarked against text-embedding-3-small as a general-purpose baseline) → FastAPI retrieval + Claude Haiku generation → the golden dataset run through Ragas, judged by a different model family (GPT-4o-mini) specifically to avoid the self-preference bias of a model grading its own answers → results in Postgres → regression detection against rolling history → Airflow, scheduled nightly.",
    whatCanFail:
      "Retrieval missing the right passage. Generation hallucinating a fluent, wrong answer. The system answering a question it should refuse — which is why refusal rate on the 11 unanswerable golden questions is tracked as its own metric, separate from Ragas's answer-quality scores.",
    whatITriedToBreak:
      "Getting the full Docker Compose stack — Postgres, the API, Prometheus, Grafana, Airflow webserver and scheduler — to actually complete a live nightly run, not just pass CI.",
    postmortem: {
      incident: "first live nightly run vs. CI-green",
      symptom:
        "CI was green on every check. The full stack did not complete a real nightly run — four separate real bugs surfaced only once the Airflow image actually ran live.",
      rootCause:
        "None of CI's checks build and run the Airflow image end to end, so none of these were visible there: (1) sqlalchemy>=2.0 conflicted with Airflow 2.10.4's tested 1.4.54, crashing the webserver/scheduler on boot. (2) pandas>=2.2 clashed with Airflow's own pandas==2.1.4 constraint. (3) A function lived in scripts/, which the Airflow Dockerfile never copies into the image — invisible to a py_compile-only DAG check. (4) A golden-dataset path computed as \"four parents up from __file__\" broke under a real pip install, which copies the file into site-packages.",
      fix: "Lowered version floors and pinned Airflow's SQLAlchemy family via a trimmed constraints file (1, 2); moved the function into the actually-installed package (3); added an explicit env-var override for the dataset path instead of inferring it (4). Each fix verified against a from-scratch venv simulating the real image's dependency resolution before being pushed.",
      whatChanged:
        "CI-green stopped being treated as \"done.\" Real measured scores from a live run: faithfulness 82.2% / 87.0%, refusal rate 100% / 100% (openai vs. voyage embeddings) on the golden dataset, persisted and visible on a live Grafana dashboard next to real request-rate and cost panels.",
    },
    techStack: [
      "Claude (Haiku)",
      "GPT-4o-mini (judge)",
      "Voyage / OpenAI embeddings",
      "Pinecone",
      "Ragas",
      "FastAPI",
      "Airflow",
      "Postgres",
      "Prometheus / Grafana",
      "Docker Compose",
    ],
    githubUrl: "https://github.com/NandakumarVuppalapati/rag-eval-harness",
  },
];

export function getSystemBySlug(slug: string): SystemEntry | undefined {
  return SYSTEMS.find((system) => system.slug === slug);
}
