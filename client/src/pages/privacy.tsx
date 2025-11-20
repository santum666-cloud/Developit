import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          style={{ position: 'fixed', bottom: '104px', right: '24px', zIndex: 9998 }}
          className="h-12 w-12 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          data-testid="button-scroll-to-top"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </>
  );
}

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-muted-foreground text-center mb-12">
            Última actualización: noviembre 2025
          </p>

          <div className="space-y-6 text-foreground">
            <p>
              En Develop It (en adelante, "la Empresa"), respetamos y protegemos tu privacidad. 
              Este documento explica cómo tratamos la información personal que recibimos cuando contactas 
              con nosotros a través de nuestra página de Facebook, formulario web, correo electrónico o 
              cualquier otro medio.
            </p>

            <p>
              Esta política está adaptada para un uso sin cookies, o solo con las cookies estrictamente 
              técnicas que no requieren consentimiento.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              1. Identidad del Responsable del Tratamiento
            </h2>
            <div className="space-y-2">
              <p className="text-foreground"><strong className="text-foreground">Responsable:</strong> Develop It</p>
              <p className="text-foreground"><strong className="text-foreground">Web corporativa:</strong> <a href="https://developit.es" className="text-primary hover:underline">https://developit.es</a></p>
              <p className="text-foreground"><strong className="text-foreground">Correo de contacto:</strong> <a href="mailto:info@developit.es" className="text-primary hover:underline">info@developit.es</a></p>
              <p className="text-foreground"><strong className="text-foreground">Ubicación:</strong> España</p>
              <p className="text-foreground"><strong className="text-foreground">Actividad:</strong> Servicios de desarrollo web, software, inteligencia artificial, consultoría tecnológica y transformación digital.</p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              2. Datos que recopilamos
            </h2>
            <p>
              Como no usamos cookies (o solo las técnicas indispensables), la única información personal 
              que recopilamos es la que tú decides proporcionarnos.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Datos que puedes enviarnos voluntariamente:</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Nombre y apellidos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Correo electrónico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Número de teléfono (opcional)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Mensajes, consultas o solicitudes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Información facilitada en formularios o redes sociales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Datos profesionales si solicitas presupuesto o servicios</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">Datos NO recopilados:</h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>No utilizamos cookies de análisis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>No realizamos seguimiento publicitario</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>No instalamos cookies de terceros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>No monitorizamos comportamiento individual</span>
              </li>
            </ul>

            <p className="text-sm text-muted-foreground mt-4">
              Sí podremos recibir estadísticas anónimas generadas automáticamente por terceras compañías 
              sobre interacción, alcance, etc., pero nunca permiten identificarte de forma personal.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              3. Finalidad del tratamiento
            </h2>
            <p>Tratamos tus datos exclusivamente para:</p>
            <ol className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">1.</span>
                <span>Atender tus consultas o solicitudes de información.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">2.</span>
                <span>Enviarte información comercial sobre servicios solo si tú lo solicitas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">3.</span>
                <span>Preparar presupuestos o propuestas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">4.</span>
                <span>Mantener la comunicación comercial o contractual.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-semibold mt-1">5.</span>
                <span>Cumplir obligaciones legales (facturación, contabilidad, documentación contractual).</span>
              </li>
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              4. Legitimación para el tratamiento
            </h2>
            <p>Tu información se tratará según:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Tu consentimiento (cuando nos escribes o solicitas información).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Relación precontractual/contractual (presupuestos o servicios).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Interés legítimo (gestión empresarial básica).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Obligación legal (casos de facturación y documentación).</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              5. Destinatarios de los datos
            </h2>
            <p>No cedemos tus datos a terceros, salvo:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Servicios tecnológicos necesarios para funcionamiento (servidores, correo, hosting).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Proveedores profesionales sujetos a contrato de confidencialidad.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cumplimiento de obligaciones legales ante autoridades públicas si es requerido.</span>
              </li>
            </ul>
            <p className="mt-4">Todos los proveedores cumplen con el RGPD.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              6. Periodo de conservación
            </h2>
            <p>Conservaremos tus datos únicamente:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Mientras mantengamos comunicación o relación comercial.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>O durante los plazos legales aplicables (si llegas a ser cliente).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Si nos pides eliminar tus datos, se eliminarán inmediatamente salvo obligación legal.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              7. Derechos del usuario
            </h2>
            <p>Puedes ejercer tus derechos en cualquier momento:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Acceso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Rectificación</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Supresión</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Oposición</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Limitación</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Portabilidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Retirada del consentimiento</span>
              </li>
            </ul>
            <p className="mt-4">
              Solo debes escribirnos a: <a href="mailto:info@developit.es" className="text-primary hover:underline font-semibold">info@developit.es</a>
              <br />
              Asunto: "Protección de Datos".
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              8. Seguridad de los datos
            </h2>
            <p>Aplicamos medidas técnicas y organizativas para proteger tu información:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Servidores seguros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Acceso restringido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Cifrado y protocolos protegidos (HTTPS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Control interno de gestión de datos</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              9. Enlaces externos
            </h2>
            <p>
              Nuestros sitios y redes pueden contener enlaces a terceros. No somos responsables de sus 
              políticas de privacidad. Recomendamos revisarlas antes de proporcionar datos.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              10. Ausencia de cookies
            </h2>
            <p>
              Declaramos que no utilizamos cookies de análisis, marketing o seguimiento, solamente aquellas 
              estrictamente necesarias para el funcionamiento técnico básico del sitio.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              11. Modificaciones
            </h2>
            <p>
              Podemos actualizar esta Política en cualquier momento. La versión vigente será siempre la 
              última publicada.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              12. Contacto
            </h2>
            <div className="space-y-2">
              <p className="text-foreground">Para cualquier cuestión relacionada con privacidad:</p>
              <p className="mt-2">
                <a href="mailto:info@developit.es" className="text-primary hover:underline font-semibold text-lg">info@developit.es</a>
              </p>
              <p className="mt-2 text-foreground">España</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
