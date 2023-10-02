import { resolve } from 'path'
import { meta, head } from './configs/app-head'

export default defineNuxtConfig({
	devtools: {
		enabled: true
	},
  css: ["@/assets/scss/global.scss"],
  alias: {
		'@': resolve(__dirname, './'),
		'@images': resolve(__dirname, './assets'),
    '@stores': resolve(__dirname, './stores'),
    '@locales': resolve(__dirname, './locales')
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui'
  ],
  app: { 
    head: {
      charset: 'utf-8',
      ...head,
      meta: [
        ...meta,
        { name: 'google-site-verification', content: process.env.NUXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
        { name: 'msvalidate.01', content: process.env.NUXT_PUBLIC_MS_VALIDATE },
        { name: 'msvalidate.01', content: process.env.NUXT_PUBLIC_MS_VALIDATE }
      ],
      link: [
        { rel: 'text/plain', href: `${process.env.NUXT_PUBLIC_BASE_URL}/humans.txt` },
        { rel: 'text/plain', href: `${process.env.NUXT_PUBLIC_BASE_URL}/robots.txt` },
        { rel: 'application/xml', href: `${process.env.NUXT_PUBLIC_BASE_URL}/sitemap.xml` },
        { rel: 'shortcut icon', type: 'image/x-icon', href: `${process.env.NUXT_PUBLIC_BASE_URL}/favicon.ico` },
        { rel: 'icon', type: 'image/x-icon', href: `${process.env.NUXT_PUBLIC_BASE_URL}/favicon.ico` },
      ]
    }
  },
  runtimeConfig: {
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME,
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      domain: process.env.NUXT_PUBLIC_DOMAIN,
      apiRestCountries: process.env.NUXT_PUBLIC_API_REST_COUNTRIES,
      apiRestCountriesVersion: process.env.NUXT_PUBLIC_API_REST_COUNTRIES_VERSION
    }
  },
})
