<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col
            >
                <div class="theme-container">
                    <Content/>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import '../styles/code.styl'
    import '../styles/index.styl'
    export default {
        name: "ArticleArea",
        data () {
            return {
            }
        }
    }
</script>

<style lang="less">
.theme-container{
    .content__default{
        img {
            max-width: 100%;
        }
    }
}
</style>
