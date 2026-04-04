type PriceItem = {
  name: string;
  price: string;
};

type PriceGroup = {
  title: string;
  items: PriceItem[];
};

type PromoCard = {
  title: string;
  subtitle: string;
  image: string;
};

const promoCards: PromoCard[] = [
  {
    title: "Antiaging Dermapen",
    subtitle: "Regenera en profundidad",
    image: "/maria-rosa/antiaging-dermapen.jpg",
  },
  {
    title: "Acido Mandelico + Dermapen",
    subtitle: "95EUR",
    image: "/maria-rosa/mandelico-dermapen-95.jpg",
  },
  {
    title: "Lifting de pestanas",
    subtitle: "Resultados naturales",
    image: "/maria-rosa/lifting-pestanas.jpg",
  },
  {
    title: "Limpieza facial promo",
    subtitle: "52EUR",
    image: "/maria-rosa/limpieza-acido-52.jpg",
  },
];

const priceGroups: PriceGroup[] = [
  {
    title: "Faciales",
    items: [
      { name: "Limpieza de cutis profunda (50 min)", price: "41EUR" },
      { name: "Limpieza + punta de diamante + tratamiento Vit C", price: "48EUR" },
      { name: "Limpieza + radiofrecuencia", price: "56EUR" },
      { name: "Tratamiento GLOW con acido glicolico", price: "59EUR" },
      { name: "Lifting de pestanas con tinte", price: "44EUR" },
      { name: "Laminado de cejas con tinte", price: "44EUR" },
    ],
  },
  {
    title: "Microneedling y combinados",
    items: [
      { name: "Dermapen - sesion suelta", price: "75EUR" },
      { name: "Dermapen - bono 3 sesiones", price: "210EUR" },
      { name: "Exosomas con microneedling - sesion suelta", price: "149EUR" },
      { name: "Exosomas con microneedling - bono 3 sesiones", price: "399EUR" },
      { name: "Combinado 2 sesiones exosomas + microneedling", price: "399EUR" },
      { name: "Radiofrecuencia facial/corporal - sesion suelta", price: "52EUR" },
    ],
  },
  {
    title: "Depilacion",
    items: [
      { name: "Depilacion electrica", price: "1,50EUR/min" },
      { name: "Cera medias piernas", price: "15EUR" },
      { name: "Cera piernas enteras", price: "22EUR" },
      { name: "Ingles brasilenas", price: "16EUR" },
      { name: "Labio superior", price: "5EUR" },
      { name: "Facial completo", price: "25EUR" },
    ],
  },
  {
    title: "Corporal y liposyn",
    items: [
      { name: "Bono 5 sesiones presoterapia", price: "210EUR" },
      { name: "Bono 5 sesiones vendas frias + masaje", price: "210EUR" },
      { name: "Masaje zona 20 min", price: "27EUR" },
      { name: "Masaje corporal relajante", price: "45EUR" },
      { name: "Exfoliacion corporal + masaje relajante", price: "55EUR" },
      { name: "Liposyn corporal - 1 zona desde", price: "100EUR" },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="tarifas" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-primary mb-4">Lista de precios</p>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-5xl font-light">
            Sesiones, bonos y <span className="italic text-gradient-gold">packs</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-sm md:text-base text-muted-foreground font-light">
            C/ Nieremberg 1 · Cita previa por WhatsApp 619 420 464
          </p>
        </div>

        <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {promoCards.map((promo) => (
            <article key={promo.title} className="group relative overflow-hidden border border-border bg-dark-surface">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={440}
                height={440}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-heading text-xl text-foreground leading-tight">{promo.title}</h3>
                <p className="text-xs tracking-widest uppercase text-primary mt-1">{promo.subtitle}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="stagger-children grid md:grid-cols-2 gap-6">
          {priceGroups.map((group) => (
            <article key={group.title} className="border border-border bg-dark-surface/50 p-6 md:p-7">
              <h3 className="font-heading text-2xl font-light mb-5 text-foreground">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-muted-foreground font-light leading-relaxed">{item.name}</span>
                    <span className="text-foreground font-medium tracking-wide shrink-0">{item.price}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}