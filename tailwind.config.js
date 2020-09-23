const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {
      strokeWidth: {
        '1-5': '1.5'
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }) {
      const links = {
        '.link': {
          color: '#667EEA',
          textDecoration: 'underline',
          transitionProperty: 'color',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: '#68D391',
          },
        },
      }

      addComponents(links)
    })
  ],
}
