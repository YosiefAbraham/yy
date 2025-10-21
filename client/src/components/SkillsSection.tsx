import SectionHeader from "./SectionHeader";
import SkillCategory from "./SkillCategory";
import { Code2, Database, Wrench, Users } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS", "Redux", "GraphQL"],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "REST APIs"],
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Webpack", "Vite", "Linux"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Team Leadership", "Agile/Scrum", "Code Review", "Mentoring", "Problem Solving", "Communication"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="3"
          title="Skills & Expertise"
          subtitle="A comprehensive toolkit for building modern applications"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
