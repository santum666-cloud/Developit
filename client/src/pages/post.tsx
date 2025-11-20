import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { useLocation } from "wouter";

export default function Post() {
  const [, setLocation] = useLocation();

  const post = {
    title: "Inteligencia Artificial: Cómo está transformando el aprendizaje moderno",
    category: "Inteligencia Artificial",
    date: "15 Nov 2025",
    readTime: "5 min",
    author: "David Chen",
    tags: ["IA", "Educación", "Tecnología"],
    content: `
      <h2>La revolución del aprendizaje impulsada por IA</h2>
      <p>La Inteligencia Artificial está transformando radicalmente la forma en que aprendemos y enseñamos. Desde asistentes personalizados que se adaptan a tu ritmo de aprendizaje hasta sistemas de recomendación que sugieren el contenido más relevante, la IA está democratizando el acceso a la educación de calidad.</p>

      <h3>Asistentes de aprendizaje personalizados</h3>
      <p>Los sistemas de IA modernos pueden analizar tu progreso, identificar áreas de mejora y adaptar el contenido educativo a tu nivel y estilo de aprendizaje. Esto significa que cada estudiante puede tener una experiencia personalizada, similar a tener un tutor privado disponible 24/7.</p>

      <h3>Prompting efectivo: la nueva habilidad esencial</h3>
      <p>Saber cómo comunicarte efectivamente con herramientas de IA como ChatGPT, Claude o Gemini es crucial. El "prompt engineering" se ha convertido en una habilidad fundamental. Aquí algunos principios clave:</p>
      <ul>
        <li><strong>Sé específico:</strong> Cuanto más detallado sea tu prompt, mejores resultados obtendrás.</li>
        <li><strong>Da contexto:</strong> Explica el contexto de tu pregunta para recibir respuestas más relevantes.</li>
        <li><strong>Itera:</strong> Refina tus prompts basándote en las respuestas que recibes.</li>
        <li><strong>Usa ejemplos:</strong> Proporciona ejemplos de lo que buscas cuando sea posible.</li>
      </ul>

      <h3>Automatización del aprendizaje rutinario</h3>
      <p>La IA puede automatizar tareas repetitivas como la corrección de ejercicios básicos, la generación de preguntas de práctica o la creación de resúmenes. Esto libera tiempo tanto para estudiantes como para educadores, permitiéndoles enfocarse en actividades más creativas y de mayor valor.</p>

      <h3>Sistemas de recomendación inteligentes</h3>
      <p>Similar a cómo Netflix recomienda películas, los sistemas educativos modernos usan IA para sugerir cursos, recursos y materiales de estudio basados en tus intereses, objetivos y progreso previo. Esto hace que el camino de aprendizaje sea más eficiente y personalizado.</p>

      <h3>Mejores prácticas para aprovechar la IA</h3>
      <p>Para maximizar los beneficios de la IA en tu proceso de aprendizaje:</p>
      <ol>
        <li>Combina el aprendizaje guiado por IA con la interacción humana.</li>
        <li>Usa herramientas de IA para explorar temas nuevos y obtener explicaciones rápidas.</li>
        <li>Verifica la información generada por IA con fuentes confiables.</li>
        <li>Experimenta con diferentes herramientas para encontrar las que mejor se adapten a tu estilo.</li>
        <li>Mantén un pensamiento crítico: la IA es una herramienta, no un reemplazo del pensamiento humano.</li>
      </ol>

      <h3>El futuro del aprendizaje</h3>
      <p>Estamos apenas en los primeros capítulos de la revolución de la IA en educación. Los próximos años traerán avances aún más sorprendentes: tutores virtuales con comprensión emocional, experiencias de aprendizaje inmersivas en realidad virtual guiadas por IA, y sistemas que puedan predecir y prevenir dificultades de aprendizaje antes de que se conviertan en problemas.</p>

      <p>La clave está en adoptar estas tecnologías con una mentalidad abierta pero crítica, aprovechando sus fortalezas mientras mantenemos el elemento humano que hace que el aprendizaje sea verdaderamente significativo.</p>
    `
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-purple-500/10 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/blog")}
            className="mb-6 gap-2"
            data-testid="button-back-blog"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al Blog
          </Button>

          <Badge className="mb-4" data-testid="badge-post-category">
            {post.category}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2" data-testid="text-post-author">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2" data-testid="text-post-date">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2" data-testid="text-post-readtime">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <Card>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none p-8 md:p-12">
              <div dangerouslySetInnerHTML={{ __html: post.content }} data-testid="content-post-body" />
            </CardContent>
          </Card>

          {/* Tags */}
          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <Tag className="h-5 w-5 text-muted-foreground" />
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" data-testid={`badge-tag-${index}`}>
                {tag}
              </Badge>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={() => setLocation("/blog")}
              className="gap-2"
              data-testid="button-back-blog-bottom"
            >
              <ArrowLeft className="h-5 w-5" />
              Volver a todos los artículos
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
