import SkillCategory from "../SkillCategory";
import { Code2 } from "lucide-react";

export default function SkillCategoryExample() {
  return (
    <div className="p-8">
      <SkillCategory
        title="Frontend Development"
        skills={["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]}
        icon={Code2}
      />
    </div>
  );
}
