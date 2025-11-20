import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code, Zap, BookOpen, Database, Brain, TrendingUp, Globe, MessageSquare, PenTool, BookMarked, Search, Clock, Users, PlayCircle, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const allCourses = [
  {
    area: "Desarrollo Full Stack",
    icon: Code,
    description: "Domina el desarrollo web moderno desde el frontend hasta el backend",
    color: "from-blue-500 to-cyan-500",
    courses: [
      {
        title: "HTML Completo",
        duration: "4 semanas",
        level: "Principiante",
        students: "2,500+",
        rating: 4.8,
        modules: [
          "Introducción a HTML5",
          "Estructura semántica de documentos",
          "Formularios y validación",
          "Multimedia y APIs HTML5",
          "Accesibilidad web (ARIA)",
          "Proyecto final: Sitio web completo"
        ]
      },
      {
        title: "CSS Avanzado",
        duration: "5 semanas",
        level: "Intermedio",
        students: "2,100+",
        rating: 4.5,
        modules: [
          "Selectores y especificidad",
          "Flexbox y CSS Grid",
          "Animaciones y transiciones",
          "Responsive design y media queries",
          "Preprocesadores (SASS)",
          "CSS moderno: Custom Properties y Container Queries"
        ]
      },
      {
        title: "JavaScript Profesional",
        duration: "8 semanas",
        level: "Intermedio",
        students: "3,200+",
        rating: 4.8,
        modules: [
          "Fundamentos y ES6+",
          "Programación asíncrona (Promises, Async/Await)",
          "DOM y manipulación avanzada",
          "Módulos y bundling",
          "Testing con Jest",
          "Proyecto: Aplicación web interactiva"
        ]
      },
      {
        title: "PHP Moderno",
        duration: "6 semanas",
        level: "Intermedio",
        students: "1,800+",
        rating: 4.8,
        modules: [
          "Sintaxis y fundamentos PHP 8",
          "Programación orientada a objetos",
          "Manejo de bases de datos con PDO",
          "Seguridad y validación",
          "Laravel framework básico",
          "API RESTful con PHP"
        ]
      },
      {
        title: "Java EE Empresarial",
        duration: "10 semanas",
        level: "Avanzado",
        students: "1,500+",
        rating: 4.4,
        modules: [
          "Servlets y JSP",
          "Enterprise JavaBeans (EJB)",
          "JPA y Hibernate",
          "Spring Framework",
          "Microservicios con Spring Boot",
          "Proyecto empresarial completo"
        ]
      },
      {
        title: "Servicios Web (SOAP & REST)",
        duration: "4 semanas",
        level: "Intermedio",
        students: "1,200+",
        rating: 4.3,
        modules: [
          "Protocolos HTTP y HTTPS",
          "APIs RESTful: diseño y best practices",
          "SOAP y WSDL",
          "Autenticación: JWT, OAuth2",
          "Documentación con OpenAPI/Swagger",
          "Testing de APIs"
        ]
      }
    ]
  },
  {
    area: "Programación",
    icon: Zap,
    description: "Aprende los lenguajes fundamentales para el desarrollo de software",
    color: "from-purple-500 to-pink-500",
    courses: [
      {
        title: "Python desde Cero",
        duration: "6 semanas",
        level: "Principiante",
        students: "4,100+",
        rating: 4.6,
        modules: [
          "Sintaxis y estructuras de datos",
          "Funciones y programación funcional",
          "Programación orientada a objetos",
          "Manejo de archivos y excepciones",
          "Librerías estándar esenciales",
          "Proyecto: Aplicación de consola"
        ]
      },
      {
        title: "Java SE Fundamentos",
        duration: "8 semanas",
        level: "Principiante",
        students: "2,800+",
        rating: 4.8,
        modules: [
          "Sintaxis Java y tipos de datos",
          "Control de flujo y bucles",
          "POO: Clases, herencia, polimorfismo",
          "Collections Framework",
          "Streams y programación funcional",
          "Proyecto: Sistema de gestión"
        ]
      }
    ]
  },
  {
    area: "Preparación Entornos de Trabajo",
    icon: BookOpen,
    description: "Configura y optimiza tu entorno de desarrollo profesional",
    color: "from-green-500 to-emerald-500",
    courses: [
      {
        title: "Entorno Desarrollo Web",
        duration: "2 semanas",
        level: "Principiante",
        students: "3,500+",
        rating: 4.7,
        modules: [
          "VS Code: configuración y extensiones",
          "Git y GitHub",
          "Terminal y línea de comandos",
          "NPM y gestión de paquetes",
          "Herramientas de desarrollo del navegador",
          "Workflow profesional"
        ]
      },
      {
        title: "Entorno Python",
        duration: "2 semanas",
        level: "Principiante",
        students: "2,700+",
        rating: 4.5,
        modules: [
          "Instalación y gestión de versiones (pyenv)",
          "Entornos virtuales (venv, conda)",
          "PyCharm y VS Code para Python",
          "Pip y gestión de dependencias",
          "Jupyter Notebooks",
          "Best practices y linting"
        ]
      },
      {
        title: "Entorno Java",
        duration: "2 semanas",
        level: "Principiante",
        students: "1,900+",
        rating: 4.6,
        modules: [
          "JDK: instalación y configuración",
          "IntelliJ IDEA y Eclipse",
          "Maven y Gradle",
          "Debugging avanzado",
          "Testing environment",
          "CI/CD básico"
        ]
      },
      {
        title: "Servidor de Aplicaciones",
        duration: "3 semanas",
        level: "Intermedio",
        students: "1,400+",
        rating: 4.3,
        modules: [
          "Apache Tomcat: instalación y configuración",
          "Deploy de aplicaciones web",
          "Configuración de dominios virtuales",
          "Monitorización y logs",
          "Nginx como proxy reverso",
          "Docker para desarrollo"
        ]
      }
    ]
  },
  {
    area: "Bases de Datos",
    icon: Database,
    description: "Domina el diseño, implementación y gestión de bases de datos",
    color: "from-orange-500 to-red-500",
    courses: [
      {
        title: "Fundamentos BD Relacionales",
        duration: "4 semanas",
        level: "Principiante",
        students: "3,800+",
        rating: 4.5,
        modules: [
          "Modelo relacional y álgebra",
          "Normalización de bases de datos",
          "Diseño de esquemas",
          "Integridad referencial",
          "SQL básico: SELECT, INSERT, UPDATE, DELETE",
          "Proyecto: Diseño de base de datos"
        ]
      },
      {
        title: "MySQL Completo",
        duration: "5 semanas",
        level: "Intermedio",
        students: "3,200+",
        rating: 4.3,
        modules: [
          "Instalación y configuración MySQL 8",
          "Consultas avanzadas y subconsultas",
          "Joins y relaciones complejas",
          "Índices y optimización",
          "Procedimientos almacenados y triggers",
          "Backup y recuperación"
        ]
      },
      {
        title: "MongoDB NoSQL",
        duration: "4 semanas",
        level: "Intermedio",
        students: "2,400+",
        rating: 4.3,
        modules: [
          "Introducción a NoSQL y MongoDB",
          "Modelado de datos orientado a documentos",
          "CRUD operations y aggregation pipeline",
          "Índices y performance",
          "Replicación y sharding",
          "Mongoose con Node.js"
        ]
      },
      {
        title: "PostgreSQL Avanzado",
        duration: "5 semanas",
        level: "Avanzado",
        students: "1,600+",
        rating: 4.4,
        modules: [
          "Arquitectura PostgreSQL",
          "Tipos de datos avanzados (JSON, arrays)",
          "Window functions y CTEs",
          "Full-text search",
          "Particionamiento de tablas",
          "Optimización y tuning"
        ]
      }
    ]
  },
  {
    area: "Inteligencia Artificial",
    icon: Brain,
    description: "Explora el mundo de la IA y aprende a integrarla en tus proyectos",
    color: "from-indigo-500 to-purple-500",
    courses: [
      {
        title: "Cómo funciona la IA",
        duration: "3 semanas",
        level: "Principiante",
        students: "5,200+",
        rating: 4.3,
        modules: [
          "Historia y evolución de la IA",
          "Tipos de IA: Machine Learning, Deep Learning",
          "Redes neuronales básicas",
          "Casos de uso reales",
          "Ética y limitaciones de la IA",
          "El futuro de la inteligencia artificial"
        ]
      },
      {
        title: "Prompting Efectivo",
        duration: "2 semanas",
        level: "Principiante",
        students: "6,800+",
        rating: 4.6,
        modules: [
          "Fundamentos de prompt engineering",
          "Técnicas: Zero-shot, Few-shot, Chain-of-thought",
          "ChatGPT, Claude y otros LLMs",
          "Prompts para desarrollo de software",
          "Prompts para análisis de datos",
          "Casos prácticos y mejores prácticas"
        ]
      },
      {
        title: "Desarrollo No Code con IA",
        duration: "4 semanas",
        level: "Principiante",
        students: "4,500+",
        rating: 4.6,
        modules: [
          "Plataformas no-code populares",
          "Integración de IA en workflows",
          "Automatización de procesos",
          "Creación de chatbots sin código",
          "Herramientas de generación de contenido",
          "Proyecto: Aplicación completa no-code"
        ]
      },
      {
        title: "Agentes de IA",
        duration: "5 semanas",
        level: "Avanzado",
        students: "2,100+",
        rating: 4.3,
        modules: [
          "Arquitectura de agentes inteligentes",
          "LangChain y frameworks similares",
          "RAG (Retrieval Augmented Generation)",
          "Memory y state management",
          "Multi-agent systems",
          "Proyecto: Agente personalizado"
        ]
      },
      {
        title: "Automatización con IA",
        duration: "4 semanas",
        level: "Intermedio",
        students: "3,300+",
        rating: 4.3,
        modules: [
          "Identificación de procesos automatizables",
          "APIs de IA: OpenAI, Anthropic, Google",
          "Automatización de emails y documentos",
          "Procesamiento de imágenes con IA",
          "Automatización de análisis de datos",
          "Integración con herramientas empresariales"
        ]
      },
      {
        title: "Machine Learning Práctico",
        duration: "8 semanas",
        level: "Avanzado",
        students: "2,800+",
        rating: 4.6,
        modules: [
          "Fundamentos matemáticos del ML",
          "Scikit-learn y ecosistema Python",
          "Algoritmos supervisados y no supervisados",
          "Feature engineering",
          "Evaluación y validación de modelos",
          "Proyecto: Sistema de predicción"
        ]
      }
    ]
  },
  {
    area: "Transformación Digital",
    icon: TrendingUp,
    description: "Lidera el cambio digital en tu organización",
    color: "from-yellow-500 to-orange-500",
    courses: [
      {
        title: "IA y Big Data",
        duration: "6 semanas",
        level: "Intermedio",
        students: "1,700+",
        rating: 4.5,
        modules: [
          "Introducción al Big Data",
          "Herramientas: Hadoop, Spark",
          "Data Lakes y Data Warehouses",
          "IA aplicada a grandes volúmenes de datos",
          "Visualización de Big Data",
          "Casos de estudio empresariales"
        ]
      },
      {
        title: "Liderazgo y Gestión del Cambio",
        duration: "5 semanas",
        level: "Principiante",
        students: "2,300+",
        rating: 4.9,
        modules: [
          "Fundamentos de transformación digital",
          "Liderazgo en entornos digitales",
          "Gestión de equipos remotos",
          "Change management",
          "Cultura de innovación",
          "Métricas y KPIs digitales"
        ]
      }
    ]
  },
  {
    area: "Idiomas",
    icon: Globe,
    description: "Mejora tus habilidades lingüísticas para el mundo global",
    color: "from-cyan-500 to-blue-500",
    courses: [
      {
        title: "Inglés Técnico para Desarrolladores",
        duration: "8 semanas",
        level: "Intermedio",
        students: "3,900+",
        rating: 4.2,
        modules: [
          "Vocabulario técnico esencial",
          "Lectura de documentación en inglés",
          "Comunicación en equipos internacionales",
          "Presentaciones técnicas",
          "Code reviews en inglés",
          "Entrevistas técnicas"
        ]
      },
      {
        title: "Alemán para Profesionales",
        duration: "12 semanas",
        level: "Principiante",
        students: "1,400+",
        rating: 4.3,
        modules: [
          "Alemán básico A1",
          "Conversación cotidiana",
          "Alemán de negocios",
          "Gramática esencial",
          "Cultura alemana",
          "Preparación para certificación"
        ]
      },
      {
        title: "Español para Extranjeros",
        duration: "10 semanas",
        level: "Principiante",
        students: "2,100+",
        rating: 4.5,
        modules: [
          "Español básico A1",
          "Pronunciación y fonética",
          "Gramática fundamental",
          "Conversación práctica",
          "Cultura hispana",
          "Español profesional"
        ]
      }
    ]
  },
  {
    area: "Expresión Oral y Escrita",
    icon: MessageSquare,
    description: "Comunica tus ideas con claridad y persuasión",
    color: "from-pink-500 to-rose-500",
    courses: [
      {
        title: "Oratoria Eficaz",
        duration: "4 semanas",
        level: "Principiante",
        students: "2,600+",
        rating: 4.6,
        modules: [
          "Fundamentos de la oratoria",
          "Control del miedo escénico",
          "Lenguaje corporal y presencia",
          "Estructuración de discursos",
          "Técnicas de persuasión",
          "Presentaciones impactantes"
        ]
      },
      {
        title: "Redacción y Corrección de Textos",
        duration: "5 semanas",
        level: "Intermedio",
        students: "1,800+",
        rating: 4.8,
        modules: [
          "Principios de redacción clara",
          "Gramática y ortografía avanzada",
          "Estilo y coherencia textual",
          "Redacción profesional",
          "Corrección y edición",
          "Escritura persuasiva"
        ]
      }
    ]
  },
  {
    area: "Escritura",
    icon: PenTool,
    description: "Desarrolla tu creatividad literaria",
    color: "from-violet-500 to-purple-500",
    courses: [
      {
        title: "Fase Previa Creativa",
        duration: "3 semanas",
        level: "Principiante",
        students: "1,200+",
        rating: 4.7,
        modules: [
          "Desarrollo de ideas",
          "Brainstorming creativo",
          "Investigación y documentación",
          "Creación de personajes",
          "Worldbuilding",
          "Planificación de historias"
        ]
      },
      {
        title: "Creación Literaria",
        duration: "8 semanas",
        level: "Intermedio",
        students: "1,500+",
        rating: 4.3,
        modules: [
          "Narrativa: elementos esenciales",
          "Punto de vista y voz narrativa",
          "Diálogos efectivos",
          "Descripción y ambientación",
          "Estructura de la trama",
          "Proyecto: Escribir tu primer relato"
        ]
      }
    ]
  },
  {
    area: "Lectura",
    icon: BookMarked,
    description: "Optimiza tu velocidad y comprensión lectora",
    color: "from-teal-500 to-green-500",
    courses: [
      {
        title: "Lectura Rápida de Textos",
        duration: "4 semanas",
        level: "Principiante",
        students: "2,200+",
        rating: 4.3,
        modules: [
          "Técnicas de lectura rápida",
          "Eliminación de subvocalización",
          "Ampliación del campo visual",
          "Comprensión lectora avanzada",
          "Retención y memoria",
          "Práctica con diferentes tipos de textos"
        ]
      }
    ]
  }
];

