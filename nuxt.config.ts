// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Crud'
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  pages: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
