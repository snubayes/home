module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://beta.snubayes.org/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/logo/snu/snu_ui_favicon.png", // Path is relative to the root
          siteName: "SNUBAYES", // Used in manifest.json
          shortName: "snubayes", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          entityName: "게시물",
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        }
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    // {
    //   resolve: `gatsby-source-google-calendar`,
    //   options: {
    //     calendarIds: [
    //       'abc...1234@group.calendar.google.com',
    //     ],
    //     // options to retrieve the next 10 upcoming events
    //     timeMin: (new Date()).toISOString(),
    //     maxResults: 10,
    //     singleEvents: true,
    //     orderBy: 'startTime',
    //   }
    // },
  ],
  // flags: {
  //   DEV_SSR: true,
  // },
};
