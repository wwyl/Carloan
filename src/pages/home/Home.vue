<template>
    <div>
        <p class="home_page">首页</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        mounted () {
            // this.$get('/home.php',{a:"getPortalList",page:1})
            //     .then((response) => {
            //         console.log(response)
            //     })
        },
        methods: {}

    }
</script>

<style scoped lang="less">
    .home_page{
        font-size: 4rem;
    }
</style>