import { TeamMember } from '../TeamMember';
import avatarImage from "@assets/generated_images/Instructor_Maria_Rodriguez_portrait_5db98a7d.png";

export default function TeamMemberExample() {
  return (
    <div className="max-w-xs">
      <TeamMember
        name="María Rodríguez"
        role="Fundadora & CEO"
        avatar={avatarImage}
      />
    </div>
  );
}
