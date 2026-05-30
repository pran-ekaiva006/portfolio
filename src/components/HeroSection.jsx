import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Herosection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-4xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Pranjal Verma.
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium text-primary">
            Full Stack Developer &middot; B.Tech ECE, IIIT Bhopal '26
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl">
            I build AI-powered web applications with React, Node.js, and Python.
            Passionate about scalable architectures, clean interfaces, and data-driven products.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" className="primary-button">
              View My Work
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/pran-ekaiva006" aria-label="GitHub Profile" target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-secondary rounded-full">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/pranjal-verma-74954325a" aria-label="LinkedIn Profile" target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-secondary rounded-full">
                <Linkedin size={20} />
              </a>
              <a href="mailto:vermapranjal912@gmail.com" aria-label="Send an Email" className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-secondary rounded-full">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Placeholder for Profile Photo */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-secondary border border-border animate-fade-up flex items-center justify-center">
            <span className="text-4xl text-muted-foreground font-bold">PV</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50">
        <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
      </div>
    </section>
  );
};