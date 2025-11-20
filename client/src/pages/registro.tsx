import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { GraduationCap } from "lucide-react";

export default function Registro() {
  const { toast } = useToast();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [formData, setFormData] = useState({
    usuario: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
    aceptaTerminos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        variant: "destructive",
      });
      return;
    }

    if (!formData.aceptaTerminos) {
      toast({
        title: "Error",
        description: "Debes aceptar los términos y condiciones",
        variant: "destructive",
      });
      return;
    }

    console.log("Registro:", formData);
    toast({
      title: "¡Registro exitoso!",
      description: "Te hemos enviado un email de confirmación.",
    });
    
    setFormData({
      usuario: "",
      email: "",
      telefono: "",
      password: "",
      confirmPassword: "",
      aceptaTerminos: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <ScrollToTop />
      <Chatbot />
      
      <main className="flex-1 py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Comienza tu aprendizaje
            </h1>
            <p className="text-lg text-muted-foreground">
              Crea tu cuenta gratuita y accede a nuestros cursos en YouTube
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Registro de usuario</CardTitle>
              <CardDescription>
                Completa tus datos para crear tu cuenta. Los campos con (*) son obligatorios.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="usuario">
                    Usuario <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="usuario"
                    value={formData.usuario}
                    onChange={(e) => setFormData({ ...formData, usuario: e.target.value })}
                    placeholder="tu_usuario"
                    required
                    data-testid="input-usuario"
                  />
                </div>

                <div>
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu.email@ejemplo.com"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Por favor, introduce un email válido"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono">Teléfono (opcional)</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    placeholder="+34 600 000 000"
                    data-testid="input-telefono"
                  />
                </div>

                <div>
                  <Label htmlFor="password">
                    Contraseña <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Mínimo 6 caracteres"
                    required
                    minLength={6}
                    data-testid="input-password"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">
                    Confirmar contraseña <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Repite tu contraseña"
                    required
                    minLength={6}
                    data-testid="input-confirm-password"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <Checkbox
                    id="terminos"
                    checked={formData.aceptaTerminos}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, aceptaTerminos: checked as boolean })
                    }
                    required
                    data-testid="checkbox-terminos"
                  />
                  <label
                    htmlFor="terminos"
                    className="text-sm text-muted-foreground leading-tight cursor-pointer"
                  >
                    Acepto los términos y condiciones y la{" "}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPrivacyModal(true);
                      }}
                      className="text-primary hover:underline"
                      data-testid="button-privacy-modal"
                    >
                      política de privacidad
                    </button>
                    {" "}<span className="text-destructive">*</span>
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg" data-testid="button-register">
                  Crear cuenta
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                ¿Ya tienes cuenta?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Inicia sesión
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Política de Privacidad
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 text-foreground text-sm">
            <p className="text-muted-foreground text-center">
              Última actualización: noviembre 2025
            </p>

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

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              1. Identidad del Responsable del Tratamiento
            </h3>
            <div className="space-y-2">
              <p className="text-foreground"><strong className="text-foreground">Responsable:</strong> Develop It</p>
              <p className="text-foreground"><strong className="text-foreground">Web corporativa:</strong> <a href="https://developit.es" className="text-primary hover:underline">https://developit.es</a></p>
              <p className="text-foreground"><strong className="text-foreground">Correo de contacto:</strong> <a href="mailto:info@developit.es" className="text-primary hover:underline">info@developit.es</a></p>
              <p className="text-foreground"><strong className="text-foreground">Ubicación:</strong> España</p>
              <p className="text-foreground"><strong className="text-foreground">Actividad:</strong> Servicios de desarrollo web, software, inteligencia artificial, consultoría tecnológica y transformación digital.</p>
            </div>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              2. Datos que recopilamos
            </h3>
            <p>
              Como no usamos cookies (o solo las técnicas indispensables), la única información personal 
              que recopilamos es la que tú decides proporcionarnos.
            </p>
            <p><strong className="text-foreground">Datos que puedes enviarnos voluntariamente:</strong></p>
            <ul className="ml-4 space-y-1">
              <li>• Nombre y apellidos</li>
              <li>• Correo electrónico</li>
              <li>• Número de teléfono (opcional)</li>
              <li>• Mensajes, consultas o solicitudes</li>
              <li>• Información facilitada en formularios o redes sociales</li>
              <li>• Datos profesionales si solicitas presupuesto o servicios</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              3. Finalidad del tratamiento
            </h3>
            <p>Tratamos tus datos exclusivamente para:</p>
            <ul className="ml-4 space-y-1">
              <li>• Atender tus consultas o solicitudes de información</li>
              <li>• Enviarte información comercial solo si tú lo solicitas</li>
              <li>• Preparar presupuestos o propuestas</li>
              <li>• Mantener la comunicación comercial o contractual</li>
              <li>• Cumplir obligaciones legales (facturación, contabilidad, documentación contractual)</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              4. Legitimación para el tratamiento
            </h3>
            <p>Tu información se tratará según:</p>
            <ul className="ml-4 space-y-1">
              <li>• Tu consentimiento (cuando nos escribes o solicitas información)</li>
              <li>• Relación precontractual/contractual (presupuestos o servicios)</li>
              <li>• Interés legítimo (gestión empresarial básica)</li>
              <li>• Obligación legal (casos de facturación y documentación)</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              5. Destinatarios de los datos
            </h3>
            <p>No cedemos tus datos a terceros, salvo:</p>
            <ul className="ml-4 space-y-1">
              <li>• Servicios tecnológicos necesarios para funcionamiento (servidores, correo, hosting)</li>
              <li>• Proveedores profesionales sujetos a contrato de confidencialidad</li>
              <li>• Cumplimiento de obligaciones legales ante autoridades públicas si es requerido</li>
            </ul>
            <p className="mt-2">Todos los proveedores cumplen con el RGPD.</p>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              6. Periodo de conservación
            </h3>
            <p>Conservaremos tus datos únicamente:</p>
            <ul className="ml-4 space-y-1">
              <li>• Mientras mantengamos comunicación o relación comercial</li>
              <li>• O durante los plazos legales aplicables (si llegas a ser cliente)</li>
              <li>• Si nos pides eliminar tus datos, se eliminarán inmediatamente salvo obligación legal</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              7. Derechos del usuario
            </h3>
            <p>Puedes ejercer tus derechos en cualquier momento:</p>
            <ul className="ml-4 space-y-1">
              <li>• Acceso</li>
              <li>• Rectificación</li>
              <li>• Supresión</li>
              <li>• Oposición</li>
              <li>• Limitación</li>
              <li>• Portabilidad</li>
              <li>• Retirada del consentimiento</li>
            </ul>
            <p className="mt-2">
              Solo debes escribirnos a: <a href="mailto:info@developit.es" className="text-primary hover:underline font-semibold">info@developit.es</a>
              {" "}Asunto: "Protección de Datos".
            </p>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              8. Seguridad de los datos
            </h3>
            <p>Aplicamos medidas técnicas y organizativas para proteger tu información:</p>
            <ul className="ml-4 space-y-1">
              <li>• Servidores seguros</li>
              <li>• Acceso restringido</li>
              <li>• Cifrado y protocolos protegidos (HTTPS)</li>
              <li>• Control interno de gestión de datos</li>
            </ul>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              9. Enlaces externos
            </h3>
            <p>
              Nuestros sitios y redes pueden contener enlaces a terceros. No somos responsables de sus 
              políticas de privacidad. Recomendamos revisarlas antes de proporcionar datos.
            </p>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              10. Ausencia de cookies
            </h3>
            <p>
              Declaramos que no utilizamos cookies de análisis, marketing o seguimiento, solamente aquellas 
              estrictamente necesarias para el funcionamiento técnico básico del sitio.
            </p>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              11. Modificaciones
            </h3>
            <p>
              Podemos actualizar esta Política en cualquier momento. La versión vigente será siempre la 
              última publicada.
            </p>

            <h3 className="text-lg font-bold mt-6 text-foreground" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              12. Contacto
            </h3>
            <div className="space-y-2">
              <p className="text-foreground">Para cualquier cuestión relacionada con privacidad:</p>
              <p className="mt-2">
                <a href="mailto:info@developit.es" className="text-primary hover:underline font-semibold">info@developit.es</a>
              </p>
              <p className="mt-2 text-foreground">España</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
