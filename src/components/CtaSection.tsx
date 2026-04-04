import ctaBg from "@/assets/cta-bg.jpg";

export default function CtaSection() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ctaBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <h2 className="reveal font-heading text-3xl md:text-6xl font-light leading-tight mb-6">
          Regálate el cuidado que tu piel{" "}
          <span className="italic text-gradient-gold">merece</span>
        </h2>
        <p className="reveal reveal-delay-1 text-muted-foreground font-light mb-10">
          Tu momento de calma y transformacion te esta esperando en Maria Rosa
        </p>
        <a
          href="https://wa.me/34619420464"
          target="_blank"
          rel="noreferrer"
          className="reveal reveal-delay-2 inline-flex px-12 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
}
