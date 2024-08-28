<script>
    export default {
        name: "Login",

        data() {
            return {
                email: null,
                password: null,
            }
        },

        methods: {
            login() {
                axios.get('/sanctum/csrf-cookie')
                    .then(res => {
                    axios.post('/login', { email: this.email, password: this.password })
                        .then(r => {
                            localStorage.authentificated = true
                            this.$router.push({ name: 'get.index'})
                        })
                });
            }
        }
    }
</script>


<template>
    <div>
        This is Login
        <input type="email" v-model="email" placeholder="email" class="form-control w-25 m-3">
        <input type="password" v-model="password" placeholder="password" class="form-control w-25 m-3">
        <input type="submit" @click.prevent="login" value="Login" class="btn btn-primary m-3">
    </div>
</template>


<style scoped>

</style>
