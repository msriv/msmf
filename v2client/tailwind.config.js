module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fonts: {
      nav: [
        "19px",
        {
          letterSpacing: "-0.02em",
          lineHeight: "22.8px",
        },
      ],
    },
    extend: {
      colors: {
        msmf: { base: "#0E4981", dark: "#0B2D4E" },
        incubation: "#0E4981",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};