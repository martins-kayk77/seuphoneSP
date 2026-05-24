import { CheckCircle } from 'lucide-react'

const highlights = [
  'Mais de 5 anos de experiência no mercado',
  'Equipe especializada em produtos Apple',
  'Aparelhos com procedência garantida',
  'Atendimento personalizado e humanizado',
  'Preços justos e competitivos',
  'Pós-venda e suporte ao cliente',
]

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1U09aamq2VeXJ9tP716krjJC6k7vBI.png"
                alt="Fachada da loja Seu Phone SP em Embu das Artes"
                className="w-full h-auto object-cover aspect-[4/3]"
                crossOrigin="anonymous"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Stats card */}
            <div className="absolute -bottom-8 -right-4 md:right-8 bg-white rounded-2xl shadow-xl p-6 border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground mt-1">Anos de mercado</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">79</p>
                  <p className="text-sm text-muted-foreground mt-1">Avaliações</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Sobre Nós
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Confiança e qualidade em cada atendimento
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                A Seu Phone SP nasceu do sonho de oferecer produtos Apple de qualidade com preços justos para a região de Embu das Artes e toda Grande São Paulo.
              </p>
              <p>
                Nossa equipe é apaixonada por tecnologia e está sempre pronta para ajudar você a encontrar o iPhone perfeito para suas necessidades, seja um modelo novo ou seminovo.
              </p>
            </div>
            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
