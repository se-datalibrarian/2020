// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  siteName: 'Southeast Data Librarian Symposium 2020',
  siteDescription: `Website for the 2020 Southeast Data Librarian Symposium (SEDLS). The SEDLS is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.`,
  siteUrl: `https://se-datalibrarian.github.io/2020/`,
  author: `@SEDataLibrarian`,
  siteUrl: 'https://se-datalibrarian.github.io',
  pathPrefix: '/2020',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-140747515-2'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
  ]
}
