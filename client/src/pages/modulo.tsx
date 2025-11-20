import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Video, FileText } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Modulo() {
  // En una aplicación real, obtendrías estos datos de la URL query params o route params
  const [, navigate] = useLocation();
  
  // Datos de ejemplo - en producción estos vendrían de parámetros de URL
  const courseTitle = "HTML Completo";
  const moduleTitle = "Introducción a HTML5";
  const moduleNumber = 1;
  
  // URLs de ejemplo - en producción estos serían los URLs reales
  const youtubeVideoId = "dQw4w9WgXcQ"; // Placeholder - reemplazar con ID real
  const gammaEmbedUrl = "https://gamma.app/embed/ejemplo"; // Placeholder - reemplazar con URL real de Gamma
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      
      {/* Header con navegación */}
      <section className="bg-gradient-to-r from-primary/10 to-orange-500/10 py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/cursos")}
            className="mb-4"
            data-testid="button-back-to-courses"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Cursos
          </Button>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-medium">{courseTitle}</p>
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Módulo {moduleNumber}: {moduleTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Tabs defaultValue="video" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="video" className="gap-2" data-testid="tab-video">
                <Video className="h-4 w-4" />
                Video
              </TabsTrigger>
              <TabsTrigger value="documentacion" className="gap-2" data-testid="tab-documentation">
                <FileText className="h-4 w-4" />
                Documentación
              </TabsTrigger>
            </TabsList>

            {/* Tab: Video de YouTube */}
            <TabsContent value="video" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    Video explicativo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title={moduleTitle}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      data-testid="iframe-youtube"
                    ></iframe>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <h3 className="font-semibold text-lg">Sobre este módulo</h3>
                    <p className="text-muted-foreground">
                      En este módulo aprenderás los conceptos fundamentales necesarios para dominar esta tecnología.
                      El video cubre todos los aspectos prácticos con ejemplos reales que podrás aplicar inmediatamente
                      en tus proyectos.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-4">
                      <Button variant="outline" data-testid="button-previous-module">
                        Módulo anterior
                      </Button>
                      <Button data-testid="button-next-module">
                        Siguiente módulo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab: Documentación (Gamma) */}
            <TabsContent value="documentacion" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Presentación y documentación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-muted border">
                    <iframe
                      width="100%"
                      height="100%"
                      src={gammaEmbedUrl}
                      title={`Documentación: ${moduleTitle}`}
                      frameBorder="0"
                      allowFullScreen
                      data-testid="iframe-gamma"
                    ></iframe>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <h3 className="font-semibold text-lg">Material de apoyo</h3>
                    <p className="text-muted-foreground">
                      Esta presentación contiene todos los conceptos clave, ejemplos de código y recursos adicionales
                      que complementan el video. Puedes consultarla en cualquier momento para reforzar tu aprendizaje.
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-sm">Contenido de la presentación:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li>• Conceptos teóricos fundamentales</li>
                        <li>• Ejemplos prácticos con código</li>
                        <li>• Ejercicios propuestos</li>
                        <li>• Recursos y enlaces adicionales</li>
                        <li>• Mejores prácticas y consejos</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sección de recursos adicionales */}
              <Card>
                <CardHeader>
                  <CardTitle>Recursos adicionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" data-testid="button-download-slides">
                      <FileText className="h-4 w-4 mr-2" />
                      Descargar presentación (PDF)
                    </Button>
                    <Button variant="outline" className="w-full justify-start" data-testid="button-download-code">
                      <FileText className="h-4 w-4 mr-2" />
                      Descargar código de ejemplos
                    </Button>
                    <Button variant="outline" className="w-full justify-start" data-testid="button-view-exercises">
                      <FileText className="h-4 w-4 mr-2" />
                      Ver ejercicios propuestos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
