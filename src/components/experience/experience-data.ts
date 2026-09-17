export interface ExperienceEntry {
  dateRange: string;
  role: string;
  organization: string;
  context: string;
  technologies?: string[];
}

// Sourced directly from the resume Nandakumar supplied
// (Nandakumar_Vuppalapati_Data_Engineer_Refined_Hybrid.docx) — employers,
// dates, and scope are transcribed from that document, not invented. Each
// `context` condenses that role's resume bullets into the site's voice;
// nothing here states a claim the resume doesn't already make.
export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    dateRange: "DEC 2025 — PRESENT",
    role: "AI Data Engineer",
    organization: "Workiva · Remote, USA",
    context:
      "Own production Python/Airflow pipelines across AWS for payments, risk, settlement and compliance data — including failure handling, reruns and recovery validation — plus the Snowflake/dbt models that turn that data into governed datasets for reporting and risk analysis. Also build Spark/Databricks feature and embedding pipelines for fraud and ML workflows, and a regulatory-document RAG prototype for natural-language compliance search.",
    technologies: [
      "Python",
      "Airflow",
      "AWS (S3, Glue, Lambda, Step Functions, Redshift)",
      "Snowflake",
      "dbt",
      "Databricks",
      "Spark",
      "MLflow",
      "Prometheus/Grafana",
      "LangChain",
    ],
  },
  {
    dateRange: "AUG 2024 — MAY 2025",
    role: "Data Engineer",
    organization: "Wellmark BCBS · Des Moines, USA",
    context:
      "Consolidated 10M+ records from 30+ fragmented legacy healthcare sources into Azure SQL through Data Factory, then built the PySpark/Databricks transformation layer that replaced legacy SQL-heavy processing across medallion-style layers. Added dbt schema tests and Great Expectations checkpoints that caught schema, null and duplicate issues before curated data reached downstream consumers, plus an LLM-assisted search prototype across a 1,000+ document vendor-contract repository.",
    technologies: [
      "Azure Data Factory",
      "PySpark",
      "Databricks",
      "dbt",
      "Great Expectations",
      "Terraform",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    dateRange: "JUN 2022 — DEC 2023",
    role: "Junior Data Engineer",
    organization: "Sigmoid · Bengaluru, India",
    context:
      "Refactored T-SQL stored procedures and indexing behind recurring finance-reporting workloads to resolve long-running queries, and redesigned a flat reporting structure into a star-schema dimensional model in Azure Synapse. Built a Python validation framework with pytest checks integrated into ETL processing, and automated a manual weekly Excel workflow with scheduled Azure Data Factory pipelines, saving roughly 6 hours of manual work a week.",
    technologies: ["T-SQL", "Azure Synapse", "Python", "pytest", "Azure Data Factory"],
  },
  {
    dateRange: "JUL 2021 — DEC 2021",
    role: "Data Scientist",
    organization: "Tech Citi Software · Bengaluru, India",
    context:
      "Migrated historical loan and transaction data from Oracle to PostgreSQL, resolving schema and datatype mismatches along the way, and built Python/Airflow ETL workflows ingesting 50,000+ daily transaction records from CSV and REST API sources. Engineered transaction-level behavioral features and trained an offline XGBoost fraud-classification prototype, reaching an AUC-ROC of 0.85 in historical evaluation.",
    technologies: ["Python", "Airflow", "PostgreSQL", "Oracle", "XGBoost"],
  },
];
