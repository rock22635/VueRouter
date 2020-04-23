import Vue from 'vue'
import VueRouter from 'vue-router'
//官方元件
import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'
import child1 from '@/components/pages/child1'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'
//自訂元件
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            name:'首頁', //名稱
            path:'/index', //路由
            component: Home //對應的元件
        },
        {
            name:'分頁', //名稱
            path:'/Page', //路由
            component: Page, //對應的元件
            children:[
                {
                    name:'卡片1', //名稱
                    path:'', //路由
                    component: child1 //對應的元件
                },
                {
                    name:'卡片2', //名稱
                    path:'child2', //路由
                    component: child2  //對應的元件
                },
                {
                    name:'卡片3', //名稱
                    path:'child3', //路由
                    component: child3 //對應的元件
                }
            ]
        }
    ]
})