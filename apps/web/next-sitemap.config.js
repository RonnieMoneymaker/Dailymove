/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'http://localhost:3001',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: ['/admin/*'],
}


