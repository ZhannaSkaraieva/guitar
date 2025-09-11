/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
        backgrounddark: "#131212";
        backgroundlight: "#FEFAFA",
        accentred: "#C90606",
        accentblack: "#131212",
        inputcolor: "#585757",
        textblack: "#000000",
        textlight: "#FFFFFF",
        textgray: "#585757",
        placeholdergray: "#585757",
        placeholdergraylight: "#C5C4C4",
        errorcolor: "#EB5555",
        conformationgreen: "#07742C",
      }
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        stal: ["Stalemate", "cursive"],
        tulp: ["Tulpen One", "cursive"],
      }
    }
  },
  plugins: [],
};


