import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Produtos', href: '#produtos' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Avaliações', href: '#avaliacoes' },
  { name: 'Localização', href: '#localizacao' },
  { name: 'Contato', href: '#contato' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 pr-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex min-w-0 items-center gap-2">
            <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden">
              <img
                src="/images/LOGO.jpg"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="whitespace-nowrap text-lg font-bold text-foreground sm:text-xl">
              Seu Phone <span className="text-primary">SP</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          
          

          
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 bg-white border-b border-border shadow-xl md:hidden">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-foreground font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
