@AGENTS.md
# Nandakumar Vuppalapati — Portfolio Master Specification

## 1. Project Mission

Build a premium, production-quality personal portfolio for:

**Nandakumar Vuppalapati**
**AI DATA ENGINEER**

Primary hero statement:

> I build data systems that power analytics & AI.

This portfolio targets recruiters, hiring managers, engineering leaders,
and technical interviewers hiring for Data Engineering and AI Data
Engineering roles.

This is not a generic developer portfolio and not an animated resume.

The portfolio should feel like:

**a beautifully engineered technical system that happens to be a portfolio.**

Primary qualities:

- professional
- credible
- human
- cinematic
- technically sophisticated
- editorial
- restrained
- highly organized
- recruiter-friendly

The site must communicate credibility quickly while rewarding deeper
technical exploration.

---

## 2. Core Product Principle

The portfolio is EVIDENCE, not a resume replacement.

Resume gets attention.
Portfolio proves engineering credibility.
Interview proves capability.

A visitor should understand within roughly 10 seconds:

- who Nandakumar is
- that he is an AI Data Engineer
- what type of systems he builds
- where to see his work
- how to contact him

Do not hide important information behind animation.

---

## 3. Development Workflow — CRITICAL

Work incrementally.

NEVER redesign or rebuild the entire portfolio because one section needs
improvement.

Modify only the requested section or component.

Before changing existing approved functionality:

1. inspect the existing implementation
2. understand dependencies
3. preserve working behavior
4. make the smallest appropriate change
5. run validation afterward

Do not proceed to another major section unless explicitly requested.

Approved stages are treated as LOCKED unless the user specifically asks
to modify them.

Current build order:

1. Foundation
2. Navigation + Hero
3. About
4. Experience
5. What I Build
6. How I Think
7. Technology
8. Selected Work
9. Project Case Studies
10. Academics / Learning
11. Contact
12. Full responsive QA
13. Accessibility / performance / SEO
14. Production deployment

---

## 4. Current Technology Foundation

This is a modern Next.js project using:

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint

Follow @AGENTS.md.

This version of Next.js may contain APIs or conventions newer than model
training knowledge.

Before relying on assumptions about Next.js behavior, inspect the relevant
documentation available under:

node_modules/next/dist/docs/

Prefer current documented APIs.

Keep dependencies minimal.

Do not introduce large UI frameworks merely for convenience.

Do not add WebGL, Three.js, large animation libraries, or heavy dependencies
unless there is a clear approved need.

---

## 5. Visual Direction — LOCKED

The approved direction is:

**cinematic + professional + human + technical + editorial**

NOT:

- cyberpunk
- futuristic AI landing page
- SaaS dashboard
- generic developer template
- animated resume
- hacker aesthetic

The portfolio should feel professionally art-directed.

Visual sophistication should come primarily from:

- typography
- photography
- composition
- spacing
- hierarchy
- lighting
- restrained technical details
- carefully controlled motion

NOT from excessive effects.

---

## 6. Hero Direction — LOCKED

Hero is identity-first.

Desktop composition is intentionally asymmetric.

LEFT SIDE:

DATA → SYSTEMS → INTELLIGENCE

NANDAKUMAR
VUPPALAPATI

AI DATA ENGINEER

I build data systems that power
analytics & AI.

Primary CTA:
View My Work

Secondary CTA:
Get In Touch

RIGHT SIDE:

A large but controlled cinematic portrait/environmental image of
Nandakumar.

The portrait is the primary human anchor.

It must NOT look like:

- a profile card
- passport photo
- circular avatar
- floating head
- stock photo
- AI-generated corporate portrait

Use generous negative space.

Do not make the portrait excessively large.

Do not make the name excessively large merely to fill space.

The portrait and typography should feel intentionally balanced.

---

## 7. Portrait Rules — CRITICAL

The production portfolio will use Nandakumar's real portrait asset.

