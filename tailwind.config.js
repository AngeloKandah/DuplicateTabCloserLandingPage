module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tan: {
          DEFAULT: '#E6C8A1',
        },
        navGray: {
          selected: '#1c1b1b',
          DEFAULT: '#333333',
          hover: '#2b2b2b',
        },
        header: {
          DEFAULT: '#282c34',
        },
      },
      margin: {
        'container': '25vw',
      },
      zIndex: {
        100: 100,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
