/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'baby-pink': '#F8BBD9',
        'baby-blue': '#87CEEB',
        'baby-yellow': '#FFF8DC',
        'baby-green': '#98FB98',
        'soft-pink': '#FFE4E1',
        'soft-blue': '#E6F3FF',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-soft': 'pulse 4s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}