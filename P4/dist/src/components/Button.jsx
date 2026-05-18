export default function Button({ variant = "primary", children, onClick, disabled = false }) {
  const styles = {
    primary: "bg-gold text-carbon hover:brightness-110",
    secondary: "bg-transparent text-gold border border-gold hover:bg-gold hover:text-carbon",
    disabled: "bg-gray-400 text-gray-200 cursor-not-allowed",
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2 text-sm font-semibold tracking-wide transition ${
        disabled ? styles.disabled : styles[variant]
      }`}
    >
      {children}
    </button>
  )
}