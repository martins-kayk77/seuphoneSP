import { ArrowRight, Star, Shield, Truck, Instagram } from 'lucide-react'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 md:pt-24 overflow-x-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/30" />
      <div className="pointer-events-none absolute top-44 -right-20 opacity-25 sm:-left-20 sm:right-auto sm:top-28 lg:opacity-20">
        <img
          src="/images/LOGO.jpg"
          alt=""
          aria-hidden="true"
          className="w-80 rounded-[2rem] sm:w-96"
        />
      </div>
      
      <div className="relative mx-auto w-full max-w-full overflow-x-hidden px-4 py-16 sm:px-6 md:py-24 lg:max-w-7xl lg:px-8 lg:py-32">
        <div className="grid w-full min-w-0 max-w-full lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="w-full min-w-0 max-w-[calc(100vw-2rem)] space-y-8 lg:max-w-none">
            {/* Badge */}
            <div className="inline-flex max-w-full items-center gap-2 bg-secondary px-4 py-2 rounded-full">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`} />
                ))}
              </div>
              <span className="text-sm font-medium text-secondary-foreground">
                4.5 estrelas | 79 avaliações
              </span>
            </div>

            {/* Brand Mark */}
            <div className="inline-flex w-full max-w-full items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-border shadow-sm sm:w-auto">
              <img
                src="/images/LOGO.jpg"
                alt=""
                aria-hidden="true"
                className="w-11 h-11 shrink-0 rounded-xl object-cover"
              />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Seu Phone SP
                </p>
                <p className="text-sm font-semibold leading-snug text-foreground">
                  Loja de produtos Apple em Embu das Artes
                </p>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="max-w-full text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                A melhor loja de{' '}
                <span className="text-primary">iPhone</span> de Embu das Artes
              </h1>
              <p className="max-w-full text-base sm:text-lg md:text-xl text-muted-foreground md:max-w-xl leading-relaxed">
                Linha completa Apple: iPhones, iPads, MacBooks, Apple Watch e AirPods. Novos e seminovos com garantia. Há mais de 5 anos entregando qualidade e confiança.
              </p>
            </div>

            {/* Instagram Followers Badge */}
            <div className="inline-flex w-full max-w-full items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-2.5 rounded-full sm:w-auto">
              <Instagram className="w-5 h-5 shrink-0" />
              <span className="font-semibold">+33.7K seguidores no Instagram</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511977578125"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full max-w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-center text-lg font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 active:scale-[0.98] sm:w-auto md:hover:scale-105"
              >
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/seuphonesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 w-full max-w-full touch-manipulation items-center justify-center gap-2 rounded-full border-2 border-border bg-white px-6 py-4 text-center text-lg font-semibold text-foreground transition-colors hover:border-primary hover:text-primary active:scale-[0.98] sm:w-auto"
              >
                <Instagram className="w-5 h-5" />
                Ver no Instagram
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap sm:gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Garantia em todos os aparelhos</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Entrega disponível</span>
              </div>
            </div>
          </div>

          {/* Image - iPhone Showcase */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/printApple.PNG"
                alt="Colecao de iPhones - Seu Phone SP"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating card - Parcelamento */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg font-bold">18x</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Parcelamos</p>
                  <p className="text-sm text-muted-foreground">No cartão de crédito</p>
                </div>
              </div>
            </div>

            {/* Floating card - Garantia */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Garantia</p>
                  <p className="text-sm text-muted-foreground">Aparelhos originais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
