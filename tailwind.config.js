/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    daisyui: {
      themes: ["autumn", "dark", "cmyk","light","bumblebee","business","luxury"],
      
     
    },
  plugins: [require("daisyui")],
}
