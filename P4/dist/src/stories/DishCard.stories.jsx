import DishCard from "../components/DishCard"

export default {
  title: "Components/DishCard",
  component: DishCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
}

export const Default = {
  args: {
    name: "Tartar de atún",
    description: "Atún fresco marinado con soja, aguacate y sésamo tostado.",
    price: "24,00",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
  },
}