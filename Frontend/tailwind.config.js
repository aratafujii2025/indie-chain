/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        // brand colors
        'cream': '#EEE9E6',
        'green': '#8CDBA9',
        'navy': '#341294',
        'pink': '#DAA6DB',
        'baby-blue': '#A9D5F5',
        'orange': '#F8B354',
        'gold-dark': '#CAAA00',
        'gold-light': '#FFD600',
        'silver-dark': '#A9A9A9',
        'silver-light': '#DDDDDD',
        'bronze-dark': '#7A4700',
        'bronze-light': '#C27000',
        'button-grey': '#F6F6F6',
  
        // neutrals
        'b1': '#000000',
        'b2': '#1D1D1D',
        'b3': '#282828',
        'white': '#FFFFFF',
      },
    },
    textShadow: {
      sm: '-1px 1px 2px var(--tw-shadow-color)',
      DEFAULT: '-2px 2px 4px var(--tw-shadow-color)',
      lg: '-4px 4px 8px var(--tw-shadow-color)',
      xl: '-4px 4px 16px var(--tw-shadow-color)',
    }
  },
  plugins: [plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  })],
}

