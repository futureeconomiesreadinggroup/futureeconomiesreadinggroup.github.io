require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: 'Future Economies Reading Group',
    siteTitleAlt: 'Future Economies Reading Group',
    siteHeadline: 'Monthly reading group meeting in 2021',
    siteUrl: 'https://futureeconomiesreadinggroup.github.io',
    siteDescription: 'The Future Economies Reading Group is a monthly reading group meeting online to discuss alternative economic structures such as cooperatives',
    siteLanguage: 'en',
    siteImage: '/BayAreaFutureEconomiesReadingGroup.png',
    author: 'FERG',
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        feedTitle: 'Future Economies Reading Group',
        navigation: [
          {
            title: `Posts`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
