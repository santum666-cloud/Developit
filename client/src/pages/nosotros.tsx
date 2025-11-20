import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent } from "@/components/ui/card";
import { TeamMember } from "@/components/TeamMember";
import { GraduationCap } from "lucide-react";

import instructor1 from "@assets/generated_images/Instructor_Maria_Rodriguez_portrait_5db98a7d.png";
import instructor2 from "@assets/generated_images/Instructor_David_Chen_portrait_68e53ae4.png";
import teamPhoto from "@assets/generated_images/Developit_team_photo_f0a7365e.png";

const team = [
  { name: "María Rodríguez", role: "Fundadora & CEO", avatar: instructor1 },
  { name: "David Chen", role: "Director de Tecnología", avatar: instructor2 },
  { name: "Ana García", role: "Directora Académica", avatar: instructor1 },
  { name: "Carlos López", role: "Jefe de Producto", avatar: instructor2 },
];

export default function Nosotros() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-orange-500/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Transformando el futuro de la educación online
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Democratizando el acceso a formación de calidad en tecnología y desarrollo profesional
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Mission & Vision Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="text-lg leading-relaxed">
                <p className="mb-6">
                  En <span className="font-bold text-primary">DEVELOP iT</span>, creemos que el aprendizaje debe ser 
                  accesible, práctico y orientado al futuro. Nuestra misión es democratizar la educación de calidad, 
                  ofreciendo formación especializada en las competencias más demandadas del mercado laboral actual.
                </p>
                
                <p className="mb-6">
                  Combinamos metodologías innovadoras con tecnología de vanguardia para crear experiencias de aprendizaje únicas. 
                  Desde programación hasta idiomas, cada curso está diseñado por expertos de la industria para garantizar 
                  relevancia y aplicabilidad real.
                </p>
                
                <p className="text-muted-foreground">
                  Nuestra formación es totalmente gratuita, y además ofrecemos tres niveles de soporte. El nivel básico, 
                  incluido sin coste, responde a tus consultas de forma automatizada. Si prefieres un acompañamiento colectivo 
                  o individual, podrás acceder a planes muy económicos pensados para ti.
                </p>
              </div>
            </div>

            {/* Right Column - Vision Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary via-orange-500 to-orange-600 rounded-2xl p-8 md:p-10 text-white shadow-2xl transform transition-transform hover:scale-105 duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Nuestra Visión
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg">Educación accesible para todos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg">Metodologías innovadoras</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg">Formación 100% online</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg">Aprendizaje práctico y aplicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg">Tecnología de vanguardia</span>
                  </li>
                </ul>

                <div className="mt-8 text-center">
                  <div className="inline-block bg-white/90 backdrop-blur-sm text-primary px-6 py-3 rounded-full font-semibold text-lg">
                    Próximamente 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center p-8 hover-elevate transition-all duration-300 border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  11
                </div>
                <div className="text-lg font-semibold text-muted-foreground">
                  Áreas Especializadas
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-elevate transition-all duration-300 border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  100%
                </div>
                <div className="text-lg font-semibold text-muted-foreground">
                  Formación Online
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-elevate transition-all duration-300 border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  0€
                </div>
                <div className="text-lg font-semibold text-muted-foreground">
                  Totalmente Gratuito
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Photo */}
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={teamPhoto} 
                alt="Equipo de DEVELOP iT" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Nuestro equipo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Nuestros valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover-elevate transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Excelencia
                </h3>
                <p className="text-muted-foreground">
                  Nos comprometemos a ofrecer contenido de la más alta calidad, revisado y actualizado constantemente por expertos de la industria.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-elevate transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Accesibilidad
                </h3>
                <p className="text-muted-foreground">
                  Creemos que la educación es un derecho. Por eso, toda nuestra formación es gratuita y está disponible para cualquier persona.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover-elevate transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Innovación
                </h3>
                <p className="text-muted-foreground">
                  Utilizamos las últimas tecnologías y metodologías pedagógicas para crear experiencias de aprendizaje efectivas y atractivas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
