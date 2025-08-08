import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "ronin-labs",
    companyName: "Ronin Labs",
    companyLogo: "/images/ronin_labs.webp",
    positions: [
      {
        id: "1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e",
        title: "AI Engineer Intern",
        employmentPeriod: {
          start: "01.2025",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `Multimodal Content Generation System (Agent-Based Architecture)
- Architected a modular media generation backend using LangGraph and OpenAI APIs, enabling a central orchestration
agent to dynamically route tasks across image, video, and audio generation pipelines.
- Designed image outpainting and depth-effect video pipelines using SDXL and ControlNet models; developed music
generation modules with MusicGen.
- Optimized the backend processing pipeline by supporting concurrent GPU task execution, integrating state-managed
workflow behind a Flask API, reducing task processing times to <20 seconds.

Sketchbot
- Engineered an image generation backend using FastAPI, SDXL Turbo, ControlNets, and OpenCV, generating line-art images
and optimizing G-code for Dexarm sketching, reducing draw times by 70% from 10 mins to <3 mins.
- Integrated MongoDB for user management and S3 for asset storage, delivering <200ms average API response times under
load.
- Deployed on AWS (g5.2xlarge GPU instances); optimized servers through consolidation, reducing infra costs by 30% per
region.
- Implemented secure device authentication restricting access to authorized Raspberry Pi units. Automated AMI/EBS snapshot
creation for rapid (<15 min) disaster recovery and redeployments, cutting downtime by 95%.

OnePlus 13s Quest Quiz (Client Project)
- Collaborated in a 6-member team to develop scalable backend APIs using Node.js, TypeScript, and TypeORM, supporting
150K+ active users with <120ms API response times in a global quiz experience.
- Built a Django-based admin panel for non-technical campaign operators to manage leaderboards and user analytics.
- Managed GCP Cloud SQL infrastructure, ensuring high availability and reliability under peak traffic conditions for a
production-grade consumer application.`,
        skills: [
          "Python",
          "TypeScript",
          "Node.js",
          "FastAPI",
          "Flask",
          "Django",
          "OpenAI",
          "SDXL",
          "ControlNet",
          "MusicGen",
          "MongoDB",
          "AWS",
          "GCP",
          "S3",
          "TypeORM",
          "LangGraph",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
];
