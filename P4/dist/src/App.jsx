import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import DishCard from "./components/DishCard"
import Footer from "./components/Footer"

const platos = [
  {
    id: 1,
    name: "Tartar de atún",
    description: "Atún fresco marinado con soja, aguacate y sésamo tostado.",
    price: "24,00",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
  },
  {
    id: 2,
    name: "Salmón en papillote",
    description: "Salmón al vapor con verduras de temporada y hierbas frescas.",
    price: "22,00",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
  },
  {
    id: 3,
    name: "Gyozas de pato",
    description: "Empanadillas crujientes rellenas de pato confitado y trufa.",
    price: "18,00",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400",
  },
]

function App() {
  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      {/* Platos destacados */}
      <section className="py-16 px-8 max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-carbon text-4xl font-semibold text-center mb-10">
          Platos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platos.map((plato) => (
            <DishCard key={plato.id} {...plato} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App