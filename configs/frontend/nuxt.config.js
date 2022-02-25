export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'FOREST' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/darkmode.scss', 'assets/micons.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/pwa'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { materialDesignIcons: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
  ],
  /*
   ** PWA Configuration
   */
  pwa: {
    meta: {
      name: 'Forest',
      lang: 'de',
    },
    manifest: {
      name: 'Forest',
      short_name: 'Forest',
      lang: 'de',
      useWebmanifestExtension: true,
    },
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'https://api.websiteag.lol/',
    https: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(_config, _ctx) {},
  },

  router: {
    middleware: ['auth'],
  },

  auth: {
    strategies: {
      local: false,
      oauth2: {
        endpoints: {
          authorization:
            'https://auth.fffutu.re/auth/realms/FridaysForFuture/protocol/openid-connect/auth',
          token:
            'https://auth.fffutu.re/auth/realms/FridaysForFuture/protocol/openid-connect/token',
          userInfo:
            'https://auth.fffutu.re/auth/realms/FridaysForFuture/protocol/openid-connect/userinfo',
        },
        token: {
          maxAge: 600,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: 'linktree',
        scope: [],
        codeChallengeMethod: 'plain',
      },
    },
    redirect: {
      login: '/',
      callback: '/login',
    },
  },
};
