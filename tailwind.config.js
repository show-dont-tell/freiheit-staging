module.exports = {
  purge: {
    enabled: false, // todo: only in production with "NODE_ENV" set to "production"
    content: [
      "./themes/freiheit-com/layouts/**/*.html",
      "./layouts/**/*.html",
      "./content/**/*.md",
      "./content/**/*.html"],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    corePlugins: {
      lineHeight: false,
    },
    extend: {},
    fontFamily: {
      sans: ['NB International Pro', 'sans-serif'],
      serif: ['Neue Machina', 'serif'],
    },
    fontSize: {
      'label': ['14px', {
        lineHeight: '22px',
        letterSpacing: '0.05em',
        fontFamily: 'NB International Pro',
      }],
      'body-xs': ['12px', {
        lineHeight: '15.6px',
        fontFamily: 'NB International Pro',
      }],
      'navigation': ['16px', {
        lineHeight: '20.8px',
        fontFamily: 'NB International Pro',
        fontWeight: 300,
      }],
      'body-sm': ['12px', {
        lineHeight: '15.6px',
        fontFamily: 'NB International Pro',
        fontWeight: 400,
      }],
      'body-md': ['16px', {
        lineHeight: '20.8px',
        fontFamily: 'NB International Pro',
        fontWeight: 300,
      }],
      'body-lg': ['20px', {
        lineHeight: '26px',
        fontFamily: 'NB International Pro',
        fontWeight: 300,
      }],
      'body-xl': ['28px', {
        lineHeight: '36.4px',
        fontFamily: 'NB International Pro',
        fontWeight: 300,
      }],
      'body-xxl': ['36px', {
        lineHeight: '46.8px',
        fontFamily: 'NB International Pro',
        fontWeight: 300,
      }],
      'head-xs': ['16px', {
        lineHeight: '17.6px',
        fontWeight: 700,
        fontFamily: 'Neue Machina',
      }],
      'head-sm': ['20px', {
        lineHeight: '22px',
        fontWeight: 700,
        fontFamily: 'Neue Machina',
      }],
      'head-md': ['28px', {
        lineHeight: '30.8px',
        fontWeight: 700,
        fontFamily: 'Neue Machina',
      }],
      'head-lg': ['36px', {
        lineHeight: '39.6px',
        fontWeight: 700,
        fontFamily: 'Neue Machina',
      }],
      'head-xl': ['64px', {
        lineHeight: '70.4px',
        fontWeight: 700,
        fontFamily: 'Neue Machina',
      }],
      'head-xxl': ['84px', {
        lineHeight: '92.4px',
        fontWeight: 700,
        fontFamily: 'Neue Machina',
      }],
    },
    screens: {
      'xs': '0',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
      'xxxl': '1920px',
    },
    colors: {
      'black': '#292C35',
      'light-grey': '#EAEAEA',
      'white': '#FFFFFF',
      'yellow': '#D3FF19',
      'green': '#34B255',
      'pink': '#FF19FF',
      'red': '#FF5B40',
      'pale-green': '#899C8C',
      'honeydew': '#DFEFDA',
      'alabaster': '#E6DFCA',
      'pale-purple': '#E4D1E8',
    },
    fill: theme => theme('colors'),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
