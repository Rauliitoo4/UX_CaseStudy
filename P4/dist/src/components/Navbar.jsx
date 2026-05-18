import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-carbon px-8 py-4 flex items-center justify-between relative">
      <span className="text-gold font-serif text-xl font-semibold tracking-wide">
        Sabores con Encanto
      </span>

      <ul className="hidden md:flex gap-8 text-cream text-sm tracking-wide">
        <li className="hover:text-gold cursor-pointer transition-colors">Menú</li>
        <li className="hover:text-gold cursor-pointer transition-colors">Reservar</li>
        <li className="hover:text-gold cursor-pointer transition-colors">Nosotros</li>
        <li className="hover:text-gold cursor-pointer transition-colors">Contacto</li>
      </ul>

      <button className="hidden md:block bg-gold text-carbon text-sm font-semibold px-5 py-2 hover:brightness-110 transition">
        Reservar mesa
      </button>

      <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-carbon flex flex-col items-center gap-6 py-8 z-50 md:hidden">
          <span className="text-cream hover:text-gold cursor-pointer">Menú</span>
          <span className="text-cream hover:text-gold cursor-pointer">Reservar</span>
          <span className="text-cream hover:text-gold cursor-pointer">Nosotros</span>
          <span className="text-cream hover:text-gold cursor-pointer">Contacto</span>
          <button className="bg-gold text-carbon font-semibold px-5 py-2">
            Reservar mesa
          </button>
        </div>
      )}
    </nav>
  )
}