import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export default function Location() {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Localização
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Venha nos visitar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos localizados no coração de Embu das Artes, prontos para atendê-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden h-80 lg:h-full min-h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps?q=Seu+Phone+SP,+R.+Solano+Trindade,+128,+Jardim+Arabutan,+Embu+das+Artes,+SP,+06803-290&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Seu Phone SP"
              className="absolute inset-0"
            />
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Endereço</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    R. Solano Trindade, 128<br />
                    Jardim Arabutan<br />
                    Embu das Artes - SP<br />
                    CEP: 06803-290
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Horário de Funcionamento</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a Sexta: 10h às 19h</p>
                    <p>Sábado: 10h às 15h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Telefone</h3>
                  <a
                    href="tel:+5511977578125"
                    className="text-primary hover:underline font-medium text-lg"
                  >
                    +55 11 97757-8125
                  </a>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=R.+Solano+Trindade,+128+-+Jardim+Arabutan,+Embu+das+Artes+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Como Chegar?
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
