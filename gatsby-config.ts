import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `KaterinaP-Frontender`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion",
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      mode: "async",
      enableListener: true,
      preconnect: [
        `https://fonts.googleapis.com`,
        `https://fonts.gstatic.com`,
      ],
      web: [
        {
          name: `Schoolbell`,
          file: "https://fonts.googleapis.com/css2?family=Schoolbell&display=swap",
        },
      ],
    },
  },
]
};

export default config;
