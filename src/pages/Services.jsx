import { Smartphone, ShoppingBag, Truck, Repeat, Shield, CreditCard } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Linha Completa Apple',
    description: 'iPhones, iPads, MacBooks e acessórios. Novos e seminovos com procedência garantida.',
  },
  {
    icon: ShoppingBag,
    title: 'Compras na Loja',
    description: 'Visite nossa loja física em Embu das Artes e conheça nossos produtos pessoalmente.',
  },
  {
    icon: Truck,
    title: 'Entrega',
    description: 'Entregamos seu produto Apple com segurança na sua casa ou trabalho.',
  },
  {
    icon: Repeat,
    title: 'Troca com Volta',
    description: 'Consulte a possibilidade de usar seu aparelho atual como parte do pagamento em um novo iPhone.',
  },
  {
    icon: Shield,
    title: 'Garantia',
    description: 'Todos os aparelhos possuem garantia para sua total segurança e tranquilidade.',
  },
  {
    icon: CreditCard,
    title: 'Parcele em até 18x',
    description: 'Parcelamos em até 18x no cartão de crédito ou oferecemos desconto especial à vista.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Oferecemos uma experiência completa para você que busca qualidade e confiança em produtos Apple.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
