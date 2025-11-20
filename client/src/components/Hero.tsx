import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_students_learning_together_b8fd20ce.png";

export function Hero() {
  return (
    <section 
      id="inicio"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 text-center">
        <Badge 
          className="mb-6 bg-white/10 text-white backdrop-blur-md border-white/20 hover:bg-white/20" 
          data-testid="badge-trust"
        >
          <Users className="h-3 w-3 mr-1" />
          Únete a más de 5,000 profesionales innovadores
        </Badge>
        
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Formación tecnológica
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            del futuro
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Aprende las habilidades más demandadas con expertos de la industria. 
          Proyectos reales, metodología innovadora, resultados garantizados.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-base bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
            data-testid="button-explore-courses"
          >
            Explorar cursos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base bg-white/5 backdrop-blur-md border-white/30 text-white hover:bg-white/10"
            data-testid="button-learn-more"
          >
            Saber más
          </Button>
        </div>
      </div>
    </section>
  );
}
