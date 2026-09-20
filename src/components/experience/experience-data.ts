export interface ExperienceEntry {
  dateRange: string;
  role: string;
  organization: string;
  context: string;
  technologies?: string[];
}

// Sourced directly from Nandakumar's resume (Nandakumar_Vuppalapati_Resume_0926,
// his final updated version) — titles, dates, metrics, and scope are
// transcribed from that document, not invented. Each `context` condenses
// that role's resume bullets into the site's voice; nothing here states a
// claim the resume doesn't already make. Titles moved up a level from the
// previous version (Junior Data Engineer -> Data Engineer at Sigmoid, Data
// Scientist -> Associate Data Engineer at Tech Citi, AI Data Engineer ->
// Senior Data Engineer at Workiva) and several bullets were replaced with
// newer, more specific ones (quantified metrics, the separate AWS
// Bedrock/Pinecone regulatory-search build at Workiva) — confirmed with
// Nandakumar directly before publishing, since these differ meaningfully
// from earlier resume drafts.
export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    dateRange: "DEC 2025 — PRESENT",
    role: "Senior Data Engineer",
    organization: "Workiva · Remote, USA",
    context:
      "Architect multi-tenant, high-throughput Python/PySpark/Airflow pipeline infrastructure across AWS (Glue, S3, Lambda, Step Functions), processing 1M+ daily financial records at 99.9% SLA compliance for risk and settlement analytics. Built modular Snowflake/dbt transformation frameworks with custom macros and data contracts across 30+ financial models, cutting monthly cloud compute cost 25% while speeding up dashboard queries. Added Prometheus/Grafana observability into Airflow that cut anomaly detection time (MTTD) 60%, and separately architected an enterprise regulatory-search pipeline on AWS Bedrock and Pinecone for sub-second natural-language search across thousands of SEC compliance filings.",
    technologies: [
      "Python",
      "PySpark",
      "Airflow",
      "AWS (S3, Glue, Lambda, Step Functions)",
      "Snowflake",
      "dbt",
      "AWS Bedrock",
      "Pinecone",
      "Prometheus/Grafana",
    ],
  },
  {
    dateRange: "AUG 2024 — MAY 2025",
    role: "Data Engineer",
    organization: "Wellmark BCBS · Des Moines, USA",
    context:
      "Built Azure Data Factory ingestion pipelines consolidating 10M+ records from 30+ legacy healthcare sources into ADLS Gen2 and Azure SQL, with automated PII masking and zero-trust security controls. Modernized legacy SQL processing into PySpark jobs on Azure Databricks across medallion-style layers, increasing ingestion throughput 45%. Enforced Great Expectations checkpoints and dbt schema assertions at ingestion boundaries to stop upstream schema drift before it broke downstream reporting, and provisioned the underlying infrastructure with Terraform, Docker, and GitHub Actions CI/CD across staging and production.",
    technologies: [
      "Azure Data Factory",
      "Azure ADLS Gen2",
      "Azure SQL",
      "PySpark",
      "Databricks",
      "Great Expectations",
      "dbt",
      "Terraform",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    dateRange: "JUN 2022 — DEC 2023",
    role: "Data Engineer",
    organization: "Sigmoid · Bengaluru, India",
    context:
      "Refactored T-SQL queries and indexing in Azure Synapse analytics pools, cutting month-end financial reporting query times from 4 hours to under 15 minutes, and redesigned a flat reporting structure into a star-schema dimensional model for multi-region reporting. Built an automated data validation and reconciliation framework in Python/PyTest with Delta Lake assertions that cut upstream data corruption incidents 70%, and managed production reliability across 40+ concurrent Azure Data Factory jobs with automated retries, failure hooks, and dead-letter routing for uninterrupted 24/7 availability.",
    technologies: ["T-SQL", "Azure Synapse", "Python", "PyTest", "Delta Lake", "Azure Data Factory"],
  },
  {
    dateRange: "JUL 2021 — DEC 2021",
    role: "Associate Data Engineer",
    organization: "Tech Citi Software · Bengaluru, India",
    context:
      "Migrated historical financial transaction data from Oracle to PostgreSQL, handling schema mapping, datatype alignment, and automated reconciliation validation. Built Python/Airflow ETL workflows ingesting 50,000+ daily financial transaction records from REST APIs and flat files, replacing legacy manual data-loading processes.",
    technologies: ["Python", "Airflow", "PostgreSQL", "Oracle"],
  },
];
