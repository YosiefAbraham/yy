import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal, { ExperienceDetail } from "./ExperienceModal";

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const experiences: ExperienceDetail[] = [
    {
      company: "Oasiz.Ai",
      role: "Growth Product Manager",
      period: "August 2025 - Present",
      category: "PM",
      description: "Led product optimization through user research and A/B testing. Translated user feedback into actionable product improvements.",
      technologies: ["Product Management", "A/B Testing", "User Research", "UI/UX"],
      companyUrl: "https://oasiz.ai",
      longDescription:
        "As a Growth Product Manager at Oasiz.Ai, I bridge the gap between users and the engineering team by analyzing feedback, conducting usability testing, and optimizing product flows. My work directly impacts user adoption and product quality through data-driven decision making.",
      images: ["oasiz-1.jpg", "oasiz-2.jpg"],
      responsibilities: [
        "Analyzed user feedback and bug reports to identify patterns and prioritize product improvements",
        "Translated user issues into reproducible test cases with clear technical specifications",
        "Recommended technical fixes and UI optimizations to enhance user experience",
        "Led comprehensive usability testing sessions on Stanford's campus",
        "Designed and executed A/B-style experiments to evaluate different user flows",
        "Collaborated with engineering team to implement data-driven product improvements",
      ],
      achievements: [
        "Improved user flow efficiency through systematic A/B testing and iteration",
        "Established usability testing framework that continues to inform product decisions",
        "Successfully translated complex user feedback into actionable technical requirements",
      ],
    },
    {
      company: "Collide Capital",
      role: "Venture Capitalist Senior Scout",
      period: "September 2024 - Present",
      category: "VC",
      description: "Conducted market analysis and due diligence on AI technologies. Produced investment pitches and strategic recommendations.",
      technologies: ["Market Analysis", "Due Diligence", "AI Technologies", "Investment Strategy"],
      companyUrl: "https://collidecapital.com",
      longDescription:
        "As a Senior Scout at Collide Capital, I identify promising investment opportunities in the AI and technology sectors. My role involves conducting deep market analyses, performing due diligence on startups, and crafting compelling investment pitches for the partnership.",
      images: ["collide-1.jpg"],
      responsibilities: [
        "Conducted comprehensive market analyses for emerging AI technology sectors",
        "Performed thorough due diligence on potential investment opportunities",
        "Synthesized complex technical and market insights for investment committee",
        "Produced 4+ detailed investment pitches biweekly with complete financial models",
        "Developed risk analyses and partnership strategies for portfolio companies",
        "Maintained network of founders and operators in the AI ecosystem",
      ],
      achievements: [
        "Evaluated 50+ potential investments across AI and technology sectors",
        "Contributed to investment decision-making process with detailed market insights",
        "Built strong relationships with emerging AI startup founders and operators",
      ],
    },
    {
      company: "Morgan Stanley",
      role: "Fixed Income Sales and Trading Summer Analyst",
      period: "June 2025 - August 2025",
      category: "Finance",
      description: "Analyzed credit, municipal, and securitized products. Delivered technical trade recommendations and market insights.",
      technologies: ["Financial Analysis", "Trading", "Market Research", "Credit Products"],
      companyUrl: "https://www.morganstanley.com",
      longDescription:
        "During my summer at Morgan Stanley's Fixed Income division, I gained hands-on experience in institutional trading and market analysis. I worked across multiple desks including Credit, Municipal Bonds, and Securitized Products, developing deep expertise in fixed income markets.",
      images: ["ms-1.jpg", "ms-2.jpg", "ms-3.jpg"],
      responsibilities: [
        "Conducted in-depth market analysis for Credit, Municipal, and Securitized Product desks",
        "Synthesized insights from 50+ market primers and director-level meetings",
        "Developed 5+ actionable trade recommendations based on market research",
        "Crafted and delivered technical trade pitch proposals to senior traders bi-weekly",
        "Monitored market conditions and analyzed impact on trading positions",
        "Collaborated with traders to understand client needs and market dynamics",
      ],
      achievements: [
        "Delivered 5+ successful trade recommendations that were executed by the desk",
        "Presented bi-weekly technical pitch proposals to senior trading professionals",
        "Developed comprehensive understanding of fixed income markets and trading operations",
      ],
    },
    {
      company: "Stanford University School of Engineering",
      role: "Lead Engineer Researcher",
      period: "June 2024 - November 2024",
      category: "Civil Engineering",
      description: "Led cross-functional research on public transit issues impacting 8M+ commuters. Used Python and AI to analyze millions of data points.",
      technologies: ["Python", "Excel", "Data Analysis", "AI", "Public Transit"],
      companyUrl: "https://engineering.stanford.edu",
      longDescription:
        "Led a critical research initiative examining public transit inefficiencies in the San Francisco Bay Area. This cross-functional project combined civil engineering principles with advanced data analytics to identify solutions that could improve transportation for millions of daily commuters.",
      images: ["stanford-1.jpg", "stanford-2.jpg"],
      responsibilities: [
        "Led cross-functional research team studying public transit issues for Seamless Bay Area",
        "Processed and analyzed tens of millions of data points on vehicle and population movement",
        "Developed Python-based analytics tools to identify transit inefficiencies",
        "Applied AI and machine learning techniques to derive unique insights from transit data",
        "Collaborated with transportation planners and policy makers",
        "Presented findings and recommendations to stakeholders",
      ],
      achievements: [
        "Delivered actionable insights impacting 8+ million Bay Area commuters",
        "Developed innovative AI-driven analytics methodology for transit data analysis",
        "Successfully managed cross-functional team to complete comprehensive research project",
      ],
    },
    {
      company: "Experience Placeholder 1",
      role: "Role Title",
      period: "TBD",
      category: "TBD",
      description: "Details coming soon - This experience will showcase professional growth and contributions in a specific domain.",
      technologies: ["To be updated"],
      longDescription:
        "This experience placeholder is reserved for future professional experiences. Details will be added as new opportunities arise.",
      images: [],
      responsibilities: [
        "Responsibility details will be added upon experience completion",
      ],
      achievements: [
        "Achievement details will be documented as accomplishments are realized",
      ],
    },
    {
      company: "Experience Placeholder 2",
      role: "Role Title",
      period: "TBD",
      category: "TBD",
      description: "Details coming soon - This experience will showcase professional growth and contributions in a specific domain.",
      technologies: ["To be updated"],
      longDescription:
        "This experience placeholder is reserved for future professional experiences. Details will be added as new opportunities arise.",
      images: [],
      responsibilities: [
        "Responsibility details will be added upon experience completion",
      ],
      achievements: [
        "Achievement details will be documented as accomplishments are realized",
      ],
    },
  ];

  const handleExperienceClick = (experience: ExperienceDetail) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="1"
          title="Experience"
          subtitle="Professional experience across tech, finance, and research"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <ExperienceCard 
              key={exp.company} 
              {...exp} 
              onClick={() => handleExperienceClick(exp)}
            />
          ))}
        </div>

        <ExperienceModal experience={selectedExperience} open={modalOpen} onClose={handleCloseModal} />
      </div>
    </section>
  );
}
