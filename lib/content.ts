export const person = {
  firstName: "Rutuja",
  lastName: "More",
  name: "Rutuja More",
  role: "Data Scientist & AI Engineer",
  location: "North Dartmouth, MA",
  timezone: "America/New_York",
  email: "rutuja.more9499@gmail.com",
  phone: "774-518-0525",
  avatar: "/images/avatar.png",
  languages: ["English"],
}

export const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hrutuja-m",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/rutuja-more",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rutuja.more9499@gmail.com",
  },
]

export const home = {
  label: "Home",
  title: "Rutuja More's Portfolio",
  description:
    "Portfolio of Rutuja More, a Data Science graduate student building machine learning, generative AI, computer vision, and cloud data engineering projects.",
  headline: "Data scientist building intelligent, end-to-end AI systems",
  subline:
    "I'm Rutuja, a Data Science graduate student at UMass Dartmouth. I build machine learning, generative AI, computer vision, and cloud data engineering projects — and translate technical work into measurable business outcomes.",
}

export const about = {
  label: "About",
  title: "About",
  description: `Meet ${person.name}, ${person.role} based in ${person.location}`,
  intro:
    "Data Science graduate student with hands-on experience building machine learning, generative AI, computer vision, cloud data engineering, database design, and analytics projects. Skilled in Python, SQL, PySpark, AWS, Neo4j, FastAPI, Streamlit, RAG, REST APIs, model evaluation, ETL, and dashboarding — with a focus on translating technical work into measurable business outcomes.",
  seeking:
    "Seeking data science, AI engineering, machine learning, data engineering, cloud analytics, robotics AI, and applied AI roles.",
  work: {
    title: "Experience",
    experiences: [
      {
        company: "MIT-WPU",
        role: "Research Assistant",
        location: "Pune, India",
        timeframe: "Oct 2023 – Aug 2024",
        achievements: [
          "Built and curated a 5,000+ image dataset by sourcing research data, validating annotations, and labeling images using Roboflow to support computer vision experimentation.",
          "Trained and evaluated YOLO, SSD, Faster R-CNN, ResNet, and U-Net models using standardized metrics including mAP and IoU across a shared 25% validation set.",
          "Improved model performance by 20%+ through preprocessing, hyperparameter tuning, model comparison, and structured experiment documentation.",
        ],
      },
    ],
  },
  studies: {
    title: "Education",
    institutions: [
      {
        name: "University of Massachusetts Dartmouth",
        description: "M.S. in Data Science — North Dartmouth, MA. Expected May 2026.",
      },
      {
        name: "MIT-WPU School of Computer Engineering and Technology",
        description: "Postgraduate Diploma in AI and ML Techniques — Pune, India.",
      },
    ],
  },
  technical: {
    title: "Skills",
    skills: [
      {
        title: "Programming",
        description: "Python, SQL, PySpark, MATLAB",
      },
      {
        title: "Generative AI",
        description:
          "Large Language Models, Retrieval-Augmented Generation, Prompt Engineering, AI Agents, OpenAI API, LLM Evaluation",
      },
      {
        title: "Machine Learning",
        description:
          "Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Model Evaluation, Feature Engineering",
      },
      {
        title: "Frameworks & Tools",
        description:
          "FAISS, FastAPI, REST APIs, OpenCV, OpenPose, Roboflow, Flask, Streamlit, Neo4j, Git, Jupyter Notebook",
      },
      {
        title: "Cloud & Data Engineering",
        description:
          "AWS S3, AWS Glue, Amazon Athena, Amazon QuickSight, ETL Pipelines, Parquet, Data Pipelines, Data Quality",
      },
      {
        title: "Analytics & Communication",
        description:
          "Dashboarding, Data Storytelling, Experiment Documentation, Business Insights, Technical Communication",
      },
    ],
  },
}

