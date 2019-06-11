import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: '富邦实业',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: 'logo.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/main.css',
    'assets/index.scss',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '@/plugins/element-ui',
      ssr: true
    }, {
      src: '@/plugins/amap',
      ssr: false
    }, {
      src: '@/plugins/distpicker',
      ssr: false
    }, {
      src: '@/plugins/vshare',
      ssr: false
    },

  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true,
    prefix: '/api/',
    credentials: true
  },
  proxy: {
    '/api/': {
      target: 'http://192.168.0.122:8888/fb/public/', //这个网站是开源的可以请求到数据的
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'assets/cyc.scss'
          ]
        }
      }
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
          rule.use.push(sassResourcesLoader)
        }
      })
    }
  }
}
