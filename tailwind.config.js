/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      'spin-slow': 'spin 8s linear infinite',
      'wiggle': 'wiggle 1s ease-in-out infinite'
    },
    extend: {
      keyframes:{
        "spin-slow": {
          "0%, 100%": { transform: 'rotate(360deg)' }
        }
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    fontFamily: {
      "fira-robot":["Roboto", "sans-serif"]
      
    }
    
  },
  plugins: [],
}

