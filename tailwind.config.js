module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'SilkSerif': ['Silk Serif, ...'],
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
