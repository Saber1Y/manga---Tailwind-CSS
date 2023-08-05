/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
     screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
      "2xl": "1536px",
     },
    extend: {
      colors: {
        brightRed: "hsla(12, 88%, 59%)",
        brightRedLight: "hsla(12, 88%, 69%)",
        brightredsuplight: "hsla(12, 88%, 95%)",
        darkblue: "hsla(228, 39%, 23%)",
        darkishblue: "hsla(227, 12%,, 61%)",
        verydarkblue: "hsla(223, 12%, 13%)",
        verypalered: "hsla(13, 100%, 96)",
        verylightgray: "hsla(0, 0%, 98%)",
      }
    },
  },
  plugins: [],
}

