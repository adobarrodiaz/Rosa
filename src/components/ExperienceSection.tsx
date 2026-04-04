import { Sparkles, User, Leaf, Award } from "lucide-react";
import experienceBg from "@/assets/experience-bg.jpg";

const features = [
  { icon: Sparkles, title: "Diagnóstico personalizado", desc: "Analizamos tu piel para crear un plan único" },
  { icon: User, title: "Atención 1 a 1", desc: "Dedicación exclusiva en cada sesión" },
  { icon: Leaf, title: "Ambiente relajante", desc: "Un espacio diseñado para tu bienestar" },
  { icon: Award, title: "Técnicas profesionales", desc: "Formación continua y tecnología avanzada" },
];

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal">
            <div className="relative overflow-hidden">
              <img
                src={experienceBg}
                alt="Experiencia de tratamiento facial"
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="reveal text-sm tracking-[0.3em] uppercase text-primary mb-4">La experiencia</p>
            <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-5xl font-light leading-tight mb-6">
              Cada tratamiento es un{" "}
              <span className="italic text-gradient-gold">ritual</span>{" "}
              diseñado para tu piel
            </h2>
            <p className="reveal reveal-delay-2 text-muted-foreground font-light leading-relaxed mb-10">
              No ofrecemos servicios rápidos. Creamos experiencias sensoriales donde cada detalle
              está pensado para que tu piel reciba exactamente lo que necesita.
            </p>

            <div className="stagger-children grid grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="group">
                  <f.icon className="w-5 h-5 text-primary mb-3 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-heading text-lg mb-1 text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
