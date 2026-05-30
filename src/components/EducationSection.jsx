import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Education.
        </h2>

        <div className="max-w-3xl">
          <div className="relative pl-8 border-l border-border">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 border-4 border-background" />
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Indian Institute of Information Technology, Bhopal
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                <span className="font-medium">B.Tech in Electronics & Communication</span>
                <span className="hidden sm:inline">&bull;</span>
                <span>2022 &mdash; 2026</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor's degree with a focus on software engineering and systems design. 
                Actively involved in technical clubs and open-source contributions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
