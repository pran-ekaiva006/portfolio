import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Resume Builder",
    description: "AI-generated, ATS-optimised resumes. JWT auth, PDF export, dynamic section editing. Built as a comprehensive SaaS product.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://ai-resume-builder-6-o5vo.onrender.com/",
    githubUrl: "https://github.com/pran-ekaiva006/AI-resume_builder",
  },
  {
    title: "BreatheESG",
    description: "ESG data ingestion platform. Automates validation of SAP exports, utility bills, and corporate travel records to streamline compliance reporting.",
    tags: ["Django", "DRF", "PostgreSQL", "React", "Vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/pran-ekaiva006/Breathe-ESG",
  },
  {
    title: "CashFlowX",
    description: "Comprehensive personal finance manager with automated expense tracking, budgeting, and detailed visual analytics.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://personal-finance-manager1.onrender.com/login",
    githubUrl: "https://github.com/pran-ekaiva006/Personal-Finance-Manager",
  },
  {
    title: "Flight Management App",
    description: "Production-grade PWA developed for Source Asia. Features robust authentication and real-time state synchronization.",
    tags: ["Next.js 14", "TypeScript", "Supabase", "Zustand"],
    demoUrl: "#",
    githubUrl: "https://github.com/pran-ekaiva006/flight-management-app",
  },
  {
    title: "Es-Magico CRM",
    description: "Single-screen CRM dashboard for streamlined lead management. Implements optimistic UI updates and edge database.",
    tags: ["React 19", "Express", "Turso SQLite"],
    demoUrl: "#",
    githubUrl: "https://github.com/pran-ekaiva006/-Es-Magico",
  },
  {
    title: "Notes Backend",
    description: "Multi-user notes API developed for Fi Money. Supports secure sharing, pinning, full-text search, and pagination.",
    tags: ["Node.js", "Express", "MongoDB Atlas"],
    demoUrl: "#",
    githubUrl: "https://github.com/pran-ekaiva006/Notes-App",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-card border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured Work.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-background border border-border rounded-lg p-6 flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-3 text-muted-foreground">
                  {project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border border-border rounded-md bg-secondary text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="primary-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pran-ekaiva006"
          >
            View More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
