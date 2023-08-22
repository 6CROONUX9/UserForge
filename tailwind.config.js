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
    },
    extend: {
      keyframes:{
        "spin-slow": {
          "0%, 100%": { transform: 'rotate(360deg)' }
        }
      }
    },
    fontFamily: {
      "fira-robot":["Roboto", "sans-serif"]
      
    }
    
  },
  plugins: [],
}

