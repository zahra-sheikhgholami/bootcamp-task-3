/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["vazir"]
      },
      fontSize:{
        '2xs': ['9px']
      },
      borderRadius:{
        'large': '20px'
      }
    },
  },
  plugins: [],
}

