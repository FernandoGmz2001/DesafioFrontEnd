/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    colors:{
      "Dark-cyan": "hsl(158, 36%, 37%)",
      "Cream": "hsl(30, 38%, 92%)",
      "Very-dark-blue": "hsl(212, 21%, 14%)",
      "Dark-grayish-blue": "hsl(228, 12%, 48%)",
      "CustomWhite": "hsl(0, 0%, 100%)",
      "CustomGreen": "#3d8168",
    },
    extend: { 
      fontFamily:{
        Montserrat :'Montserrat, sans-serif',
        Fraunces: 'Fraunces, serif',
      },
      container:{
        center:true,
      }
    },
  },
  plugins: [],
}
