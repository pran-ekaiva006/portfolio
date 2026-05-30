import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projectsData } from "../data/projects";
import { NotFound } from "./NotFound";
import { useEffect } from "react";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {project.title}
            </h1>
            <div className="flex space-x-4">
              {project.demoUrl !== "#" && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 bg-secondary text-foreground hover:text-primary rounded-full transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={24} />
                </a>
              )}
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-secondary text-foreground hover:text-primary rounded-full transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-border">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium border border-border rounded-md bg-secondary text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-12 text-left">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">The Problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Architecture & Tech Stack</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.architecture}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Challenges Overcome</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
