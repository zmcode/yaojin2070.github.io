<template>
    <div>
        <!--头部区域-->
        <Head/>
        <!-- 内容区域，根据导航不同，显示不同-->
        <YjContent :DropLink="DropLink"  :pathDetail="pathDetail"/>
        <valine/>
    </div>
</template>

<script>

    import valine from '../components/Valine/index.vue'
    import Head from '@theme/components/Head.vue';
    import YjContent from '@theme/components/YjContent.vue'
    export default {
        name: "Layout",
        components:{
            Head,
            YjContent,
            valine,
        },
        data () {
            return {
                DropLink: [], // 所有下拉的path
                pathDetail: ''
            }
        },
        created() {
            this.getDropPath()
        },
        methods: {
            // 获取所有下拉菜单的地址
            getDropPath () {
                this.DropLink = this.$siteData.themeConfig.sidebar
            },
            handleRoute() {
                this.pathDetail = this.$route.path;
                console.log(this.pathDetail)
                // this.DropLink = [];
            }
        },
        watch: {
            '$route': 'handleRoute',
        },
    }
</script>

<style>
    body, html {
        background-color: #e9ecef;
        font-family: "vueText" !important;
    }
</style>
