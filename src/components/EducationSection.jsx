import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  const educationData = [
    {
      institution: "Indian Institute of Information Technology, Bhopal",
      degree: "B.Tech in Electronics & Communication",
      duration: "2022 — 2026",
      description: "Currently pursuing my Bachelor's degree with a focus on software engineering and systems design. Actively involved in technical clubs and open-source contributions."
    },
    {
      institution: "Goethal's Public School, Bhagalpur",
      degree: "Class XII (CBSE)",
      duration: "2021",
      description: "Achieved 90.2% in Senior School Certificate Examination (Science Stream with Mathematics)."
    },
    {
      institution: "Goethal's Public School, Bhagalpur",
      degree: "Class X (CBSE)",
      duration: "2019",
      description: "Achieved 93.0% in Secondary School Examination."
    }
  ];

  return (
    <section id="education" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Education.
        </h2>

        <div className="max-w-3xl">
          <div className="relative pl-8 border-l border-border">
            {educationData.map((edu, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-1 border-4 border-background" />
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    {edu.institution}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                  <span className="font-medium">{edu.degree}</span>
                  <span className="hidden sm:inline">&bull;</span>
                  <span>{edu.duration}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
