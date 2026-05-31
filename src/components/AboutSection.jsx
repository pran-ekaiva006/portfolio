import { Code2, FolderGit2, Trophy } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-card border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About Me.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
            <p>
              I'm an engineering student at IIIT Bhopal and a full-stack developer who loves building products from zero to one.
              I enjoy bridging the gap between complex backend logic and clean, intuitive user interfaces.
            </p>
            <p>
              My journey started with competitive programming, but I quickly fell in love with web development because it allowed me to build real things that people can use.
              Whether it's designing a PostgreSQL schema, writing React components, or deploying an AI integration, I care deeply about the details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="primary-button inline-block text-center">
                Get In Touch
              </a>
              <a
                href="/Pranjal_Verma_Resume.pdf"
                download="Pranjal_Verma_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-md border border-border bg-background text-foreground hover:bg-secondary transition-colors duration-200 inline-block text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            <div className="p-6 rounded-lg bg-background border border-border flex items-center gap-4">
              <div className="p-3 rounded-md bg-secondary">
                <FolderGit2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl text-foreground">29+</h4>
                <p className="text-sm text-muted-foreground">Public Repositories</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border flex items-center gap-4">
              <div className="p-3 rounded-md bg-secondary">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl text-foreground">10+</h4>
                <p className="text-sm text-muted-foreground">Deployed Projects</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border flex items-center gap-4">
              <div className="p-3 rounded-md bg-secondary">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl text-foreground">Open Source</h4>
                <p className="text-sm text-muted-foreground">Hacktoberfest Contributor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};