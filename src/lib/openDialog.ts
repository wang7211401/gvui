import Dialog from "./Dialog.vue"
import { createApp,h } from 'vue';
export const openDialog = (options) => {
    const {title,content,ok,cancel} = options
    const div = document.createElement('div')
    document.body.appendChild(div)

    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visiable: true,
                'onUpdate:visiable': (newVisiable) => {
                    if (newVisiable === false) {
                        // @ts-ignore
                        close()
                    }
                },
                ok,
                cancel
            }, { title, content })
        }
    })
    app.mount(div)
}