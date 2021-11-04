module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: theme => theme('colors'),
     textColor: {
      "darkGold": '#EEBC1D'
     }
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
