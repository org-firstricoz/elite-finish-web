/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
       '3xl': '1700px',
    },
    extend: {

      fontFamily: {
        karlaRegular : ['Regular']
      },
      colors: {
        transparent: "transparent",
        
        "elite-bluelight": "#f6fbff",
        "elite-blue" : "#e7fafe",
        "elite-gray" : "#eff4f5",  
      },
    },
  },
  plugins: [],
}