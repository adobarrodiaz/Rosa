import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Tarifas", href: "#tarifas" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY && y > 300);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""}`}
      >
        <div className="container mx-auto flex items-center justify-between py-5 px-6">
          <a href="#" className="font-heading text-2xl md:text-3xl font-light tracking-wider text-foreground">
            MARIA ROSA
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden md:inline-flex px-6 py-2.5 border border-primary/40 text-sm tracking-widest uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Reservar
          </a>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-foreground"
            aria-label="Abrir menú"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background transition-opacity duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-foreground"
          aria-label="Cerrar menú"
        >
          <X className="w-6 h-6" />
        </button>
        {navLinks.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="font-heading text-3xl font-light tracking-wider text-foreground hover:text-primary transition-colors duration-300"
            style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={() => setMobileOpen(false)}
          className="mt-4 px-8 py-3 border border-primary/40 text-sm tracking-widest uppercase text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Reservar cita
        </a>
      </div>
    </>
  );
}
