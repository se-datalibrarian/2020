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
          borderBottom: '#667EEA',
          borderBottomStyle: 'solid',
          borderBottomWidth: '2px',
          transitionProperty: 'color, border-bottom',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: '#68D391',
            borderBottom: '#68D391',
            borderBottomStyle: 'solid'
          },
        },
      }

      addComponents(links)
    })
  ],
}
