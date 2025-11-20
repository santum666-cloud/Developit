import { Facebook, Linkedin, Instagram, GraduationCap } from "lucide-react";
import { SiX, SiYoutube, SiTiktok } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { TRAINING_AREAS } from "@shared/categories";

export function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    toast({
      title: "¡Suscripción exitosa!",
      description: "Recibirás nuestras novedades en tu email.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-primary">DEVELOP</span>
                {" "}
                <span className="text-primary">iT</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Formación tecnológica innovadora para profesionales del futuro.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-social-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-social-x">
                <SiX className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-social-youtube">
                <SiYoutube className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-social-tiktok">
                <SiTiktok className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-social-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" data-testid="button-social-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/nosotros" className="hover:text-foreground transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-foreground transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="hover:text-foreground transition-colors">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-semibold mb-4">Áreas de Formación</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {TRAINING_AREAS.map((area, index) => (
                <Link
                  key={index}
                  href={`/cursos?area=${encodeURIComponent(area)}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  data-testid={`link-area-${area.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="text-primary text-xs group-hover:scale-125 transition-transform">▸</span>
                  <span>{area}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Recibe novedades y recursos gratuitos.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                data-testid="input-newsletter"
              />
              <Button type="submit" className="w-full" data-testid="button-subscribe">
                Suscribir
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground space-y-2">
          <p>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Política de Privacidad</Link>
          </p>
          <p>&copy; Developit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
