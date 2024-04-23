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
      yellow:'#F7BF00',
      black:'#171717',
      white:'#FFFFFF',
      red:'#FF7C46',
      orange:"#F28D35"
    }},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "cupcake"],
  },
}