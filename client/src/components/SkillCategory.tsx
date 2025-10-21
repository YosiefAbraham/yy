import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export default function SkillCategory({ title, skills, icon: Icon }: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold" data-testid={`text-skill-category-${title.toLowerCase().replace(/\s/g, '-')}`}>
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="text-sm px-4 py-2"
            data-testid={`badge-skill-${skill.toLowerCase().replace(/\s/g, '-')}`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
