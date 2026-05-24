import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const quickLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Avaliações', href: '#avaliacoes' },
  { name: 'Localização', href: '#localizacao' },
  { name: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white">
                <img
                  src="/images/LOGO.jpg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl">
                Seu Phone <span className="text-primary">SP</span>
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              A melhor loja de iPhones de Embu das Artes. Qualidade, confiança e preços acessíveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/70">
                  R. Solano Trindade, 128<br />
                  Jardim Arabutan<br />
                  Embu das Artes - SP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+5511977578125" className="text-white/70 hover:text-primary transition-colors">
                  +55 11 97757-8125
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/70">
                  Seg - Sex: 10h - 19h<br />
                  Sábado: 10h - 15h
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
            <p className="text-white/70 mb-4">
              Siga-nos para ficar por dentro das novidades e promoções.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/seuphonesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/seuphonesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            2026 Seu Phone SP. Todos os direitos reservados.
          </p>
          <p className="text-white/50 text-sm">
            Embu das Artes - SP, Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
