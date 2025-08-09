import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "knowflow",
    title: "KnowFlow",
    period: {
      start: "7.2025",
      end: "8.2025",
    },
    links: {
      github: "https://github.com/capybara-brain346/knowflow",
      linkedin:
        "https://www.linkedin.com/posts/piyush-choudhari_ai-genai-llm-activity-7353757008623206401-rccc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9h5FYBbIX57wnoEK2v7Mpwow9WIAtRNl4",
      youtube: "https://www.youtube.com/watch?v=6idXd304EQY",
    },
    skills: [
      "Python",
      "AWS",
      "TypeScript",
      "Neo4j",
      "PostgreSQL",
      "pgvector",
      "Google Gemini",
      "S3",
      "JWT",
      "bcrypt",
      "RAG",
      "Knowledge Graph",
      "Vector Search",
    ],
    description: `KnowFlow is a powerful hybrid Retrieval-Augmented Generation (RAG) system that combines semantic search with knowledge graph capabilities for intelligent document processing and querying.

🌟 Key Features:
- Advanced document processing with multi-format support (PDF, DOCX, CSV, TXT)
- Hybrid RAG + Knowledge Graph architecture using Google Gemini and Neo4j
- Smart query processing with automatic decomposition and context-aware responses
- Secure authentication with JWT and role-based access control
- Scalable storage using S3, PostgreSQL, and Neo4j`,
    logo: "/images/knowflow.webp",
    isExpanded: true,
  },
  {
    id: "trackml",
    title: "TrackML",
    period: {
      start: "6.2025",
      end: "6.2025",
    },
    links: {
      github: "https://github.com/capybara-brain346/TrackML-Backend",
      linkedin:
        "https://www.linkedin.com/posts/piyush-choudhari_machinelearning-ai-llm-activity-7328387642834812928-sCW8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC9h5FYBbIX57wnoEK2v7Mpwow9WIAtRNl4",
      youtube: "https://www.youtube.com/watch?v=_IDP-yB5AQA",
    },
    skills: [
      "Python",
      "Flask",
      "React",
      "TypeScript",
      "TailwindCSS",
      "SQLAlchemy",
      "PostgreSQL",
      "AWS",
      "Google Gemini",
      "HuggingFace",
      "JWT",
      "Nginx",
    ],
    description: `TrackML is a full-stack tool for tracking, managing, and analyzing machine learning models. It supports organizing models, extracting insights using AI, and integrating with external APIs for automation and enrichment.
  
  🌟 Key Features:
  - Track ML models with details like name, type, developer, and parameters
  - Visual dashboard with model stats and AI-powered insights
  - Auto-fill model info from HuggingFace API
  - Compare models using Google Gemini AI
  - Secure JWT authentication with cross-origin support
  - Production-ready with AWS EC2 deployment and Nginx configuration`,
    logo: "/images/TrackML.webp",
    isExpanded: false,
  },
];
