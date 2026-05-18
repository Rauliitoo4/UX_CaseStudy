export default function Footer() {
  return (
    <footer className="bg-carbon text-cream py-10 px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <span className="text-gold font-serif text-lg font-semibold tracking-wide">
          Sabores con Encanto
        </span>
        <ul className="flex gap-6 text-sm text-cream">
          <li className="hover:text-gold cursor-pointer transition-colors">Menú</li>
          <li className="hover:text-gold cursor-pointer transition-colors">Reservar</li>
          <li className="hover:text-gold cursor-pointer transition-colors">Nosotros</li>
          <li className="hover:text-gold cursor-pointer transition-colors">Contacto</li>
        </ul>
        <span className="text-xs text-gray-500">© 2026 Sabores con Encanto</span>
      </div>
    </footer>
  )
}