<script>
    export default {
        name: "IndexComponent",

        methods: {
            logout() {
                axios.post('/logout')
                    .then(res => {
                        this.$router.push({ name: 'user.login'})
                    })
            }
        }
    }
</script>


<template>
    <div>
        This is IndexComponent<br><br><br><br>
        <router-link :to="{ name: 'user.registration'}">registration</router-link><br><br>
        <router-link :to="{ name: 'user.login'}">login</router-link><br><br>
        <a href="#" @click.prevent="logout">Logout</a><br><br>
        <router-link :to="{ name: 'get.index'}">get</router-link><br><br>
        <router-view></router-view>
    </div>
</template>


<style scoped>

</style>
