export const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Django", "MongoDB", "PostgreSQL", "Supabase", "Turso"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Render", "Docker"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-card border border-border p-8 rounded-lg flex flex-col h-full">
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-border">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-3 py-1 bg-secondary text-foreground text-sm rounded-md font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};