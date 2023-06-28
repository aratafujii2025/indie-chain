/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // brand colors
      'cream': '#EEE9E6',
      'green': '#8CDBA9',
      'navy': '#341294',
      'pink': '#DAA6DB',
      'baby-blue': '#A9D5F5',
      'orange': '#F8B354',

      // neutrals
      'b1': '#000000',
      'b2': '#1D1D1D',
      'b3': '#282828',
      'white': '#FFFFFF',
    },
  },
  plugins: [],
}

