import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "María G.", text: "Salgo nueva cada vez. El ambiente es increíble y los resultados se notan desde el primer día.", stars: 5 },
  { name: "Laura P.", text: "Ambiente de calma total. Nunca había sentido tanta relajación en un tratamiento facial.", stars: 5 },
  { name: "Carmen S.", text: "Llevo años viniendo y cada vez me sorprenden más. Profesionalidad y cariño en cada sesión.", stars: 5 },
  { name: "Ana R.", text: "Mi piel ha cambiado completamente. El diagnóstico personalizado marca la diferencia.", stars: 5 },
  { name: "Sofía M.", text: "Un espacio donde realmente te cuidan. Se nota que aman lo que hacen.", stars: 5 },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = (dir: 1 | -1) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((c) => (c + dir + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="resenas" className="py-24 md:py-32 bg-dark-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="reveal text-sm tracking-[0.3em] uppercase text-primary mb-4">Reseñas</p>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl md:text-5xl font-light">
            Lo que dicen nuestras <span className="italic text-gradient-gold">clientas</span>
          </h2>
        </div>

        <div className="reveal relative">
          <div className="text-center min-h-[200px] flex flex-col items-center justify-center">
            <div className="flex gap-1 mb-6">
              {[...Array(reviews[current].stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote
              className={`font-heading text-xl md:text-3xl font-light italic leading-relaxed max-w-2xl transition-all duration-500 ${
                isAnimating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              "{reviews[current].text}"
            </blockquote>
            <p
              className={`mt-6 text-sm tracking-widest uppercase text-muted-foreground transition-all duration-500 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              — {reviews[current].name}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Anterior reseña"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAnimating(true); setCurrent(i); setTimeout(() => setIsAnimating(false), 500); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Reseña ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors duration-300"
              aria-label="Siguiente reseña"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
