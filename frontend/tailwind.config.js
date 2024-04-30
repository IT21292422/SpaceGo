/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm':'375px',
      'md':'768px',
      'lg':'1200px',
      'xl':'1440px',
    },
    extend: {
      colors:{
      main:'#6B3CC9',
      sub:'#6F6C90',
      black:'#171717',
      white:'#FFFFFF',
    }},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "cupcake"],
  },
}