module.exports = {
  
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '1':'1',
      '-1': '-1',
      '-2':'-2',
      '-3':'-3',
      '2':'2',
      '3':'3'
    },
    borderWIDTH: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    fontFamily: {
      'fargo': ['Merriweather', 'serif'],
      'fargogreet': ['EB Garamond', 'serif']
    },
    extend: {
      transformOrigin: {
        '0': "0%",
      },
      backgroundImage: theme => ({
        'fargocool': "url('/bank.jpg')",
      }),
      lineHeight: {
        'fargosmall': '.5rem'
      },
      colors: {
        'fargo': '#962134',
        'footer': '#BBA5956E',
        'fargobrown': '#434343',
        'formcolor': '#fff7e2',
        'confirm': '#962134',
        'fargohead': '#CA2219',
        'focusbg': '#AFA5891F',
        'focustext':'#430A69FA'

      },
      width: {
        '100': '100rem',
        '120': '120rem'

      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked']
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ],
}
