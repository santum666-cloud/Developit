import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, TrendingUp, Heart, Code, Rocket, GraduationCap } from "lucide-react";
import { Link } from "wouter";

const openPositions = [
  {
    title: "Instructor de Desarrollo Full Stack",
    department: "Educación",
    type: "Tiempo completo",
    location: "Remoto",
    description: "Buscamos instructores apasionados por enseñar desarrollo web moderno. Crearás contenido educativo y guiarás a estudiantes en su camino profesional.",
  },
  {
    title: "Diseñador UX/UI",
    department: "Producto",
    type: "Tiempo completo",
    location: "Híbrido",
    description: "Únete a nuestro equipo para diseñar experiencias de aprendizaje intuitivas y atractivas que transformen la educación online.",
  },
  {
    title: "Desarrollador Frontend",
    department: "Tecnología",
    type: "Tiempo completo",
    location: "Remoto",
    description: "Desarrolla plataformas web de última generación que faciliten el aprendizaje a miles de estudiantes en todo el mundo.",
  },
  {
    title: "Especialista en Marketing Digital",
    department: "Marketing",
    type: "Tiempo parcial",
    location: "Remoto",
    description: "Ayuda a difundir nuestra misión de democratizar la educación tecnológica mediante estrategias innovadoras de marketing digital.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Crecimiento profesional",
    description: "Programas de formación continua y oportunidades de desarrollo de carrera.",
  },
  {
    icon: Users,
    title: "Equipo diverso",
    description: "Trabaja con profesionales talentosos de diferentes áreas y culturas.",
  },
  {
    icon: Heart,
    title: "Impacto real",
    description: "Transforma la educación y ayuda a miles de personas a alcanzar sus metas.",
  },
  {
    icon: TrendingUp,
    title: "Innovación constante",
    description: "Experimenta con las últimas tecnologías y metodologías educativas.",
  },
];

export default function Carreras() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-orange-500/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              <Briefcase className="h-3 w-3 mr-1" />
              Únete al equipo
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Construye el futuro de la educación
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Forma parte de un equipo apasionado que está transformando la manera en que las personas aprenden tecnología
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Nuestra misión
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                En <span className="font-bold text-primary">DEVELOP iT</span>, creemos que la educación de calidad debe ser accesible para todos. 
                Trabajamos cada día para democratizar el aprendizaje tecnológico y preparar a profesionales para los desafíos del futuro.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Buscamos personas apasionadas, creativas e innovadoras que compartan nuestra visión y quieran generar un impacto positivo 
                en la vida de miles de estudiantes.
              </p>
              <Link href="/nosotros">
                <Button variant="outline" size="lg" data-testid="button-learn-more">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Conoce más sobre nosotros
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-3xl transform rotate-3"></div>
              <Card className="relative">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                      <div className="text-sm text-muted-foreground">Estudiantes activos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">200+</div>
                      <div className="text-sm text-muted-foreground">Cursos disponibles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Satisfacción</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">30+</div>
                      <div className="text-sm text-muted-foreground">Países</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Por qué trabajar con nosotros
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos un ambiente de trabajo inspirador donde tu talento puede brillar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Posiciones abiertas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra la oportunidad perfecta para desarrollar tu carrera
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <Badge variant="secondary">{position.type}</Badge>
                      </div>
                      <CardDescription className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {position.department}
                        </span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </CardDescription>
                    </div>
                    <Button data-testid={`button-apply-${index}`}>
                      Aplicar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block">
              <CardContent className="p-8">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¿No ves tu posición ideal?</h3>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Siempre estamos buscando talento excepcional. Envíanos tu CV y cuéntanos cómo puedes contribuir a nuestro equipo.
                </p>
                <Button variant="outline" data-testid="button-spontaneous-application">
                  Enviar candidatura espontánea
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
