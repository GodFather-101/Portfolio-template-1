/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //custom colors
      colors : {
        'ec-1' : '#51CBA7',
        'basic-dark' : '#3A4852',
        'btn-clr' : '#FF4E61',
        'custom-style' : '#32AC52',
      }
    },
    screens: {
      'md': {'min':'697px','max': '960px'},
      'sm': {'max': '696px'},
    }
  },
  plugins: [],
}

