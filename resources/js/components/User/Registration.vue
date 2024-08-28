<script>
    export default {
        name: "Registration",

        data() {
            return {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }
        },

        methods: {
            store() {
                axios.get('/sanctum/csrf-cookie')
                    .then(response => {
                        axios.post('/register', {
                            name: this.name,
                            email: this.email,
                            password: this.password,
                            password_confirmation: this.password_confirmation
                        })
                        .then(res => {
                            console.log(res);
                        })
                    })
            }
        }
    }
</script>


<template>
    <div>
        This is Registration<br><br><br>
        <input type="text" v-model="name" placeholder="name" class="form-control w-25 m-3">
        <input type="email" v-model="email" placeholder="email" class="form-control w-25 m-3">
        <input type="password" v-model="password" placeholder="password" class="form-control w-25 m-3">
        <input type="password" v-model="password_confirmation" placeholder="repeat password" class="form-control w-25 m-3">
        <input type="submit" @click.prevent="store" value="Add" class="btn btn-primary m-3">
    </div>
</template>


<style scoped>

</style>
