module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          600: '#8B4513',
          700: '#A0522D',
          800: '#5C4033',
        },
        beige: {
          50: '#F5F5DC',
          100: '#FAF0E6',
        },
      },
    },
  },
  plugins: [],
}