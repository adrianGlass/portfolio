
import vue3GoogleLogin from 'vue3-google-login'

export default defineNuxtPlugin(nuxtApp => {
    let gAuthClientId = '50485617190-gj1miqtqco7a79eku3br094vh4nf1vc9.apps.googleusercontent.com'

    nuxtApp.vueApp.use(vue3GoogleLogin, {
        clientId: gAuthClientId,
        scope: 'email',
        prompt: 'consent'
    })
})