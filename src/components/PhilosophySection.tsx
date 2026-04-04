import { Heart, Target, Smile, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: Heart, title: "Personalización total", desc: "Cada protocolo se adapta a las necesidades únicas de tu piel" },
  { icon: Target, title: "Resultados reales", desc: "Técnicas probadas que transforman visiblemente" },
  { icon: Smile, title: "Experiencia relajante", desc: "Un espacio donde desconectar es parte del tratamiento" },
  { icon: ShieldCheck, title: "Profesionalidad", desc: "Formación continua y compromiso con la excelencia" },
];

export default function PhilosophySection() {
  return (
    <section id="filosofia" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-primary mb-4">Nuestra filosofía</p>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto">
            No creemos en tratamientos genéricos
          </h2>
          <p className="reveal reveal-delay-2 font-heading text-xl md:text-2xl italic text-muted-foreground mt-4">
            Cada piel tiene su historia, y cada tratamiento su propósito.
          </p>
        </div>

        <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div key={p.title} className="text-center group">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
