/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   screens: {
      mdxl: "1148px",
      minxl: "1148px",
      mobile: "320px",
   },

    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

