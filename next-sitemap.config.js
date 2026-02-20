/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nisuae.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorities = {
      "/": 1.0,
      "/about": 0.8,
      "/products": 0.9,
      "/services": 0.9,
      "/amc-rental": 0.8,
      "/contact": 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
