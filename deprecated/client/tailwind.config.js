const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
    "./design-system/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "mountain-meadow": {
          DEFAULT: "#1CA56B",
          50: "#B4F2D8",
          100: "#9EEFCD",
          200: "#73E7B6",
          300: "#47E09F",
          400: "#23D187",
          500: "#1CA56B",
          600: "#15794F",
          700: "#0D4E32",
          800: "#062216",
          900: "#000000",
        },
        apple: {
          DEFAULT: "#3EBA33",
          50: "#DFF6DD",
          100: "#CCF0C9",
          200: "#A6E5A1",
          300: "#81DA79",
          400: "#5BCF51",
          500: "#3EBA33",
          600: "#319228",
          700: "#236A1D",
          800: "#164212",
          900: "#091A07",
        },
        christine: {
          DEFAULT: "#E06810",
          50: "#FCE8D9",
          100: "#FBDAC1",
          200: "#F7BD92",
          300: "#F4A062",
          400: "#F08333",
          500: "#E06810",
          600: "#B0520D",
          700: "#813C09",
          800: "#512606",
          900: "#221002",
        },
        "guardsman-red": {
          DEFAULT: "#B60016",
          50: "#FF9DA8",
          100: "#FF8392",
          200: "#FF5065",
          300: "#FF1D38",
          400: "#E9001C",
          500: "#B60016",
          600: "#830010",
          700: "#50000A",
          800: "#1D0004",
          900: "#000000",
        },
        "deep-cerulean": {
          50: "#f4f9fb",
          100: "#e9f3f8",
          200: "#c8e2ed",
          300: "#a7d0e3",
          400: "#65adcd",
          500: "#238AB8",
          600: "#207ca6",
          700: "#1a688a",
          800: "#15536e",
          900: "#11445a",
        },
        casal: {
          50: "#f3f7f8",
          100: "#e7eff0",
          200: "#c2d8db",
          300: "#9ec0c5",
          400: "#559099",
          500: "#0C616D",
          600: "#0b5762",
          700: "#094952",
          800: "#073a41",
          900: "#063035",
        },
        silver: {
          50: "#fcfcfc",
          100: "#f8f8f8",
          200: "#efefef",
          300: "#e5e5e5",
          400: "#d1d1d1",
          500: "#BDBDBD",
          600: "#aaaaaa",
          700: "#8e8e8e",
          800: "#717171",
          900: "#5d5d5d",
        },
        "storm-dust": {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#d8d8d8",
          300: "#c1c1c1",
          400: "#929292",
          500: "#636363",
          600: "#595959",
          700: "#4a4a4a",
          800: "#3b3b3b",
          900: "#313131",
        },
        shark: {
          50: "#f4f4f4",
          100: "#e9e9e9",
          200: "#c8c8c8",
          300: "#a6a6a6",
          400: "#646464",
          500: "#212121",
          600: "#1e1e1e",
          700: "#191919",
          800: "#141414",
          900: "#101010",
        },
        "blue-ribbon": {
          50: "#f6f8ff",
          100: "#eef0ff",
          200: "#d4dbff",
          300: "#bac5ff",
          400: "#8799fe",
          500: "#536DFE",
          600: "#4b62e5",
          700: "#3e52bf",
          800: "#324198",
          900: "#29357c",
        },
        chambray: {
          50: "#f3f6f9",
          100: "#e7edf2",
          200: "#c3d2e0",
          300: "#9fb6cd",
          400: "#5680a7",
          500: "#0E4981",
          600: "#0d4274",
          700: "#0b3761",
          800: "#082c4d",
          900: "#07243f",
        },
        "periwinkle-gray": {
          50: "#fcfcfe",
          100: "#f9fafd",
          200: "#f1f2fa",
          300: "#e8eaf6",
          400: "#d6daf0",
          500: "#C5CAE9",
          600: "#b1b6d2",
          700: "#9498af",
          800: "#76798c",
          900: "#616372",
        },
        "prussian-blue": {
          50: "#f3f5f6",
          100: "#e7eaed",
          200: "#c2cbd3",
          300: "#9dabb8",
          400: "#546c83",
          500: "#0B2D4E",
          600: "#0a2946",
          700: "#08223b",
          800: "#071b2f",
          900: "#051626",
        },
        error: {
          50: "#fef8f8",
          100: "#fdf1f1",
          200: "#fadddd",
          300: "#f7c9c9",
          400: "#f1a0a0",
          500: "#eb7777",
          600: "#d46b6b",
          700: "#b05959",
          800: "#8d4747",
          900: "#733a3a",
        },
        success: {
          50: "#f6faf5",
          100: "#ecf6eb",
          200: "#d0e8cd",
          300: "#b3daaf",
          400: "#7abf74",
          500: "#41a338",
          600: "#3b9332",
          700: "#317a2a",
          800: "#276222",
          900: "#20501b",
        },
      },
      fontSizes: {
        sm: ["17px", "31px"],
        base: ["21px", "31px"],
        lg: ["23px", "31px"],
        xl: ["31px", "31px"],
        "2xl": ["38px", "31px"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
