import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar, Clock, User, ArrowRight, PenLine } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

import blogAI from "@assets/generated_images/AI_blog_header_image_ad093c81.png";
import blogWeb from "@assets/generated_images/Web_development_blog_image_fc3dff6e.png";
import blogDB from "@assets/generated_images/Database_blog_header_image_374064b7.png";
import { BLOG_CATEGORIES } from "@shared/categories";

const allBlogPosts = [
  {
    title: "Inteligencia Artificial: Cómo está transformando el aprendizaje moderno",
    excerpt: "Descubre cómo la IA está revolucionando la forma en que aprendemos. Desde asistentes personalizados hasta sistemas de recomendación inteligentes, exploramos las herramientas que están cambiando la educación. Aprende sobre prompting efectivo, automatización y las mejores prácticas para aprovechar la IA en tu proceso de aprendizaje.",
    category: "Inteligencia Artificial",
    date: "15 Nov 2025",
    readTime: "5 min",
    image: blogAI,
    author: "David Chen",
    tags: ["IA", "Educación", "Tecnología"]
  },
  {
    title: "Desarrollo Full Stack: La guía completa para comenzar tu carrera",
    excerpt: "¿Quieres convertirte en desarrollador Full Stack? En esta guía completa exploramos las tecnologías esenciales: HTML, CSS, JavaScript, frameworks modernos como React, y backend con Node.js. También cubrimos bases de datos, APIs RESTful y deployment. Todo lo que necesitas saber para construir aplicaciones web profesionales desde cero.",
    category: "Desarrollo Full Stack",
    date: "12 Nov 2025",
    readTime: "8 min",
    image: blogWeb,
    author: "María Rodríguez",
    tags: ["Desarrollo Web", "Full Stack", "Carrera"]
  },
  {
    title: "Bases de Datos en 2025: SQL vs NoSQL, ¿cuál elegir?",
    excerpt: "MySQL, PostgreSQL, MongoDB... el mundo de las bases de datos puede ser abrumador. En este artículo comparamos las principales opciones, explicamos cuándo usar bases relacionales vs documentales, y te damos las claves para elegir la mejor solución según tu proyecto. Incluye fundamentos de modelado de datos y mejores prácticas de optimización.",
    category: "Bases de Datos",
    date: "8 Nov 2025",
    readTime: "6 min",
    image: blogDB,
    author: "David Chen",
    tags: ["Bases de Datos", "SQL", "NoSQL"]
  },
  {
    title: "Python para Data Science: Pandas, NumPy y Matplotlib",
    excerpt: "Python es el lenguaje líder para ciencia de datos. En este tutorial profundizamos en las tres librerías fundamentales: Pandas para manipulación de datos, NumPy para computación numérica y Matplotlib para visualización. Aprende a analizar datasets reales, crear gráficos impactantes y extraer insights valiosos de tus datos.",
    category: "Programación",
    date: "5 Nov 2025",
    readTime: "10 min",
    image: blogAI,
    author: "María Rodríguez",
    tags: ["Python", "Data Science", "Análisis de Datos"]
  },
  {
    title: "Machine Learning sin matemáticas: Una introducción práctica",
    excerpt: "El Machine Learning no tiene que ser intimidante. En este artículo desmitificamos los conceptos fundamentales y te mostramos cómo empezar con proyectos prácticos usando Scikit-learn. Desde clasificación hasta regresión, aprenderás a crear tus primeros modelos predictivos sin necesidad de un doctorado en matemáticas.",
    category: "Inteligencia Artificial",
    date: "2 Nov 2025",
    readTime: "7 min",
    image: blogAI,
    author: "David Chen",
    tags: ["Machine Learning", "IA", "Principiantes"]
  },
  {
    title: "CSS Grid y Flexbox: Cuándo usar cada uno",
    excerpt: "CSS Grid y Flexbox son herramientas poderosas para crear layouts modernos, pero ¿cuándo usar cada una? En esta guía práctica comparamos ambas tecnologías, mostramos casos de uso específicos y te damos las claves para diseñar interfaces responsive profesionales. Incluye ejemplos de código y demos interactivas.",
    category: "Desarrollo Full Stack",
    date: "29 Oct 2025",
    readTime: "6 min",
    image: blogWeb,
    author: "María Rodríguez",
    tags: ["CSS", "Layout", "Responsive Design"]
  },
  {
    title: "Automatización de tareas con Python: Guía práctica",
    excerpt: "Ahorra tiempo automatizando tareas repetitivas con Python. Aprende a automatizar emails, procesamiento de archivos, web scraping, generación de reportes y más. Este tutorial paso a paso te muestra cómo crear scripts útiles que te harán más productivo, incluso si eres principiante en programación.",
    category: "Programación",
    date: "25 Oct 2025",
    readTime: "9 min",
    image: blogWeb,
    author: "David Chen",
    tags: ["Python", "Automatización", "Productividad"]
  },
  {
    title: "Git y GitHub: Workflow profesional para equipos",
    excerpt: "El control de versiones es esencial para cualquier desarrollador. En esta guía completa cubrimos Git desde lo básico hasta workflows avanzados: branching strategies, pull requests, code reviews, resolución de conflictos y CI/CD. Aprende las mejores prácticas usadas en equipos profesionales de desarrollo.",
    category: "Preparación Entornos de Trabajo",
    date: "20 Oct 2025",
    readTime: "12 min",
    image: blogWeb,
    author: "María Rodríguez",
    tags: ["Git", "GitHub", "DevOps"]
  },
  {
    title: "Prompting efectivo: Saca el máximo partido a ChatGPT",
    excerpt: "ChatGPT y otros LLMs son herramientas increíbles, pero necesitas saber cómo usarlos correctamente. Descubre técnicas de prompt engineering: zero-shot, few-shot, chain-of-thought y más. Aprende a escribir prompts que generen respuestas precisas, creativas y útiles para desarrollo, análisis y aprendizaje.",
    category: "Inteligencia Artificial",
    date: "15 Oct 2025",
    readTime: "5 min",
    image: blogAI,
    author: "David Chen",
    tags: ["ChatGPT", "Prompting", "IA Generativa"]
  },
  {
    title: "PostgreSQL vs MySQL: Comparativa técnica 2025",
    excerpt: "¿PostgreSQL o MySQL para tu próximo proyecto? Analizamos en profundidad ambos sistemas: rendimiento, features avanzadas, tipos de datos, replicación, comunidad y ecosistema. Casos de uso reales, benchmarks actualizados y recomendaciones basadas en diferentes escenarios de aplicación.",
    category: "Bases de Datos",
    date: "10 Oct 2025",
    readTime: "11 min",
    image: blogDB,
    author: "María Rodríguez",
    tags: ["PostgreSQL", "MySQL", "Bases de Datos"]
  },
  {
    title: "Transformación Digital: Por dónde empezar en tu empresa",
    excerpt: "La transformación digital no es solo tecnología, es un cambio cultural. En este artículo exploramos cómo iniciar el proceso en tu organización: evaluación de madurez digital, definición de objetivos, selección de herramientas, gestión del cambio y medición de resultados. Casos de éxito y lecciones aprendidas.",
    category: "Transformación Digital",
    date: "5 Oct 2025",
    readTime: "8 min",
    image: blogAI,
    author: "David Chen",
    tags: ["Transformación Digital", "Empresa", "Innovación"]
  },
  {
    title: "Lectura rápida: Técnicas científicamente probadas",
    excerpt: "Aprende a leer más rápido sin sacrificar comprensión. Exploramos técnicas respaldadas por la ciencia: eliminación de subvocalización, ampliación del campo visual, skimming estratégico y más. Incluye ejercicios prácticos para duplicar tu velocidad lectora en 4 semanas.",
    category: "Lectura",
    date: "1 Oct 2025",
    readTime: "7 min",
    image: blogWeb,
    author: "María Rodríguez",
    tags: ["Lectura Rápida", "Productividad", "Aprendizaje"]
  },
  {
    title: "Inglés técnico para developers: Vocabulario esencial",
    excerpt: "El inglés es fundamental en el mundo del desarrollo de software. Aprende el vocabulario técnico más usado, cómo leer documentación, participar en code reviews, escribir commits claros y comunicarte efectivamente con equipos internacionales. Incluye recursos gratuitos y ejercicios prácticos.",
    category: "Idiomas",
    date: "28 Sep 2025",
    readTime: "9 min",
    image: blogWeb,
    author: "David Chen",
    tags: ["Inglés", "Comunicación", "Desarrollo"]
  },
  {
    title: "Oratoria para presentaciones técnicas: Guía práctica",
    excerpt: "Aprende a presentar tus proyectos técnicos con confianza y claridad. Técnicas para estructurar presentaciones, controlar los nervios, usar storytelling en demos, responder preguntas difíciles y conectar con tu audiencia. Perfecta para desarrolladores que necesitan mejorar sus habilidades de comunicación.",
    category: "Expresión Oral y Escrita",
    date: "24 Sep 2025",
    readTime: "8 min",
    image: blogAI,
    author: "María Rodríguez",
    tags: ["Oratoria", "Presentaciones", "Soft Skills"]
  },
  {
    title: "Cómo escribir tu primera novela: De la idea al manuscrito",
    excerpt: "Guía completa para aspirantes a escritores. Desde el desarrollo de la trama y personajes hasta la estructura narrativa y el proceso de escritura diario. Aprende técnicas de worldbuilding, cómo mantener la motivación durante meses de escritura y tips para superar el bloqueo creativo.",
    category: "Escritura",
    date: "20 Sep 2025",
    readTime: "12 min",
    image: blogWeb,
    author: "David Chen",
    tags: ["Escritura Creativa", "Novela", "Literatura"]
  }
];

