/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greenPro:"#005654",
        grayPro:"#F3F4F6",
        bluePro:"#022044"
      }
    },
  },
  plugins: [],
}

