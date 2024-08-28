<script>
    export default {
        name: "Get",

        methods: {
            getData() {
                axios.get('/api/get')
                    .then(res => {
                        //console.log(res);
                    })
            }
        },

        mounted() {
            this.getData()
        }
    }
</script>


<template>
    <div>
        This is Get
    </div>
</template>


<style scoped>

</style>
