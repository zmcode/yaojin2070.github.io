<template>
    <div>
        <myHome v-if="$page.path === '/'"/>
        <articleList v-else-if="isShowArtList"/>
        <ArticleArea v-else-if="isShowArticleArea"/>
    </div>
</template>

<script>
    import ArticleArea from '@theme/components/ArticleArea.vue'
    import myHome from '@theme/components/myHome.vue';
    import articleList from '@theme/components/articleList.vue'
    export default {
        name: "YjContent",
        mounted() {
            console.log(this.pathDetail)
            this.DropLink.hasOwnProperty(this.$page.path) ? this.isShowArtList = true : false
            for (var i in this.DropLink) {
                this.$page.path.indexOf(i) !== -1 ? this.isShowArticleArea = true : false;
            }
        },
        components: {
            myHome,
            articleList,
            ArticleArea
        },
        props:['DropLink', 'pathDetail'],
        data () {
            return {
                isShowArtList: false,
                isShowArticleArea: false
            }
        },
        watch: {
            pathDetail(value) {
                this.pathDetail = value
                for (var i in this.DropLink) {
                    this.$page.path.indexOf(i) !== -1 ? this.isShowArticleArea = true : false;
                    this.pathDetail.indexOf(i) !== -1 ? this.isShowArticleArea = true : false
                }
            }
        }
    }
</script>

<style scoped>

</style>
