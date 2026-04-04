import { Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Experiencia de belleza premium"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="overflow-hidden mb-4">
          <p className="text-sm tracking-[0.4em] uppercase text-primary font-body animate-fade-up">
            Maria Rosa · Centro de estetica
          </p>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-light leading-[1.1] mb-6 animate-fade-up [animation-delay:200ms]">
          Donde tu piel descansa
          <br />
          <span className="italic text-gradient-gold">y se transforma</span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:400ms]">
          Tratamientos personalizados, precios claros y resultados naturales en cada sesion
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:600ms]">
          <a
            href="#contacto"
            className="px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Reservar cita
          </a>
          <a
            href="#servicios"
            className="px-10 py-4 border border-border text-sm tracking-widest uppercase text-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            Descubrir tratamientos
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 mt-12 animate-fade-up [animation-delay:800ms]">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">
            Cita previa por WhatsApp · 619 420 464
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in [animation-delay:1.2s]">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      </div>
    </section>
  );
}
