/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff"
      },
      fontFamily: {
        'primary': ['StratumNo1', 'sans-serif'],
        'secondary': ['montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}