import { Menu, X, GraduationCap, ChevronDown, Code, BookOpen, Globe, MessageSquare, PenTool, BookMarked, Zap, Database, Brain, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { Link } from "wouter";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/cursos", label: "Cursos" },
    { href: "/blog", label: "Blog" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/#contacto", label: "Contacto" },
  ];

  const areas = [
    {
      title: "Desarrollo Full Stack",
      icon: Code,
      items: ["HTML", "CSS", "JavaScript", "PHP", "Java EE", "Servicios Web"],
    },
    {
      title: "Programación",
      icon: Zap,
      items: ["Python", "Java SE"],
    },
    {
      title: "Preparación Entornos de Trabajo",
      icon: BookOpen,
      items: ["Desarrollo Web", "Python", "Java", "Servidor de Aplicaciones"],
    },
    {
      title: "Bases de Datos",
      icon: Database,
      items: ["Fundamentos BD Relacionales", "MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Inteligencia Artificial",
      icon: Brain,
      items: ["Cómo funciona", "Prompting Efectivo", "Desarrollo No Code", "Agentes", "Automatización", "Machine Learning"],
    },
    {
      title: "Transformación Digital",
      icon: TrendingUp,
      items: ["IA y Big Data", "Liderazgo y Gestión del Cambio"],
    },
    {
      title: "Idiomas",
      icon: Globe,
      items: ["Inglés", "Alemán", "Español para Extranjeros"],
    },
    {
      title: "Expresión Oral y Escrita",
      icon: MessageSquare,
      items: ["Oratoria Eficaz", "Redacción y Corrección de Textos"],
    },
    {
      title: "Escritura",
      icon: PenTool,
      items: ["Fase Previa Creativa", "Creación Literaria"],
    },
    {
      title: "Lectura",
      icon: BookMarked,
      items: ["Lectura Rápida de Textos"],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1" data-testid="link-home">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl md:text-3xl font-bold tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="text-primary">DEVELOP</span>
              {" "}
              <span className="text-primary">iT</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium" data-testid="button-areas-menu">
                    Áreas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] md:grid-cols-2">
                      {areas.map((area) => {
                        const Icon = area.icon;
                        return (
                          <div key={area.title} className="group">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className="h-4 w-4 text-primary" />
                              <h3 className="font-semibold text-sm">{area.title}</h3>
                            </div>
                            {area.items.length > 0 ? (
                              <ul className="space-y-1 ml-6">
                                {area.items.map((item) => (
                                  <li key={item}>
                                    <Link
                                      href="/cursos"
                                      className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                      data-testid={`link-${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-xs text-muted-foreground ml-6">Próximamente</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login" className="hidden md:inline-flex text-sm font-medium text-foreground hover:text-primary transition-colors" data-testid="link-login">
              Inicia sesión
            </Link>
            <Link href="/registro">
              <Button className="hidden md:inline-flex" data-testid="button-cta-header">
                Comenzar ahora
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium hover-elevate rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium hover-elevate rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium hover-elevate rounded-md"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-login"
            >
              Inicia sesión
            </Link>
            <Link href="/registro">
              <Button className="w-full" data-testid="button-cta-mobile">
                Comenzar ahora
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
