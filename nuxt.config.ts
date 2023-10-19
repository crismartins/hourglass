// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    //pages & layout transitions
    pageTransition: { 
      name: 'page', mode: 'out-in' 
    },
    layoutTransition: { 
      name: 'layout', mode: 'out-in' 
    }
  },
  //main scss
  css: ['@/assets/scss/main.scss'],
  //vite
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "@/assets/scss/variables.scss" as *;'
            }
        }
    }
  },
  devtools: { enabled: true }
})
