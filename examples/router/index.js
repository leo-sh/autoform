import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../pages/demo.vue'
import Demo2 from '../pages/demo2.vue'
import Demo3 from '../pages/demo3.vue'
import Remote from '../pages/remote.vue'
import Tab1 from '../pages/tab1.vue'
import Cache from '../pages/cache.vue'
import Editor from '../pages/editor.vue'
import Linshi from '../pages/linshi.vue'
import  CustomLayout  from   '../pages/customlayout'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'default',
            component: Demo
        },
        {
            path: '/demo',
            name: 'Demo',
            component: Demo
        },
        {
            path: '/demo2',
            name: 'Demo2',
            component: Demo2
        },
        {
            path: '/demo3',
            name: 'Demo3',
            component: Demo3
        },
        {
            path: '/remote',
            name: 'Remote',
            component: Remote
        },
        {
            path: '/tab1',
            name: 'Tab1',
            component: Tab1
        },
        {
            path: '/cache',
            name: 'Cache',
            component: Cache
        },
        {
            path: '/editor',
            name: 'Editor',
            component: Editor
        },
        {
            path: '/linshi',
            name: 'Linshi',
            component: Linshi
        },
        {
            path: '/customlayout',
            name: 'customlayout',
            component: CustomLayout
        }
    ]
})
