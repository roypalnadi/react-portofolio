/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          100: "#14142B", // Biru gelap lebih terang
          200: "#0D0D26", // Space Black
          300: "#1A1A40", // Deep Blue
          neon: "#00FFFF", // Neon Cyan
          gold: "#FFD700", // Emas
          white: "#FFFFFF", // Putih
        },
      },
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
