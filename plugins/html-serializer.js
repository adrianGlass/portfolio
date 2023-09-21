export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            richTextSerializer : {
                paragraph: ({ node, children }) => {
                    if(children.includes("{{day}}")) {
                        let day = new Date().toLocaleString('en-us', {  weekday: 'long' })
                        children = children.replace("{{day}}", `<div class="inline slot-animation">${ day }</div>`)
                    }
                    return `<div class="jm-paragraph inline">${children}</div>`
                }
            }
        }
    }
  })

