import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CourseCard } from "@/components/CourseCard";
import { BlogCard } from "@/components/BlogCard";
import { Stats } from "@/components/Stats";
import { TeamMember } from "@/components/TeamMember";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

import webDevImage from "@assets/generated_images/Web_development_course_thumbnail_769ae78c.png";
import dataImage from "@assets/generated_images/Data_science_course_thumbnail_cdbe230e.png";
import uxImage from "@assets/generated_images/UX_design_course_thumbnail_7fbebaff.png";
import instructor1 from "@assets/generated_images/Instructor_Maria_Rodriguez_portrait_5db98a7d.png";
import instructor2 from "@assets/generated_images/Instructor_David_Chen_portrait_68e53ae4.png";
import teamPhoto from "@assets/generated_images/Developit_team_photo_f0a7365e.png";
import blogAI from "@assets/generated_images/AI_blog_header_image_ad093c81.png";
import blogWeb from "@assets/generated_images/Web_development_blog_image_fc3dff6e.png";
import blogDB from "@assets/generated_images/Database_blog_header_image_374064b7.png";

//todo: remove mock functionality - course data
const courses = [
  {
    title: "Desarrollo Web Full Stack",
    description: "Domina React, Node.js, bases de datos y deployment. Construye aplicaciones web completas y escalables desde cero.",
    category: "Desarrollo Web",
    instructor: { name: "María Rodríguez", avatar: instructor1 },
    duration: "12 semanas",
    level: "Intermedio" as const,
    image: webDevImage,
  },
  {
    title: "Ciencia de Datos con Python",
    description: "Aprende análisis de datos, machine learning y visualización. Conviértete en un científico de datos profesional.",
    category: "Data Science",
    instructor: { name: "David Chen", avatar: instructor2 },
    duration: "14 semanas",
    level: "Avanzado" as const,
    image: dataImage,
  },
  {
    title: "Diseño UX/UI Profesional",
    description: "Crea experiencias digitales memorables. Aprende Figma, Design Thinking y prototipado de interfaces modernas.",
    category: "Diseño",
    instructor: { name: "María Rodríguez", avatar: instructor1 },
    duration: "10 semanas",
    level: "Principiante" as const,
    image: uxImage,
  },
];

//todo: remove mock functionality - team data
const team = [
  { name: "María Rodríguez", role: "Fundadora & CEO", avatar: instructor1 },
  { name: "David Chen", role: "Director de Tecnología", avatar: instructor2 },
  { name: "Ana García", role: "Directora Académica", avatar: instructor1 },
  { name: "Carlos López", role: "Jefe de Producto", avatar: instructor2 },
];

//todo: remove mock functionality - blog data
const blogPosts = [
  {
    title: "Inteligencia Artificial: Cómo está transformando el aprendizaje moderno",
    excerpt: "Descubre cómo la IA está revolucionando la forma en que aprendemos. Desde asistentes personalizados hasta sistemas de recomendación inteligentes, exploramos las herramientas que están cambiando la educación. Aprende sobre prompting efectivo, automatización y las mejores prácticas para aprovechar la IA en tu proceso de aprendizaje.",
    category: "Inteligencia Artificial",
    date: "15 Nov 2025",
    readTime: "5 min",
    image: blogAI,
    author: "David Chen",
  },
  {
    title: "Desarrollo Full Stack: La guía completa para comenzar tu carrera",
    excerpt: "¿Quieres convertirte en desarrollador Full Stack? En esta guía completa exploramos las tecnologías esenciales: HTML, CSS, JavaScript, frameworks modernos como React, y backend con Node.js. También cubrimos bases de datos, APIs RESTful y deployment. Todo lo que necesitas saber para construir aplicaciones web profesionales desde cero.",
    category: "Desarrollo Full Stack",
    date: "12 Nov 2025",
    readTime: "8 min",
    image: blogWeb,
    author: "María Rodríguez",
  },
  {
    title: "Bases de Datos en 2025: SQL vs NoSQL, ¿cuál elegir?",
    excerpt: "MySQL, PostgreSQL, MongoDB... el mundo de las bases de datos puede ser abrumador. En este artículo comparamos las principales opciones, explicamos cuándo usar bases relacionales vs documentales, y te damos las claves para elegir la mejor solución según tu proyecto. Incluye fundamentos de modelado de datos y mejores prácticas de optimización.",
    category: "Bases de Datos",
    date: "8 Nov 2025",
    readTime: "6 min",
    image: blogDB,
    author: "David Chen",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      <HeroCarousel />
      
      {/* Courses Section */}
      <section id="cursos" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Cursos destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Programas diseñados por expertos de la industria para llevarte al siguiente nivel profesional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Transformando el futuro de la educación online
            </h2>
          </div>

          {/* Main Content Grid */}
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

          {/* Team Section */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Nuestro equipo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden max-w-4xl mx-auto shadow-xl">
            <img 
              src={teamPhoto} 
              alt="Equipo Developit" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Blog
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Artículos, tutoriales y recursos sobre las últimas tendencias en tecnología y desarrollo profesional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}
