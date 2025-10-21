import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Tech Innovations Inc",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading development of cloud-native applications, architecting scalable microservices, and mentoring a team of 5 developers. Reduced system latency by 40% through performance optimizations.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    },
    {
      company: "Digital Solutions Co",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing web applications. Implemented CI/CD pipelines and improved deployment frequency by 300%.",
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"],
    },
    {
      company: "StartUp Ventures",
      role: "Frontend Developer",
      period: "2018 - 2020",
      description: "Built responsive web interfaces for early-stage products. Collaborated closely with designers to create pixel-perfect implementations.",
      technologies: ["JavaScript", "React", "SASS", "Webpack", "Firebase"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="1"
          title="Experience"
          subtitle="Building innovative solutions across diverse industries and technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
