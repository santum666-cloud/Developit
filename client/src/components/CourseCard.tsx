import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Signal } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  instructor: {
    name: string;
    avatar: string;
  };
  duration: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  image: string;
}

export function CourseCard({ 
  title, 
  description, 
  category, 
  instructor, 
  duration, 
  level,
  image 
}: CourseCardProps) {
  const levelColors = {
    Principiante: "bg-green-500/10 text-green-700 dark:text-green-400",
    Intermedio: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
    Avanzado: "bg-red-500/10 text-red-700 dark:text-red-400",
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:scale-[1.02]" data-testid={`card-course-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" data-testid="badge-category">
            {category}
          </Badge>
          <Badge className={levelColors[level]} data-testid="badge-level">
            <Signal className="h-3 w-3 mr-1" />
            {level}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={instructor.avatar} alt={instructor.name} />
            <AvatarFallback>{instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{instructor.name}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" data-testid="button-enroll">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
}
