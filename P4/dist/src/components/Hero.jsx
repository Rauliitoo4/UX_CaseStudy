import Button from "./Button"

export default function Hero() {
  return (
    <div
      className="relative w-full h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h1 className="font-serif text-cream text-5xl md:text-7xl font-semibold leading-tight max-w-3xl">
          Donde cada plato cuenta una historia
        </h1>
        <p className="text-cream/80 text-lg max-w-xl">
          Reserva tu mesa y déjate sorprender por una cocina de fusión sin límites
        </p>
        <div className="flex gap-4 mt-2">
          <Button variant="primary">Reservar mesa</Button>
          <Button variant="secondary">Ver carta</Button>
        </div>
      </div>
    </div>
  )
}