module.exports = {
  //...
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      screens: {
        phone: { 'min': '200px', 'max': '500px' },
        bigphone: { 'min': '500px', 'max': '640px' },
      },
    },
  },
  plugins: [],
}