Never generate, reconstruct, replace, or reinterpret his face in code.

Preserve:

- real facial identity
- facial proportions
- natural skin texture
- hair
- beard
- eyes
- nose
- expression
- realistic head/neck/shoulder relationship

Photography treatment may include:

- crop
- masks
- overlays
- environmental blending
- subtle lighting treatment
- background composition
- responsive positioning

Do NOT use aggressive CSS filters that make the portrait artificial.

The desired feeling is:

**professionally photographed engineer**

not:

**AI-generated engineer**

Dark mode portrait treatment:

- deeper natural shadows
- cinematic contrast
- warm environmental/practical light
- restrained cool fill
- natural skin tone

Light mode:

- warmer exposure
- softer contrast
- warm ivory environment
- clean editorial treatment
- natural skin tone

---

## 8. AI-Looking Visuals — STRICTLY AVOID

Do NOT use:

- AI brains
- robots
- humanoid AI
- glowing neural networks
- giant glowing spheres
- cyberpunk imagery
- hacker imagery
- blockchain visuals
- futuristic cities
- spaceships
- planets
- giant 3D blobs
- excessive particles
- rainbow gradients
- giant gradient blobs
- excessive glassmorphism
- fake holograms
- generic fake dashboards
- random code screens
- glowing nodes surrounding the portrait
- neon spaghetti lines
- scratch/scribble backgrounds

ABSOLUTELY NO GRID BACKGROUNDS.

This includes:

- square grids
- dot grids
- graph-paper grids
- perspective grids
- technical grids
- repeating coordinate grids

No grids in dark mode.
No grids in light mode.

---

## 9. Technical Visual Language

Technical identity should be subtle.

Target approximately:

85% photography + typography + editorial composition
15% technical/data-system visual language

Preferred metaphor:

**DATA → SYSTEMS → INTELLIGENCE**

Possible visual language:

- 2–4 thin flowing data traces
- sparse event pulses
- restrained system markers
- subtle architecture relationships
- tiny technical annotations when useful

The visitor should first perceive a sophisticated composition.

Only on closer inspection should the data-engineering language become
obvious.

---

## 10. Color System

Overall target:

75–80% neutral
15–20% cool technical color
~5% warm accent

### Dark

Deep ink:
#080B10

Midnight navy:
#0D1420

Warm white:
#F3F0EA

Cool gray:
#A5ADB8

Electric cyan:
#56D9FF

Intelligent blue:
#6D8CFF

Subtle violet:
#9A7CFF

Warm amber:
#E7B86B

Use accents selectively.

Do not turn the site into a neon interface.

### Light

Light mode must be independently art-directed.

It is NOT an inverted dark theme.

Use:

- warm ivory
- charcoal typography
- soft warm-white surfaces
- warm gray borders
- muted teal/cyan
- muted cobalt/indigo
- restrained violet
- warm ochre

Light mode should feel like a premium technology/editorial publication.

---

## 11. Typography

Primary typeface:

**Inter**

Technical accent:

**JetBrains Mono**

Inter is used for:

- name
- headings
- body
- navigation
- buttons

JetBrains Mono is reserved for:

- tiny metadata
- technical annotations
- project numbers
- system labels
- small code fragments

Do NOT overuse monospace typography.

The name is the strongest typographic element.

Maintain excellent hierarchy and whitespace.

---

## 12. Theme System

Dark is the default first-visit experience.

Support:

- dark
- light
- persistent explicit user selection
- anti-flash behavior
- accessible theme control

An explicit user choice must override system preference.

Dark and light should feel like two art-directed versions of the same
portfolio.

Do not simply invert colors.

---

## 13. Motion Philosophy

Target:

**90% still / 10% alive**

The site must look excellent with all motion disabled.

Motion may include:

- subtle typography entrance
- gentle portrait reveal
- occasional data pulse
- restrained depth/parallax
- elegant hover response
- smooth theme transition
- subtle section transitions

