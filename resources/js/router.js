import * as VueRouter from "vue-router"


const route = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes : [
        {
            path: '/get',
            component: () => import('./components/Get.vue'),
            name: 'get.index',
        },
        {
            path: '/login',
            component: () => import('./components/User/Login.vue'),
            name: 'user.login',
        },
        {
            path: '/registration',
            component: () => import('./components/User/Registration.vue'),
            name: 'user.registration',
        },
    ]
})

export default route
