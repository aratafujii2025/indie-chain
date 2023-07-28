/** @type {import('tailwindcss').Config} */
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
  },
  plugins: [],
}

