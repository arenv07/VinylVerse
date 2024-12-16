/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'], 
        'poppins': ['Poppins', 'sans-serif'],
        'bungee': ['Bungee Shade', 'sans-serif']
      },
      colors: {
        'brown': '#3A1F04',
        'teal': '#5A8D8A',
        'offwhite': '#FAF9F6',
        'tan': '#F5EEDC'
      },
      fontSize: {
        '100': '6rem', 
      },
      letterSpacing: {
        large: '.125em', 
      },
    },
  },
  plugins: [],
}