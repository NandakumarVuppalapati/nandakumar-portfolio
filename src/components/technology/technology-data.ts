export interface TechCategory {
  label: string;
  items: string[];
}

// Every tool listed here already appears in one of the three systems'
// verified techStack arrays (systems-data.ts) — nothing new is introduced
// on this page, it's the same real list, organized by the role each tool
// plays instead of left as one flat alphabetical wall.
export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Ingest & Stream",
    items: ["Apache Kafka", "Debezium", "Apache Flink"],
  },
  {
    label: "Store",
    items: ["PostgreSQL", "Apache Iceberg", "MinIO", "Nessie", "Redis", "Pinecone"],
  },
  {
    label: "Transform & Serve",
    items: ["dbt Core", "Trino", "Apache Spark", "FastAPI"],
  },
  {
    label: "Orchestrate",
    items: ["Dagster", "Airflow", "Docker Compose", "Terraform"],
  },
  {
    label: "Trust & Quality",
    items: ["Great Expectations", "Apicurio", "Ragas", "OpenLineage / Marquez"],
  },
  {
    label: "AI / ML",
    items: ["Claude (Haiku)", "GPT-4o-mini (judge)", "Voyage / OpenAI embeddings", "Feast", "MLflow"],
  },
  {
    label: "Observe",
    items: ["Prometheus", "Grafana"],
  },
];
