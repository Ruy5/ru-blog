import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { start, registerMicroApps } from 'qiankun'

const vueApp = createApp(App)
vueApp.mount('#app')

const qkApps = [
    {
        name: "OpenWebUI",
        entry: "//1.12.236.243:8080/",
        container: "#container",
        activeRule: "/ollama",
        // props: {
        //     name: "OpenWebUI"
        // }
    },
]

registerMicroApps(qkApps, {
    beforeLoad: [async app => console.log("load", app.name)],
    beforeMount: [async app => console.log("mount", app.name)],
    afterMount: [async app => console.log("mount end", app.name)]
})

start()