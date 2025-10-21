import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard. Handles 10K+ daily transactions.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and intelligent task prioritization using AI.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "OpenAI"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform processing millions of events per day. Features customizable widgets and automated reporting.",
      technologies: ["Vue.js", "D3.js", "Python", "Redis", "Elasticsearch"],
      demoUrl: "https://example.com",
    },
    {
      title: "Social Media App",
      description: "Mobile-first social networking platform with image sharing, real-time messaging, and content discovery algorithms.",
      technologies: ["React Native", "GraphQL", "AWS", "DynamoDB"],
      githubUrl: "https://github.com",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool that helps marketers and writers generate high-quality content with advanced customization options.",
      technologies: ["Python", "FastAPI", "React", "TensorFlow", "Docker"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Fitness Tracking Platform",
      description: "Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress visualization.",
      technologies: ["Flutter", "Firebase", "Node.js", "Chart.js"],
      demoUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="2"
          title="Featured Projects"
          subtitle="Showcasing innovative solutions and technical excellence"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
