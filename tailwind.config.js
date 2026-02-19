/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  keyframes: {
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-6px)' },
    },
    shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-6px)" },
          "40%": { transform: "translateX(6px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
  },
  animation: {
    float: 'float 6s ease-in-out infinite',
     shake: "shake 0.4s ease-in-out",
  },
  fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
},
  },
  plugins: [],
};