export default function Cursos() {
  const [location] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  // Check for area filter in URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const areaParam = params.get('area');
    if (areaParam) {
      setSelectedArea(decodeURIComponent(areaParam));
    }
  }, [location]);

  const filteredCourses = allCourses.filter(area => {
    const matchesArea = !selectedArea || area.area === selectedArea;
    const matchesSearch = !searchTerm || 
      area.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.courses.some(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesArea && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-orange-500/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Catálogo Completo de Cursos
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Más de 40 cursos gratuitos en 11 áreas especializadas. Aprende a tu ritmo vía YouTube.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar cursos o áreas de formación..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg"
                  data-testid="input-search-courses"
                />
              </div>
            </div>

            {/* Area Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedArea === null ? "default" : "outline"}
                onClick={() => setSelectedArea(null)}
                data-testid="button-filter-all"
              >
                Todas las áreas
              </Button>
              {allCourses.map((area) => (
                <Button
                  key={area.area}
                  variant={selectedArea === area.area ? "default" : "outline"}
                  onClick={() => setSelectedArea(area.area)}
                  data-testid={`button-filter-${area.area.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {area.area}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCourses.map((area, areaIndex) => {
              const AreaIcon = area.icon;
              return (
                <div key={areaIndex} className="space-y-6">
                  {/* Area Header */}
                  <div className={`relative rounded-2xl bg-gradient-to-r ${area.color} p-8 text-white`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <AreaIcon className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {area.area}
                      </h2>
                    </div>
                    <p className="text-lg text-white/90">{area.description}</p>
                    <Badge variant="secondary" className="mt-4 bg-white/90 text-primary hover:bg-white">
                      {area.courses.length} {area.courses.length === 1 ? 'curso' : 'cursos'}
                    </Badge>
                  </div>

                  {/* Courses List */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {area.courses.map((course, courseIndex) => (
                      <Card key={courseIndex} className="hover-elevate transition-all duration-300" data-testid={`card-course-${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                {course.title}
                              </CardTitle>
                              <CardDescription>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  <Badge variant="outline" className="gap-1">
                                    <Clock className="h-3 w-3" />
                                    {course.duration}
                                  </Badge>
                                  <Badge variant="outline">
                                    {course.level}
                                  </Badge>
                                  <Badge variant="outline" className="gap-1">
                                    <Users className="h-3 w-3" />
                                    {course.students}
                                  </Badge>
                                </div>
                              </CardDescription>
                            </div>
                            <div className="flex flex-col items-end gap-2 flex-shrink-0">
                              <Badge 
                                variant={
                                  (course.rating || 0) >= 4.8 ? "default" : 
                                  (course.rating || 0) >= 4.5 ? "secondary" : 
                                  "outline"
                                }
                                className="gap-1"
                              >
                                <Award className="h-3 w-3" />
                                {(course.rating || 0) >= 4.8 ? "Excelente" : 
                                 (course.rating || 0) >= 4.5 ? "Muy bueno" : 
                                 (course.rating || 0) >= 4.0 ? "Bueno" : "Popular"}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {(course.rating || 0).toFixed(1)}/5.0
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible>
                            <AccordionItem value="modules" className="border-none">
                              <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                                Ver temario completo ({course.modules.length} módulos)
                              </AccordionTrigger>
                              <AccordionContent>
                                <ul className="space-y-2 mt-2">
                                  {course.modules.map((module, moduleIndex) => (
                                    <li key={moduleIndex}>
                                      <Link
                                        href="/modulo"
                                        className="flex items-start gap-2 text-sm group hover-elevate rounded-md px-2 py-2 -mx-2 transition-all"
                                        data-testid={`link-module-${moduleIndex}`}
                                      >
                                        <PlayCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary group-hover:text-primary transition-colors" />
                                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                          {module}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-muted-foreground">
                No se encontraron cursos que coincidan con tu búsqueda.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedArea(null);
                }}
                className="mt-6"
                data-testid="button-clear-filters"
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
