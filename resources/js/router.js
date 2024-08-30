import * as VueRouter from "vue-router"


const router = VueRouter.createRouter({
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
        {
            path: '/personal',
            component: () => import('./components/User/Personal.vue'),
            name: 'user.personal',
        },
    ]
})

router.beforeEach((to, from, next) => {

    const authentificated = localStorage.getItem('authentificated')

    if (authentificated) {
        if ((to.name === 'user.login') || (to.name === 'user.registration')) {
            return next({ name: 'user.personal' })
        }
        else {
            next()
        }
    }
    else {
        if ((to.name === 'user.login') || (to.name === 'user.registration')) {
            return next()
        }
        else {
            return next({ name: 'user.login' })
        }
    }
    next()
})
export default router
