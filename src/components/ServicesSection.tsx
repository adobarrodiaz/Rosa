import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";

const services = [
  {
    img: "/maria-rosa/dermapen-70.jpg",
    fallback: service1,
    title: "Dermapen con acido mandelico",
    desc: "Microneedling para mejorar tono, marcas y calidad global de la piel",
    price: "70EUR",
  },
  {
    img: "/maria-rosa/limpieza-acido-56.jpg",
    fallback: service2,
    title: "Limpieza facial + acido mandelico",
    desc: "Protocolo de higiene profunda con extraccion y mascara calmante",
    price: "56EUR",
  },
  {
    img: "/maria-rosa/punta-diamante.jpg",
    fallback: service3,
    title: "Punta de diamante",
    desc: "Exfoliacion mecanica para mejorar textura y luminosidad de la piel",
    price: "Consultar",
  },
  {
    img: "/maria-rosa/tratamiento-glow-58.jpg",
    fallback: service4,
    title: "Tratamiento GLOW",
    desc: "Combinacion de acidos para revitalizar y despertar la luz de tu piel",
    price: "58EUR",
  },
  {
    img: "/maria-rosa/liposonix-pack-375.jpg",
    fallback: service5,
    title: "Liposonix + radiofrecuencia",
    desc: "Pack corporal de alta intensidad para reducir grasa localizada y volumen",
    price: "375EUR pack",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-primary mb-4">Nuestros servicios</p>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-5xl font-light">
            Rituales para tu <span className="italic text-gradient-gold">bienestar</span>
          </h2>
        </div>

        <div className="stagger-children grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden cursor-pointer ${
                i >= 3 ? "lg:col-span-1" : ""
              } ${i === 3 ? "md:col-span-1" : ""}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = s.fallback;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs tracking-widest uppercase bg-background/85 border border-border text-primary">
                  {s.price}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-heading text-2xl md:text-3xl font-light mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
