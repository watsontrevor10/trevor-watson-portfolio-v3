export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "trevor-watson",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The portfolio webpage of Trevor Watson; web developer, musician, photographer.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/gld6sco.css" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // main CSS styles
    "@/assets/css/main.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vuetify: {
    customVariable: ["~/assets/main.css"],
    treeShake: true,
    theme: {
      themes: {
        light: {
          primary: "#ee7539",
          secondary: "#312d2e",
          accent: "#f9c834",
          info: "#f4bd74",
          anchor: "#312d2e",
        },
      },
    },
  },

  env: {
    DEV_PROJECTS_TYPE_ID: process.env.DEV_PROJECTS_TYPE_ID,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  },
};
