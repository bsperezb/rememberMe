/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'bg-gray': 'rgb(240, 240, 240)', // Agregar color personalizado
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}