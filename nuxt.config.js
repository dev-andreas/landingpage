const axios = require('axios');
const hostname = 'https://andreasgera.de';
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Andreas G. | Webentwickler und Freelancer aus Ulm.',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description', name: 'description', content:
          `
      
      ` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error_404',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/recaptcha',
    '@nuxtjs/robots',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: hostname,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
    publicPath: '/assets/',
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    */


    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    }
  },

  publicRuntimeConfig: {
    recaptcha: {
      siteKey: process.env.RECAPTCHA_PUBLIC,
    }
  },

  privateRuntimeConfig: {

  },

  googleFonts: {
    download: false,
    families: {
      Quicksand: {
        wght: [300, 400, 500, 600, 700]
      },
    }
  },

  googleAnalytics: {
    id: 'UA-204398174-1',
  },

  sitemap: {
    hostname: hostname,
    gzip: true,

    exclude: [
      '/404',
    ],

  },

  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_PUBLIC,
    version: 3,
  },

  robots: {
    Sitemap: hostname + '/sitemap.xml'
  },

}
