/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eggshell-white': '#EEE9E6',
        'accent-purple': '#DAA6DB',
        'accent-turqoise': '#A9D5F5',
        'accent-lightgreen': '#8CDBA9',
      },
    },
  },
  plugins: [],
};
