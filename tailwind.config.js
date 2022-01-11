module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
        title: '-25vw',
      },
      padding: {
        container: '25vw',
        navItem: '1.125rem',
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
