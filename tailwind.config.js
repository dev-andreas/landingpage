module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1747cf',
          800: '#0069ee',
          700: '#007cff',
          600: '#008fff',
          500: '#009fff',
          400: '#0eaeff',
          300: '#53bdff',
          200: '#8bd0ff',
          100: '#bbe2ff',
          50: '#e3f4ff',
        },
        backg: {
          light: '#fcf9f1',
          lighttrans: '#fcf9f166',
          dark: '#1f1d17',
        },
        font: {
          light: '#f6f3eb',
          dark: '#4e4b44',
        }
      },
      fontFamily: {
        body: ['Nunito'],
      },
      stroke: theme => ({
        'primary': theme('colors.primary'),
        'font': theme('colors.font'),
        'white': 'white',
      }),
      fill: theme => ({
        'primary': theme('colors.primary'),
        'font': theme('colors.font'),
        'white': 'white',
      }),
      spacing: {
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
        '156': '39rem',
        '168': '42rem',
        '180': '45rem',
        '192': '48rem',
        '204': '51rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}