import { CourseCard } from '../CourseCard';
import webDevImage from "@assets/generated_images/Web_development_course_thumbnail_769ae78c.png";
import instructorImage from "@assets/generated_images/Instructor_Maria_Rodriguez_portrait_5db98a7d.png";

export default function CourseCardExample() {
  return (
    <div className="max-w-sm">
      <CourseCard
        title="Desarrollo Web Full Stack"
        description="Aprende a construir aplicaciones web completas desde cero con React, Node.js y bases de datos modernas"
        category="Desarrollo Web"
        instructor={{
          name: "María Rodríguez",
          avatar: instructorImage
        }}
        duration="12 semanas"
        level="Intermedio"
        image={webDevImage}
      />
    </div>
  );
}
