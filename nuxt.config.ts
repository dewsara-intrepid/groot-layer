// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "nuxt/kit";

const { resolve } = createResolver(import.meta.url);


export default defineNuxtConfig({

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  modules: ['@pinia/nuxt'],
  ssr:false,
  alias: {
    '@layer-app': resolve('./'),
  },

})
