// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/output.css'],
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic"],
  prismic: {
    endpoint: "macelheronportfolio",
    clientConfig: {
      routes: [
        // Resolves the index document to "/"
        {
          type: "index",
          path: "/",
        },
      ],
    },
  }
})