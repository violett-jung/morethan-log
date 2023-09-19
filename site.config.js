const CONFIG = {
  // profile setting (required)
  profile: {
    name: "info-ra",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Security Engineer",
    bio: "I want to work in the roles of a Security Engineer and Security Monitoring. My interests are in System Security and Network Security.",
    email: "violett.jung@gmail.com",
    linkedin: "",
    github: "violett-jung",
    instagram: "",
  },
  projects: [
    // {
    //   name: `info-ra-log`,
    //   href: "https://info-ra-log.vercel.app",
    // },
  ],
  // blog setting (required)
  blog: {
    title: "info-ra-log",
    description: "welcome to info-ra-log!",
  },

  // CONFIG configration (required)
  link: "https://info-ra-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "violett-jung/morethan-log",
      // repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      "issue-term": "og:title",
      label: "??œŠ? Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
