import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-card border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured Work.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-background border border-border rounded-lg p-6 flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <Link to={`/project/${project.id}`} className="hover:underline">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <div className="flex space-x-3 text-muted-foreground">
                  {project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label={`Live Demo of ${project.title}`}>
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" aria-label={`GitHub Repo of ${project.title}`}>
                    <Github size={20} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border border-border rounded-md bg-secondary text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium border border-border rounded-md bg-secondary text-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <Link 
                  to={`/project/${project.id}`} 
                  className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors whitespace-nowrap"
                >
                  Read Case Study <ArrowRight size={14} />
                </Link>
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
