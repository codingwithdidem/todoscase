module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
      colors: {
        "brand-black": "var(--clr-black)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
