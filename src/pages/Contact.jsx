import { useState } from 'react'
import { Send, Instagram } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/5511977578125?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contato" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contato
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Fale conosco agora
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tire suas dúvidas, faça seu orçamento ou agende uma visita. Estamos prontos para atender você.
              </p>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5511977578125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-200 hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <img
                    src="/images/whatsapp-logo.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-7 h-7"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-green-700">WhatsApp</p>
                  <p className="text-muted-foreground">+55 11 97757-8125</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/seuphonesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/20 hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary">Instagram</p>
                  <p className="text-muted-foreground">@seuphonesp</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-muted/30 rounded-3xl p-6 md:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/LOGO.jpg"
                alt=""
                aria-hidden="true"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <h3 className="text-xl font-bold text-foreground">
                Envie uma mensagem
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Seu nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Digite seu nome"
                />
              </div>

              

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Sua mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
