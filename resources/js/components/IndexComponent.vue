<script>
    export default {
        name: "IndexComponent",

        data() {
            return {
                authentificated: false,
            }
        },

        methods: {
            logout() {
                axios.post('/logout')
                    .then(res => {
                        localStorage.authentificated = false
                        this.$router.push({ name: 'user.login'})
                    })
            },

            initAuthentificated() {
                this.authentificated = localStorage.getItem('authentificated')
            }
        },

        mounted() {
            this.initAuthentificated()
        }
    }
</script>


<template>
    <div>
        This is IndexComponent<br><br><br><br>
        <router-link v-if="!authentificated" :to="{ name: 'user.registration'}">Registration</router-link><br><br>
        <router-link :to="{ name: 'user.login'}">Login</router-link><br><br>
        <router-link v-if="authentificated" :to="{ name: 'user.personal'}">Personal</router-link><br><br>
        <router-link v-if="authentificated" :to="{ name: 'get.index'}">Get</router-link><br><br>
        <a href="#" @click.prevent="logout()">Logout</a><br><br>
        <router-view></router-view>
    </div>
</template>


<style scoped>

</style>
