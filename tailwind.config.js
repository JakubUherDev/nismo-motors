const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
      './assets/js/main.js'
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto Condensed"', 'sans-serif']
      },
      inset: {
        '100': '100%',
      },
      backgroundImage: {
        'hero-pattern': "url('../img/hero_bg.svg')",
        'car-painting': "url('../img/car-spraying/car_painting.jpeg')",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      orange: {
        light: 'rgba(246, 173, 85, 1)',
        DEFAULT: '#ff49db',
        dark: 'rgba(221, 107, 32, 1)',
      }
    }
  },
  variants: {},
  plugins: [],
}


