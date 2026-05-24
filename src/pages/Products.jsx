import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'iPhone',
    description: 'O mais poderoso iPhone já criado. Câmera de 48MP, chip A18 Pro e tela Super Retina XDR.',
    image: '/images/iphoneSITEapple.jpg',
    badge: 'Lancamento',
    badgeColor: 'bg-primary',
  },
  {
    id: 2,
    name: 'iPad',
    description: 'Tela grande, desempenho rápido e bateria para estudar, trabalhar e aproveitar seus conteúdos.',
    image: '/images/iPad.jpg',
    badge: 'Mais Vendido',
    badgeColor: 'bg-green-500',
  },
  {
    id: 3,
    name: 'Apple Watch',
    description: 'Design moderno, recursos de saúde e conectividade para acompanhar sua rotina.',
    image: '/images/applewatch.png',
    badge: 'Acessorios',
    badgeColor: 'bg-orange-500',
  },
  {
    id: 4,
    name: 'AirPods',
    description: 'Áudio de qualidade, praticidade no dia a dia e integração perfeita com seu iPhone.',
    image: '/images/airpodsnew.png',
    badge: 'Áudio',
    badgeColor: 'bg-sky-500',
  },
  {
    id: 5,
    name: 'MacBook',
    description: 'Desempenho profissional com chip M3. Perfeito para criadores e profissionais.',
    image: '/images/macBook.png',
    badge: 'Novidade',
    badgeColor: 'bg-purple-500',
  },
]

const getProductWhatsappUrl = (productName) => {
  const message = `Olá! Vim pelo site da Seu Phone SP e tenho interesse em um ${productName}.`
  return `https://wa.me/5511977578125?text=${encodeURIComponent(message)}`
}

export default function Products() {
  const [activeProductId, setActiveProductId] = useState(null)

  return (
    <section id="produtos" className="w-full max-w-full overflow-x-hidden py-20 md:py-28 bg-secondary/30">
      <div className="w-full max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-full text-center md:max-w-3xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Produtos
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Linha completa Apple
          </h2>
          <p className="mx-auto mt-4 max-w-full text-base leading-relaxed text-muted-foreground sm:text-lg">
            iPhones, iPads, MacBooks, Apple Watch, AirPods e mais. Novos e seminovos com garantia.
          </p>
        </div>

        {/* Instagram-style Grid */}
        <div className="grid w-full min-w-0 max-w-full md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product) => {
            const isMacBook = product.name === 'MacBook'
            const isActive = activeProductId === product.id

            return (
              <div
                key={product.id}
                className={`group relative min-w-0 max-w-full rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isMacBook ? 'md:col-span-2 flex flex-col bg-[#f5f5f7] text-center overflow-hidden md:min-h-[620px]' : 'overflow-hidden bg-white'
                }`}
              >
                {/* Image Container */}
                <div
                  onClick={() => setActiveProductId(isActive ? null : product.id)}
                  className={`relative cursor-pointer ${
                  isMacBook ? 'order-2 aspect-[16/9] overflow-hidden bg-[#f5f5f7] px-0 pt-10 pb-4 md:flex-1 md:aspect-auto md:px-4 md:pt-0 md:pb-10' : 'h-56 overflow-hidden bg-white sm:h-64 md:h-auto md:aspect-[4/3]'
                  }`}
                >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full transition-transform duration-700 ${
                    isMacBook ? 'object-contain object-top scale-[1.85] group-hover:scale-[1.9] md:scale-125 md:group-hover:scale-[1.3]' : 'object-cover object-center group-hover:scale-105'
                  }`}
                />
                
                {/* Badge */}
                {!isMacBook && (
                  <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-4 py-1.5 rounded-full text-sm font-semibold`}>
                    {product.badge}
                  </div>
                )}

                {!isMacBook && (
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  } md:opacity-0 md:group-hover:opacity-100`} />
                )}
                
                {/* CTA on hover/tap */}
                <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    } ${isActive ? 'pointer-events-auto' : 'pointer-events-none'} md:pointer-events-none md:translate-y-4 md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100`}>
                      <a
                        href={getProductWhatsappUrl(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-center font-semibold text-foreground shadow-sm transition-all hover:bg-primary hover:text-white active:scale-[0.98]"
                      >
                    <MessageCircle className="w-5 h-5" />
                    Consultar Disponibilidade
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className={`${isMacBook ? 'order-1 px-6 pt-9 pb-4 md:px-12 md:pt-14 md:pb-8' : 'p-6'}`}>
                <h3 className={`${isMacBook ? 'text-3xl md:text-5xl' : 'text-xl'} font-bold text-foreground mb-2 group-hover:text-primary transition-colors`}>
                  {product.name}
                </h3>
                <p className={`${isMacBook ? 'mx-auto max-w-2xl text-lg md:text-xl' : ''} text-muted-foreground leading-relaxed`}>
                  {product.description}
                </p>
              </div>
            </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          
          <p className="mt-14 text-muted-foreground md:mt-4">
            Parcelamos em até <span className="font-bold text-primary">18x</span> no cartão
          </p>
        </div>
      </div>
    </section>
  )
}
