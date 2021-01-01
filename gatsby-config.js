require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: "Archish Enterprises",
    description: "Archish Enterprises Website",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
    siteKeywords: "archish enterprises, corrugated box, stretch film, strapping roll, air bubble, bopp tape, corrugated roll, best in supplier"
  },
  plugins: ["@reflexjs/gatsby-theme-base", "gatsby-plugin-sitemap"],
}
