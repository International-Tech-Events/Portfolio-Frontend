/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // display: ['group-hover'],
      colors: {
        primary : "#04131F",
        secondary: "#60A5FA"
      }
      
    },
  },
  plugins: [],
}



