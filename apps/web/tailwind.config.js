const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'split': "linear-gradient(to top, transparent 62% , #282639 37%);"
      }
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
     }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [      {
      mytheme: {
        "base-100": "#1F1D2F",
      },
    },],
  },
}