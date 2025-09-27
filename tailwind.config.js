/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1a1a1a", // Alternativa para preto
        light: "#f5f5f5", // Alternativa para branco
        gold: "#b8860b", // Tom de dourado mais moderno e suave (Goldenrod)
        accent: "#333333", // Cor de destaque mais equilibrada
      },
    },
  },
  plugins: [],
};
