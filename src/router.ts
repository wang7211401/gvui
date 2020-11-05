
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"

import Markdown from "./components/Markdown.vue"
import { h } from 'vue';
import intro from "./markdown/intro.md"
import getStarted from "./markdown/getStarted.md"
import install from "./markdown/install.md"

const md = (string,key) => h(Markdown, { content:string, key})

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                {
                    path: "",
                    redirect:"/doc/intro"
                },
                {
                    path: "intro",
                    component: md(intro,"1"),
                },
                {
                    path: "get-started",
                    component:md(getStarted,"2")
                },
                {
                    path: "install",
                    component:md(install,"3")
                },
                {
                    path: 'switch', 
                    component:SwitchDemo
                },
                {
                    path: 'button',
                    component:ButtonDemo
                },{
                    path: 'dialog',
                    component:DialogDemo
                },{
                    path: 'tabs',
                    component:TabsDemo
                }
            ]
        }
    ]
})

router.afterEach(() => {
    console.log("after");  
})

export default router