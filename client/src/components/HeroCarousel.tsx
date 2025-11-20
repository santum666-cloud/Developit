import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage1 from "@assets/generated_images/Hero_students_learning_together_b8fd20ce.png";
import heroImage2 from "@assets/generated_images/Web_development_course_thumbnail_769ae78c.png";
import heroImage3 from "@assets/generated_images/Data_science_course_thumbnail_cdbe230e.png";

const slides = [
  {
    image: heroImage1,
    eyebrow: "LOS MEJORES CURSOS ONLINE",
    title: "Sin horarios, sin Ataduras y Además",
    titleHighlight: "Gratis!!!",
    buttonText: "Más información",
  },
  {
    image: heroImage2,
    eyebrow: "TRABAJA EN LO QUE TE GUSTA",
    title: "Toma el Control y",
    titleHighlight: "Cambia tu Futuro",
    buttonText: "Más información",
  },
  {
    image: heroImage3,
    eyebrow: "METODOLOGÍA DIDÁCTICA PROBADA",
    title: "Una Forma de Aprender",
    titleHighlight: "Inovadora",
    buttonText: "Más información",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      id="inicio"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 text-center">
              <p className="text-sm md:text-base font-semibold text-gray-300 mb-4 tracking-wider">
                {slide.eyebrow}
              </p>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {slide.title}
                <br />
                <span className="text-primary">
                  {slide.titleHighlight}
                </span>
              </h1>
              
              <Button 
                size="lg" 
                className="text-base bg-primary hover:bg-primary/90"
                data-testid={`button-cta-slide-${index}`}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
        onClick={prevSlide}
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
        onClick={nextSlide}
        data-testid="button-next-slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "w-8 bg-primary" 
                : "w-3 bg-white/50 hover:bg-white/80"
            }`}
            data-testid={`button-slide-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
