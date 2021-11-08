module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      "primary": '#2C93FC',
      "secondary": '#FBFBFB',
      "almost-black": '#504F54'
     },
     fontFamily: {
       "Roboto": ['Roboto', 'sans-serif'],
       "Montserrat": ['Montserrat', 'sans-serif']
     }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: "1280px",
        xl: "1280px",
        "2xl": "1280px"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
