module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/tw-elements/dist/js/**/*.js",
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
        adrc: "#1CA56B",
        philanthropy: "#B60016",
        research: "#E06810",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),
  ],
};