export type Project = {
  slug: string
  title: string
  tagline: string
  image: string
  featured: boolean
  stack: string[]
  summary: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: "careercopilot-ai",
    title: "CareerCopilot AI",
    tagline: "GenAI multi-agent job assistant",
    image: "/images/projects/careercopilot.png",
    featured: true,
    stack: ["Python", "OpenAI API", "FAISS", "FastAPI", "n8n", "RAG", "REST APIs", "NLP"],
    summary:
      "An LLM-powered multi-agent assistant that extracts, classifies, prioritizes, and summarizes job opportunities from unstructured career-related data.",
    highlights: [
      "Built an LLM-powered multi-agent assistant to extract, classify, prioritize, and summarize job opportunities from unstructured career-related data.",
      "Implemented a RAG pipeline using FAISS to ground recommendations in user context and improve resume-to-job matching across role requirements.",
      "Developed modular agents for job classification, structured extraction, match scoring, deadline tracking, and personalized recruiter email generation.",
      "Integrated APIs and workflow automation to convert raw job data into actionable outputs such as role fit, next steps, and outreach drafts.",
    ],
  },
  {
    slug: "twitter-airline-sentiment",
    title: "Twitter US Airline Sentiment Analysis",
    tagline: "Serverless big data pipeline on AWS",
    image: "/images/projects/twitter-sentiment.png",
    featured: true,
    stack: ["AWS S3", "AWS Glue", "PySpark", "Amazon Athena", "Amazon QuickSight", "SQL", "Parquet"],
    summary:
      "A serverless big data pipeline on AWS to process and analyze 4,000+ Twitter airline sentiment records for customer experience and complaint-pattern analysis.",
    highlights: [
      "Built a serverless big data pipeline on AWS to process and analyze 4,000+ Twitter airline sentiment records for customer experience and complaint-pattern analysis.",
      "Performed ETL using AWS Glue and PySpark to clean unstructured text by removing URLs, mentions, special characters, and noisy fields before analytical modeling.",
      "Optimized Athena query performance by 40% by converting processed datasets into Parquet columnar format and partition-ready analytics tables.",
      "Executed SQL analytics and developed QuickSight dashboards to identify top negative complaint categories, airline-level sentiment trends, and recurring customer issues.",
    ],
  },
  {
    slug: "cinematick",
    title: "CinemaTick",
    tagline: "Event booking system with a graph database",
    image: "/images/projects/cinematick.png",
    featured: true,
    stack: ["Python", "FastAPI", "Streamlit", "Neo4j", "Cypher", "REST APIs"],
    summary:
      "A full-stack event booking system to manage users, events, venues, categories, seat availability, bookings, and cancellations through a graph database model.",
    highlights: [
      "Built a full-stack event booking system to manage users, events, venues, categories, seat availability, bookings, and cancellations through a graph database model.",
      "Designed Neo4j nodes, relationships, uniqueness constraints, and Cypher queries across 7+ core entities to prevent duplicate seat reservations and preserve booking history.",
      "Developed 10+ REST API endpoints and an interactive Streamlit dashboard for authentication, event filtering, seat selection, booking confirmation, admin CRUD operations, and booking analytics.",
      "Secured the project for GitHub by removing hardcoded credentials, adding environment-based configuration, password hashing, setup documentation, and a clean backend/frontend/scripts/docs structure.",
    ],
  },
  {
    slug: "smart-space-automation",
    title: "AI-Powered Smart Space Automation System",
    tagline: "Real-time occupancy detection for energy savings",
    image: "/images/projects/smart-space.png",
    featured: true,
    stack: ["Python", "YOLOv8", "OpenCV", "Roboflow", "Centroid Tracking", "Firestore"],
    summary:
      "A real-time occupancy detection system using YOLOv8 and OpenCV to support automated HVAC and lighting decisions in smart spaces.",
    highlights: [
      "Developed a real-time occupancy detection system using YOLOv8 and OpenCV to support automated HVAC and lighting decisions in smart spaces.",
      "Fine-tuned object detection on indoor occupancy data, achieving 95%+ validation accuracy for person detection in controlled test scenarios.",
      "Implemented centroid-based multi-object tracking to reduce duplicate detections and improve reliability of live occupancy counts.",
      "Designed a decision layer that translated occupancy outputs into energy-saving automation actions, demonstrating 30% potential optimization in simulated usage scenarios.",
    ],
  },
  {
    slug: "llm-voice-rag-chatbot",
    title: "LLM Voice-Based RAG Chatbot",
    tagline: "Voice-enabled, grounded conversational AI",
    image: "/images/projects/voice-rag.png",
    featured: false,
    stack: ["Python", "OpenAI API", "FAISS", "Speech-to-Text", "Text-to-Speech", "Prompt Engineering"],
    summary:
      "A voice-enabled AI chatbot that converts speech to text, retrieves relevant knowledge, generates grounded responses, and returns spoken answers.",
    highlights: [
      "Developed a voice-enabled AI chatbot that converts speech to text, retrieves relevant knowledge, generates grounded responses, and returns spoken answers.",
      "Built a RAG workflow using FAISS to retrieve department-specific context and reduce hallucination risk in LLM-generated responses.",
      "Tested prompt designs, retrieval queries, and response-grounding strategies across real user questions to improve answer relevance and reliability.",
      "Documented test cases, failure modes, and out-of-scope handling to support repeatable evaluation of chatbot performance.",
    ],
  },
  {
    slug: "hvac-energy-optimization",
    title: "Predictive Analytics for HVAC Energy Optimization",
    tagline: "What-if simulation for energy and carbon impact",
    image: "/images/projects/hvac.png",
    featured: false,
    stack: ["Python", "Pandas", "Scikit-learn", "Feature Engineering", "Simulation", "Dashboarding"],
    summary:
      "A data science workflow to predict HVAC energy consumption using building, occupancy, temperature, and usage-related features.",
    highlights: [
      "Designed a data science workflow to predict HVAC energy consumption using building, occupancy, temperature, and usage-related features.",
      "Performed EDA, preprocessing, and feature engineering to identify key drivers of energy consumption and support model-ready datasets.",
      "Built a what-if simulation layer to estimate cost, energy, and carbon impact under different occupancy and automation scenarios.",
      "Prepared dashboard-ready outputs to support real-time decision-making for energy optimization and facility operations.",
    ],
  },
  {
    slug: "basketball-shot-analysis",
    title: "Basketball Shot and Pose Analysis System",
    tagline: "Pose estimation for player movement analysis",
    image: "/images/projects/basketball.png",
    featured: false,
    stack: ["Python", "OpenPose", "OpenCV", "Flask", "REST APIs", "Pose Estimation", "Object Detection"],
    summary:
      "An AI-powered basketball shot analysis system integrating pose estimation and computer vision for player movement analysis.",
    highlights: [
      "Built an AI-powered basketball shot analysis system by integrating pose estimation and computer vision for player movement analysis.",
      "Used OpenPose to extract body keypoints from images and videos, enabling frame-level analysis of shooting posture and movement patterns.",
      "Applied object detection and tracking techniques to identify players and basketball movement across video frames.",
      "Exposed analysis functionality through a Flask REST API to support future integration with coaching dashboards or sports analytics tools.",
    ],
  },
  {
    slug: "self-driving-car-perception",
    title: "Self-Driving Car Perception Model",
    tagline: "Object and pedestrian intent detection",
    image: "/images/projects/self-driving.png",
    featured: false,
    stack: ["Python", "YOLOv3", "MATLAB", "Deep Learning", "Computer Vision", "ADAS"],
    summary:
      "A prototype autonomous driving perception system for object detection and pedestrian intent analysis in simulated urban environments.",
    highlights: [
      "Developed a prototype autonomous driving perception system for object detection and pedestrian intent analysis in simulated urban environments.",
      "Implemented YOLOv3-based object detection, achieving 90% detection accuracy in simulated traffic scenarios.",
      "Designed MATLAB simulations to test model behavior under dynamic pedestrian movement and collision-risk situations.",
      "Demonstrated AI-driven perception and decision-making concepts relevant to ADAS, robotics, and autonomous systems.",
    ],
  },
]

export const work = {
  label: "Work",
  title: "Projects",
  description: `Data science and AI projects by ${person.name}`,
}
