export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            /* <link href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap" rel="stylesheet"> */
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap&text="FranBlanco"',
            },
            // <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet">
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap',
            },
        ],
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [{ src: '~/plugins/vue-shortkey', ssr: false }],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        'nuxt-fontawesome',
    ],
    /**
     * Font Awesome!
     */
    fontawesome: {
        component: 'fa',
        imports: [
            {
                set: '@fortawesome/pro-solid-svg-icons',
                icons: ['fas'],
            },
            {
                set: '@fortawesome/pro-light-svg-icons',
                icons: ['fal'],
            },
            {
                set: '@fortawesome/pro-regular-svg-icons',
                icons: ['far'],
            },
            {
                set: '@fortawesome/pro-duotone-svg-icons',
                icons: ['fad'],
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: ['fab'],
            },
        ],
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
    pwa: {
        meta: {
            title: 'GatoBuho Assistant',
            author: 'https://github.com/Arbust908',
        },
        manifest: {
            name: 'GatoBuho Assistant',
            short_name: 'GB Assistant',
            lang: 'en',
        },
    },
}
