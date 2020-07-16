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
          borderBottomWidth: '0',
          transitionProperty: 'border-bottom-width',
          transitionDuration: '150ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderBottom: '#667EEA',
            borderBottomStyle: 'solid',
            borderBottomWidth: '2px'
          },
        },
      }

      addComponents(links)
    })
  ],
}
