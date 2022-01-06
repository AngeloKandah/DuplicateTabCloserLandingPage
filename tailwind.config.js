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
        container: '25vw',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
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
