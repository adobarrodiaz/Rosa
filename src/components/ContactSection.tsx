import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ nombre: "", telefono: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-primary mb-4">Contacto</p>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-5xl font-light">
            Comienza tu <span className="italic text-gradient-gold">experiencia</span>
          </h2>
        </div>

        <div className="reveal grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg mb-1">Ubicación</h3>
                <p className="text-sm text-muted-foreground font-light">
                  C/ Nieremberg 1
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg mb-1">Teléfono</h3>
                <a
                  href="tel:+34619420464"
                  className="text-sm text-muted-foreground font-light hover:text-primary transition-colors duration-300"
                >
                  +34 619 420 464
                </a>
                <a
                  href="https://wa.me/34619420464"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-xs tracking-widest uppercase text-primary mt-2 hover:text-gold-light transition-colors duration-300"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-heading text-lg mb-1">Horario</h3>
                <p className="text-sm text-muted-foreground font-light">
                  Lunes a Viernes: 10:00 - 20:00
                  <br />
                  Sabados: 10:00 - 14:00
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full aspect-video bg-secondary rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps?q=Calle+Nieremberg+1+Madrid&output=embed"
                className="w-full h-full grayscale invert opacity-70"
                loading="lazy"
                title="Ubicación"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:border-primary focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                required
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:border-primary focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300"
            >
              {submitted ? "✓ Mensaje enviado" : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
