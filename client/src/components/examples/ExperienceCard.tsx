import ExperienceCard from "../ExperienceCard";

export default function ExperienceCardExample() {
  return (
    <div className="p-8">
      <ExperienceCard
        company="Tech Corp"
        role="Senior Full Stack Developer"
        period="2022 - Present"
        description="Led development of core platform features, mentored junior developers, and architected scalable solutions serving millions of users."
        technologies={["React", "Node.js", "PostgreSQL", "AWS"]}
      />
    </div>
  );
}
