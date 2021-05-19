export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  loading: {
    color: 'blue',
    height: '5px'
  },
  publicPath: 'public/',
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - DawaGaadi.com',
    title: 'Order Medicine in Muzaffarpur Online Medicine Delivery in Muzaffarpur',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Online Medicine delivery in Muzaffarpur Quick and easy way to order medicine onine in Muzaffarpur with Dawa Gaadi and get Medicine delivered at your doorstep.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'} //add for example your Google Fonts link here
    ],
    script: [
      // {hid:'aos', src:'https://bootstrapmade.com/demo/templates/FlexStart/assets/vendor/aos/aos.js'}
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/dotenv',
    'nuxt-purgecss',

  ],
  dotenv: {
    /* module options */
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
     // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    ['nuxt-cloudflare-analytics', { 
      token: '635d137c04194e0cb61f5f43e75f6c11', // Example 1a2b3v4a5er6ac7r8afd
  }],

  ],
  
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          home: 'Home',
          home_title:'Order Medicine Online in Muzaffarpur.',
          home_subtitle:'Upload Prescription/Requirment List to order & get it delivered fast.',
          h_order_call:'Order via Call',
          h_order_whatsapp:'Order via Whatsapp',
          about:'About Us',
          get_started:'Get Started',
          about_heading:'Who are we?',
          about_content:'We are Volunteer based Community delivering medicines during the COVID-19 pandemic in Muzaffarpur.',
        },
        hi: {
          welcome: 'Bienvenue',
          home: 'होम ',
          home_title:'मुजफ्फरपुर में ऑनलाइन दवा आर्डर करें.',
          home_subtitle:'दवा की पर्ची/ जरुरत की सूची अपलोड कर आर्डर करें और तुरंत डिलीवरी पाएं.',
          h_order_call:'Call के द्वारा आर्डर करें ',
          h_order_whatsapp:'Whatsapp द्वारा आर्डर करें ',
          about:'हमारे बारे में',
          about_heading:'हम कौन हैं ?',
          about_content:'हम इस Covid-19 महामारी में Volunteer द्वारा संचालित हैं, और मुजफ्फरपुर में दवा की होम डिलीवरी करते हैं. ',
          get_started:'शुरू करें',

        } 
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    API_IP: process.env.API_IP,

  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
