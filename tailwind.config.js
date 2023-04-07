/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      light: "#FCFCFC",
      blue: "#0F3460",
      pink: "#E94560",
      gray: "#EBEBEB",
      error: "#DC2626"
    }
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    }
  }
}
