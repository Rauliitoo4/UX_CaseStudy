import Button from "./Button"

export default function DishCard({ image, name, description, price }) {
  return (
    <div className="bg-carbon flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-serif text-cream text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-400 flex-1">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-gold font-semibold text-base">{price} €</span>
          <Button variant="primary">Añadir</Button>
        </div>
      </div>
    </div>
  )
}