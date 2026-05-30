export const projectsData = [
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    description: "AI-generated, ATS-optimised resumes. JWT auth, PDF export, dynamic section editing. Built as a comprehensive SaaS product.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://ai-resume-builder-6-o5vo.onrender.com/",
    githubUrl: "https://github.com/pran-ekaiva006/AI-resume_builder",
    problem: "Job seekers struggle to format resumes that pass Applicant Tracking Systems (ATS) while maintaining a professional design. Existing tools are often expensive or lack AI-driven content suggestions.",
    architecture: "I chose a MERN stack (MongoDB, Express, React, Node.js) for rapid iteration. JWT handles secure user authentication, allowing users to save and revisit their resumes. The frontend uses a complex state management system to handle dynamic section editing in real-time.",
    challenges: "One of the major challenges was generating high-quality PDFs on the client-side without massive performance overhead. I had to optimize the rendering tree and use a specialized library to ensure the exported PDF matched the DOM exactly, regardless of the user's screen size."
  },
  {
    id: "breathe-esg",
    title: "BreatheESG",
    description: "ESG data ingestion platform. Automates validation of SAP exports, utility bills, and corporate travel records to streamline compliance reporting.",
    tags: ["Django", "DRF", "PostgreSQL", "React", "Vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/pran-ekaiva006/Breathe-ESG",
    problem: "Corporate Environmental, Social, and Governance (ESG) reporting requires ingesting massive amounts of fragmented data (utility bills, SAP exports) which is historically a manual, error-prone process.",
    architecture: "I built the backend using Django and Django Rest Framework to leverage its robust ORM and admin panel. PostgreSQL handles the complex relational data models. The frontend is a snappy React SPA powered by Vite for fast dashboard rendering.",
    challenges: "Handling bulk data uploads and validation was tricky. I had to implement asynchronous task queues to process large SAP CSV exports without blocking the main thread, ensuring the user interface remained responsive during heavy operations."
  },
  {
    id: "cashflowx",
    title: "CashFlowX",
    description: "Comprehensive personal finance manager with automated expense tracking, budgeting, and detailed visual analytics.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://personal-finance-manager1.onrender.com/login",
    githubUrl: "https://github.com/pran-ekaiva006/Personal-Finance-Manager",
    problem: "Many personal finance apps are either too complex or too simplistic. Users needed a dashboard that provided granular budgeting tools combined with intuitive, high-level visual analytics.",
    architecture: "Built with the MERN stack. The backend exposes RESTful endpoints for transaction ingestion, while the React frontend utilizes charting libraries to render real-time financial health overviews.",
    challenges: "Aggregating transaction data by category and date for the analytics charts was initially slow. I optimized the MongoDB aggregation pipelines to push the computational load to the database layer, drastically reducing API response times."
  },
  {
    id: "flight-management",
    title: "Flight Management App",
    description: "Production-grade PWA developed for Source Asia. Features robust authentication and real-time state synchronization.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Zustand"],
    demoUrl: "#",
    githubUrl: "https://github.com/pran-ekaiva006/flight-management-app",
    problem: "Source Asia needed a reliable, offline-capable Progressive Web App (PWA) to manage flight schedules and operational data in environments with spotty internet connectivity.",
    architecture: "Next.js 14 provides the backbone for server-side rendering and API routes. Supabase was chosen for real-time database synchronization and out-of-the-box authentication. Zustand handles global client state efficiently.",
    challenges: "Ensuring state consistency between Zustand and Supabase's real-time subscriptions required careful architectural planning to prevent race conditions when multiple operators updated the same flight status simultaneously."
  },
  {
    id: "es-magico-crm",
    title: "Es-Magico CRM",
    description: "Single-screen CRM dashboard for streamlined lead management. Implements optimistic UI updates and edge database.",
    tags: ["React 19", "Express", "Turso SQLite"],
    demoUrl: "#",
    githubUrl: "https://github.com/pran-ekaiva006/-Es-Magico",
    problem: "Sales teams often waste time navigating between multiple pages in traditional CRMs. The goal was to build a 'single-screen' experience where all lead management happens instantly.",
    architecture: "React 19 on the frontend allows for aggressive optimistic updates. The backend uses Express, connected to Turso (an edge SQLite database) to guarantee ultra-low latency reads globally.",
    challenges: "Implementing optimistic UI meant writing complex rollback logic in case the Turso edge database threw an error or constraint violation, ensuring the UI always eventually matches the true database state."
  },
  {
    id: "notes-backend",
    title: "Notes Backend",
    description: "Multi-user notes API developed for Fi Money. Supports secure sharing, pinning, full-text search, and pagination.",
    tags: ["Node.js", "Express", "MongoDB Atlas"],
    demoUrl: "#",
    githubUrl: "https://github.com/pran-ekaiva006/Notes-App",
    problem: "A robust, scalable backend was needed to support a highly concurrent notes application with features like full-text search, secure sharing between users, and high read/write throughput.",
    architecture: "A pure Node.js/Express REST API. MongoDB Atlas was utilized for its powerful native text-search capabilities and flexible document model, perfect for unstructured note data.",
    challenges: "Designing the security model for shared notes was complex. I implemented a robust permissions matrix in the database schema to ensure users could only read, write, or delete notes they explicitly had access to, backed by strict middleware validation."
  }
];