Avoid:

- long hero intro sequences
- excessive scroll animation
- constant particle movement
- large looping animations
- animation that delays reading
- motion for motion's sake

Respect:

prefers-reduced-motion

Reduced-motion users should immediately receive the resolved visual state.

---

## 14. Responsive Design — CRITICAL

This is ONE responsive website.

Desktop and mobile are equally important.

Do not build desktop first and simply shrink it.

Test intentionally at:

375px
390px
430px
768px
1024px
1440px+

Mobile hero hierarchy should generally be:

NANDAKUMAR
VUPPALAPATI

AI DATA ENGINEER

short statement

portrait

CTAs

supporting technical information

Mobile portrait must use an intentional crop.

Never crop through:

- eyes
- chin
- important facial features

Simplify decorative technical graphics on mobile.

Remove tiny nodes/labels that do not survive smaller screens.

Requirements:

- no horizontal overflow
- comfortable touch targets
- readable typography
- deliberate whitespace
- recognizable portrait
- fast loading

Mobile should feel like a premium editorial composition, not a compressed
desktop page.

---

## 15. Navigation

Navigation should be minimal and sophisticated.

Planned destinations:

About
Experience
Systems
Work
Contact

A theme toggle should remain accessible.

Desktop:
clean horizontal navigation.

Mobile:
deliberate mobile menu/overlay with comfortable touch targets.

Avoid oversized navigation effects.

---

## 16. Information Architecture

Planned narrative:

ACT I — THE SIGNAL
Hero / Identity

ACT II — THE ENGINEER
About

ACT III — THE SYSTEM
What I Build

ACT IV — EXPERIENCE
Professional Experience

ACT V — HOW I THINK
Engineering Principles

ACT VI — TECHNOLOGY
Technology ecosystem

ACT VII — SELECTED WORK
Project previews

ACT VIII — INSIDE THE SYSTEM
Deep project case studies

ACT IX
Academics / Learning

ACT X — LET'S TALK
Contact

Conceptual journey:

WHO I AM
→ WHAT I DO
→ WHAT I HAVE EXPERIENCED
→ HOW I THINK
→ WHAT I USE
→ WHAT I HAVE BUILT
→ HOW I SOLVE PROBLEMS
→ WHAT I HAVE LEARNED
→ HOW TO CONTACT ME

Do not force literal ACT labels into the interface if they hurt usability.
They are narrative guidance.

---

## 17. Layout Rhythm

Avoid repeating the same component pattern.

Desired rhythm:

OPEN
→ DENSE
→ EDITORIAL
→ TECHNICAL
→ HUMAN
→ CINEMATIC
→ OPEN

Approximate visual balance:

50–60% premium editorial
20–25% technical/data systems
10–15% cinematic interaction
10% personal
~5% experimental/futuristic

Every rectangle must have a reason to exist.

Use:

open editorial layouts for biography/philosophy
frames for real technical metadata
full-bleed imagery where appropriate
layered compositions for architecture/data flow
cards only when functionally justified

Do NOT turn every section into cards.

---

## 18. About

Purpose:

Explain who Nandakumar is as an engineer.

Eventually include verified information about:

- engineering direction
- background
- interests
- what he enjoys building
- engineering approach
- technical identity

Use:

- portrait
- editorial biography
- technical metadata/context
- timeline where useful

Do NOT invent biography information.

Use placeholders or ask for information when facts are unavailable.

---

## 19. Experience

Experience entries should eventually contain:

- role
- company
- dates
- scope
- technologies
- impact

Prefer approximately 2–4 strong lines plus concise evidence/highlights.

Do not fabricate:

- employers
- dates
- metrics
- responsibilities
- achievements

---

## 20. What I Build

Primary domains may include verified work involving:

