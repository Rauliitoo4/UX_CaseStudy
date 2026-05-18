import Button from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
}

export const Primary = {
  args: {
    variant: "primary",
    children: "Reservar mesa",
  },
}

export const Secondary = {
  args: {
    variant: "secondary",
    children: "Ver carta",
  },
}

export const Disabled = {
  args: {
    disabled: true,
    children: "No disponible",
  },
}