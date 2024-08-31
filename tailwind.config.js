/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        
        "elite-orange": "#FF9247",
        "elite-green" : "#4EB542",
        "elite-blue" : "#012069",
        "Elite-voilet" : "#524BAD"

        
      },
    },
  },
  plugins: [],
}