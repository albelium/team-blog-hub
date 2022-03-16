export const config = {
  siteMeta: {
    title: "Team Blog Hub",
    teamName: "albelium Inc.",
    description: "RSS based blog starter kit for teams.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://blog-hub.albelium.com"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GitHub",
      href: "https://github.com/albelium/team-blog-hub",
    },
  ],
};
