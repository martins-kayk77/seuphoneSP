import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcos Silveira',
    role: 'Cliente há 3 anos',
    rating: 5,
    text: 'É uma grande satisfação ser cliente deles, uma loja de venda de iPhones que se destaca pela excelência na região. A confiabilidade e honestidade demonstradas pela equipe, aliadas à garantia de aparelhos de procedência, transmitem muita segurança.',
  },
  {
    name: 'Carolina Simão',
    role: 'Cliente',
    rating: 5,
    text: 'Atendimento impecável! Espaço super aconchegante e um cuidado incrível no atendimento, sempre muito atenciosos!',
  },
  {
    name: 'Daniel Cardoso',
    role: 'Cliente há 3 anos',
    rating: 5,
    text: 'Sou cliente da Seu Phone SP há mais de 3 anos e sempre tive uma experiência excelente. Atendimento ágil, produtos de qualidade e preço justo. A melhor opção da região de Embu das Artes. Super recomendo!',
  },
]

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Avaliações
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mais de 79 avaliações positivas no Google. Confira o que dizem sobre nós.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white border border-border rounded-2xl p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-secondary/50 px-6 py-4 rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`} />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.5 de 5</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">79 avaliações no Google</span>
          </div>
        </div>
      </div>
    </section>
  )
}
