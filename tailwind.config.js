module.exports = {
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        '1/10': '10%',
        '8/10': '80%',
        '9/10': '90%'
      },
      borderWidth: {
        '6': '6px'
      },
      borderRadius: {
        '2.5xl': '1.25rem' 
      },
      colors: {
        'theme-light-blue': '#8ecae6',
        'theme-blue': '#219ebc',
        'theme-dark-blue': '#023047',
        'theme-yellow': '#ffb703',
        'theme-orange': '#fb8500'
      },
      animation: {
        popUp: 'popUp 300ms ease-out'
      },
      keyframes: {
        popUp: {
          '0%': { transform: 'scale(90%)', opacity: '0' },
          '100%': { transform: 'scale(100%)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}
