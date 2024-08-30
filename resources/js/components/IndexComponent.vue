<script>
    export default {
        name: "IndexComponent",

        data() {
            return {
                authentificated: false,
            }
        },

        mounted() {
            this.initAuthentificated()
            console.log(this.authentificated)
        },

        updated() {
            this.initAuthentificated()
            console.log(this.authentificated)
        },

        methods: {
            logout() {
                axios.post('/logout')
                    .then(res => {
                        localStorage.removeItem('authentificated')
                        this.$router.push({ name: 'user.login'})
                    })
            },

            initAuthentificated() {
                this.authentificated = localStorage.getItem('authentificated')
            }
        },
    }
</script>


<template>
    <div>
        This is IndexComponent<br><br>
        <router-link v-if="!authentificated" :to="{ name: 'user.registration'}" :key="$route.fullPath">Registration</router-link><br>
        <router-link v-if="!authentificated" :to="{ name: 'user.login'}" :key="$route.fullPath">Login</router-link><br>
        <router-link v-if="authentificated" :to="{ name: 'user.personal'}" :key="$route.fullPath">Personal</router-link><br>
        <router-link v-if="authentificated" :to="{ name: 'get.index'}" :key="$route.fullPath">Get</router-link><br>
        <a v-if="authentificated" href="#" @click.prevent="logout()">Logout</a><br><br>
        <router-view></router-view>
    </div>
</template>


<style scoped>

</style>
