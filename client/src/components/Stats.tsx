import { Users, BookOpen, Award, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Users, label: "Estudiantes activos", value: "5,000+", color: "text-blue-500" },
  { icon: BookOpen, label: "Cursos disponibles", value: "50+", color: "text-purple-500" },
  { icon: Award, label: "Certificaciones", value: "3,500+", color: "text-green-500" },
  { icon: Star, label: "Satisfacción", value: "4.9/5", color: "text-yellow-500" },
];

export function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={index}
            className="p-6 text-center hover-elevate transition-all duration-300"
            data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <Icon className={`h-10 w-10 mx-auto mb-3 ${stat.color}`} />
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        );
      })}
    </div>
  );
}
