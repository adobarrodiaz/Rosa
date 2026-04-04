export default function FooterSection() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-2xl font-light mb-4 text-foreground">Maria Rosa</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Centro de estetica con tratamientos personalizados y packs por sesion
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Contacto</h4>
            <div className="space-y-2 text-sm font-light">
              <p className="text-foreground">C/ Nieremberg 1</p>
              <a href="tel:+34619420464" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                +34 619 420 464
              </a>
              <a href="https://wa.me/34619420464" target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                WhatsApp directo
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Horario</h4>
            <div className="space-y-2 text-sm font-light text-muted-foreground">
              <p>Lunes - Viernes: 10:00 - 20:00</p>
              <p>Sabados: 10:00 - 14:00</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Legal</h4>
            <div className="space-y-2 text-sm font-light">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Política de privacidad
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Aviso legal
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} Maria Rosa Centro de Estetica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