- Data Engineering
- AI/ML systems
- data pipelines
- distributed systems
- cloud
- real-time processing
- data quality
- observability
- data platforms
- AI infrastructure
- retrieval
- evaluation
- production reliability

Conceptual visual flow:

DATA
→ TRANSFORMATION
→ SYSTEMS
→ OBSERVABILITY
→ INTELLIGENCE

Do not represent these as a generic six-card grid.

---

## 21. How I Think

This section demonstrates engineering reasoning.

Possible themes, only when supported/approved:

- reliability
- correctness
- observability
- consistency
- performance
- reproducibility
- evaluation
- trade-offs
- simplicity

Goal:

Show that the engineer thinks about systems rather than merely tools.

Do not fabricate personal philosophy statements as confirmed beliefs.

---

## 22. Technology

Do not create a giant logo wall.

Organize technology by systems/ecosystems.

Potential categories:

DATA SYSTEMS
AI / ML
INFRASTRUCTURE
BACKEND

Use only technologies supported by actual experience or project evidence.

Possible project-supported technologies include:

Python
SQL
PostgreSQL
Kafka
Spark
Flink
Iceberg
Trino
RAG
LLMs
Embeddings
Ragas
MLflow
Feast
Docker
Terraform
CI/CD
FastAPI
REST APIs
Redis

Do not imply professional production experience solely because a technology
appears in a personal project.

---

## 23. Selected Projects

Projects appear AFTER identity, context, experience, engineering approach,
and technology.

Projects are evidence, not introduction.

Avoid generic three-card portfolio grids.

Each project preview should eventually communicate:

- project number
- title
- one-line problem
- engineering idea
- core technologies
- one strong visual
- case study link
- GitHub link

Do not dump README files onto the homepage.

---

## 24. Project 01 — CDC Lakehouse with Data Contracts

Repository:

https://github.com/NandakumarVuppalapati/cdc-lakehouse-data-contracts

Core concept:

A change-data-capture lakehouse designed to enforce downstream data
contracts and expose breaking upstream changes.

Architecture includes:

PostgreSQL
→ Debezium
→ Kafka
→ Iceberg
→ Trino

Supporting technologies/evidence may include:

Apicurio
dbt Model Contracts
Great Expectations
Dagster
GitHub Actions
Prometheus
Grafana
OpenLineage
Marquez
Terraform

Narrative theme:

TRUST / DATA RELIABILITY

Conceptual motion:

BREAK → BLOCK → RECOVER

Potential case-study visual:

WHEN THE SYSTEM SAID NO

All detailed claims must be verified against repository evidence before
publication.

---

## 25. Project 02 — Real-Time ML Feature Platform for Fraud Scoring

Repository:

https://github.com/NandakumarVuppalapati/real-time-ml-feature-platform-for-fraud-scoring

Core concept:

A streaming ML feature platform designed to reduce training/serving skew
by sharing feature definitions between offline training and online
serving.

Architecture may include:

Kafka
→ Flink
→ Feast
→ Redis
→ model serving

Supporting technologies:

Spark
Parquet
MLflow
FastAPI
Docker Compose

Narrative theme:

SPEED / REAL-TIME ML / CONSISTENCY

Conceptual motion:

FLOW → DIVERGE → SYNCHRONIZE

Key concept:

ONE FEATURE DEFINITION

Any latency, transaction-count, performance, or dataset claims must be
verified from the current repository before publication.

---

## 26. Project 03 — RAG Evaluation & Observability Harness

Repository:

https://github.com/NandakumarVuppalapati/rag-eval-harness

Core concept:

An evaluation and observability system designed to detect retrieval and
generation regressions in a RAG application.

Potential components include:

SEC EDGAR documents
retrieval pipeline
LLM generation
golden evaluation dataset
Ragas
Pinecone
FastAPI
PostgreSQL
Airflow
Prometheus
Grafana

Narrative theme:

AI RELIABILITY / EVALUATION

Conceptual flow:

