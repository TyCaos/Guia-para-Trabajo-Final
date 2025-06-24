/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts, jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        arcoiris: {
          rojo: '#ef5343',
          naranjo: '#ff8b4c',
          amarillo: '#ffc42b',
          verde: '#22cd69',
          celeste: '#26c8ee',
          azul: '#156fe5',
          violeta: '#704ed7',
        },
      },
    },
  },
  plugins: [],
}