const categories = BLOG_CATEGORIES;

export default function Blog() {
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    category: "",
    content: "",
    author: ""
  });

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todas" || post.category === selectedCategory;
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Blog de DEVELOP iT
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Artículos, tutoriales y recursos sobre las últimas tendencias en tecnología y desarrollo profesional.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar artículos, temas, tecnologías..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg"
                  data-testid="input-search-blog"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "Todas" ? "default" : "outline"}
                onClick={() => setSelectedCategory("Todas")}
                data-testid="button-category-todas"
              >
                Todas las áreas
              </Button>
              {categories.filter(cat => cat !== "Todas").map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header con título y botón */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Últimos posts
            </h2>
            <Dialog open={isPublishModalOpen} onOpenChange={setIsPublishModalOpen}>
              <DialogTrigger asChild>
                <Button size="lg" data-testid="button-publish-post">
                  <PenLine className="h-5 w-5 mr-2" />
                  Publicar mi post
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Publicar nuevo post
                  </DialogTitle>
                  <DialogDescription>
                    Comparte tus conocimientos y experiencias con la comunidad de DEVELOP iT
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="author">Tu nombre <span className="text-destructive">*</span></Label>
                    <Input
                      id="author"
                      placeholder="Ej: María García"
                      value={newPost.author}
                      onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                      data-testid="input-post-author"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Título del post <span className="text-destructive">*</span></Label>
                    <Input
                      id="title"
                      placeholder="Ej: Cómo aprendí Python en 3 meses"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      data-testid="input-post-title"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Categoría <span className="text-destructive">*</span></Label>
                    <Select value={newPost.category} onValueChange={(value) => setNewPost({...newPost, category: value})}>
                      <SelectTrigger data-testid="select-post-category">
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Inteligencia Artificial">Inteligencia Artificial</SelectItem>
                        <SelectItem value="Desarrollo Full Stack">Desarrollo Full Stack</SelectItem>
                        <SelectItem value="Bases de Datos">Bases de Datos</SelectItem>
                        <SelectItem value="Programación">Programación</SelectItem>
                        <SelectItem value="Transformación Digital">Transformación Digital</SelectItem>
                        <SelectItem value="Preparación Entornos de Trabajo">Preparación Entornos de Trabajo</SelectItem>
                        <SelectItem value="Idiomas">Idiomas</SelectItem>
                        <SelectItem value="Expresión Oral y Escrita">Expresión Oral y Escrita</SelectItem>
                        <SelectItem value="Escritura">Escritura</SelectItem>
                        <SelectItem value="Lectura">Lectura</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Resumen breve (aparecerá en la tarjeta) <span className="text-destructive">*</span></Label>
                    <Textarea
                      id="excerpt"
                      placeholder="Describe brevemente de qué trata tu post..."
                      rows={3}
                      value={newPost.excerpt}
                      onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
                      data-testid="textarea-post-excerpt"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Contenido completo</Label>
                    <Textarea
                      id="content"
                      placeholder="Escribe aquí el contenido completo de tu post..."
                      rows={8}
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      data-testid="textarea-post-content"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                        setIsPublishModalOpen(false);
                        setNewPost({title: "", excerpt: "", category: "", content: "", author: ""});
                      }}
                      data-testid="button-cancel-post"
                    >
                      Cancelar
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={() => {
                        // Aquí iría la lógica para guardar el post
                        alert("Post publicado con éxito! (Esta funcionalidad se implementará cuando haya backend)");
                        setIsPublishModalOpen(false);
                        setNewPost({title: "", excerpt: "", category: "", content: "", author: ""});
                      }}
                      disabled={!newPost.title || !newPost.excerpt || !newPost.category || !newPost.author}
                      data-testid="button-submit-post"
                    >
                      Publicar post
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="flex flex-col hover-elevate transition-all duration-300 overflow-hidden" data-testid={`card-blog-${index}`}>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl leading-tight line-clamp-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 mt-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{post.author}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="gap-1" 
                        onClick={() => setLocation("/post")}
                        data-testid={`button-read-${index}`}
                      >
                        Leer más
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-muted-foreground">
                No se encontraron artículos que coincidan con tu búsqueda.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todas");
                }}
                className="mt-6"
                data-testid="button-clear-blog-filters"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
