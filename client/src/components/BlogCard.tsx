import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export function BlogCard({ title, excerpt, category, date, readTime, image, author }: BlogCardProps) {
  return (
    <Card className="overflow-hidden group hover-elevate transition-all duration-300" data-testid={`card-blog-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Por {author}</span>
        <Button variant="ghost" size="sm" className="group/btn" data-testid="button-read-more">
          Leer más
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
