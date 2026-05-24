import Header from './pages/Header'
import Hero from './pages/Hero'
import Products from './pages/Products'
import Services from './pages/Services'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Location from './pages/Location'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <About />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
