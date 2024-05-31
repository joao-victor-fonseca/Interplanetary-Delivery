/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: "#1C1F2E",
          2: "#161925",
        },
      },
      backgroundImage: {
        hero: "url('/public/image/background.png')",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addBase }) {
      addBase({
        html: { scrollBehavior: "smooth" },
      });
    },
  ],
};
