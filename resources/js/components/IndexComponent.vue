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
                        console.log(111111111111111111);
                        localStorage.removeItem('authentificated')
                        this.$router.push({ name: 'user.login'})
                    })
            },

            initAuthentificated() {
                this.authentificated = localStorage.getItem('authentificated')
            }
        },

        mounted() {
            this.initAuthentificated()
            console.log(this.authentificated)
        },

        updated() {
            this.initAuthentificated()
            console.log(this.authentificated)
        }
    }
</script>


<template>
    <div>
        This is IndexComponent<br><br>
        <router-link v-if="!authentificated" :to="{ name: 'user.registration'}">Registration</router-link><br>
        <router-link :to="{ name: 'user.login'}">Login</router-link><br>
        <router-link v-if="authentificated" :to="{ name: 'user.personal'}">Personal</router-link><br>
        <router-link v-if="authentificated" :to="{ name: 'get.index'}">Get</router-link><br>
        <a v-if="authentificated" href="#" @click.prevent="logout()">Logout</a><br><br>
        <router-view></router-view>
    </div>
</template>


<style scoped>

</style>
