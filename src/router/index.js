import Vue from 'vue'
import VueRoter from 'vue-router'
//官方元件
import Home from '@/components/HelloWorld'
//自訂元件
Vue.use('VueRouter')

export default new VueRoter({
    routes:[
        {
            name:'首頁', //名稱
            path:'/', //路由
            component: Home //對應的元件
        }
    ]
})