QUESTION
→ RETRIEVE
→ GENERATE
→ EVALUATE
→ INVESTIGATE
→ IMPROVE

Potential visual:

WHEN THE MODEL IS WRONG

All numerical evaluation results, costs, dataset sizes, model names, and
performance claims must be verified against current repository evidence
before publication.

---

## 27. Case Study Structure

Deep project pages may use:

01 Overview
02 Problem
03 Why It Matters
04 Context
05 My Role
06 Architecture
07 Data Flow
08 Technology
09 Engineering Decisions
10 What Broke
11 How I Diagnosed It
12 How I Solved It
13 Results / Evidence
14 What I Learned
15 If I Built It Again
16 Screenshots / Reference Assets
17 GitHub
18 Demo if actually available

Use real screenshots and evidence.

Do not fabricate:

- dashboards
- metrics
- production traffic
- customers
- users
- business outcomes
- deployment claims

---

## 28. Content Accuracy — NON-NEGOTIABLE

Never fabricate personal information.

Never invent:

- companies
- clients
- employers
- job titles
- dates
- awards
- certifications
- testimonials
- metrics
- users
- production scale
- revenue
- performance results
- personal opinions
- personal philosophy
- education
- deployment claims

When information is unavailable:

use a clearly marked placeholder or request verified information.

Decorative copy from visual mockups is NOT automatically factual.

For example, phrases that appeared in concept images must not be treated
as confirmed personal claims unless explicitly approved.

---

## 29. Writing Style

Avoid generic portfolio language such as:

- passionate developer
- innovative technologist
- results-driven professional
- technology enthusiast
- leveraging cutting-edge solutions
- transforming the future with AI

Prefer:

specific
technical
clear
human
confident
concise

Show engineering ability through evidence and decisions.

Do not oversell.

---

## 30. Recruiter Scan Model

Design for approximately:

10 seconds:
name + role + value proposition

30 seconds:
about + experience

60 seconds:
engineering domain + technology

90 seconds:
selected projects

deeper exploration:
architecture + decisions + failures + evidence + screenshots + GitHub

Important information must remain easy to scan.

---

## 31. Performance

Prioritize:

- optimized images
- responsive image sizes
- minimal JavaScript
- minimal client components
- lazy loading below the fold
- efficient fonts
- stable layout
- fast first render

Do not sacrifice performance for decorative effects.

---

## 32. Accessibility

Maintain:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- descriptive image alt text
- accessible controls
- reduced-motion behavior
- sensible heading hierarchy

Accessibility is part of quality, not an optional final patch.

---

## 33. SEO / Metadata

Before production, implement accurate:

- page title
- description
- Open Graph metadata
- social preview
- canonical URL
- favicon/brand treatment
- structured metadata where appropriate

Do not invent credentials or claims in metadata.

---

## 34. Engineering Quality

Before declaring any stage complete:

- run lint
- run type checking
- run production build when appropriate
- fix actual errors
- inspect responsive behavior
- inspect dark/light behavior
- avoid console errors
- keep Git diff focused

Do not suppress errors merely to get a build to pass.

---

## 35. Approval Rule

When asked to implement ONE stage:

implement only that stage.

Do not proactively build later sections.

Do not reinterpret approved sections.

Do not replace the established visual system with a new concept.

If a requested change conflicts with this master specification, preserve
the specification unless the user explicitly overrides it.

The goal is controlled refinement, not continuous redesign.

---

## 36. Current Phase

CURRENT PHASE:

**PHASE 1 — FOUNDATION + NAVIGATION + HERO**

Build only:

- global design tokens
- typography
- dark/light theme foundation
- navigation
- hero
- responsive hero behavior
- restrained motion foundation

Do NOT build yet:

- About
- Experience
- What I Build
- How I Think
- Technology
- Projects
- Case Studies
- Academics
- Contact section
- AI assistant

Stop after Phase 1 for visual review.