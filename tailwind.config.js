/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7335b7', // buttons, borders, headings
        background: "#ffffff", // text on primary color, backgrounds
        secondary: "#333333", // text on background color and other things
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
        petemoss: ['Petemoss', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 0px 100px rgba(115, 53, 183, 0.7)', // Primary color shadow
      },
    },
  },
  plugins: [],
}
