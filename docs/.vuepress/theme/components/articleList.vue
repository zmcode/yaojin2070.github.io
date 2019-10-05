<template>
        <div class="classifyWrap">
            <div class="classifyBtn">
                <b-button variant="light" v-for="(item, index) in articleData" @click="getArticleList(index)" class="BtnItem" active-class="BtnItemActive" :active="true">
                    {{item.title}}
                    <b-badge variant="light">{{item.children.length}}</b-badge>
                </b-button>
            </div>
            <div class="articleList">
                <b-card  v-for="(item) in FilteredList">
                    <a :href="item.regularPath" class="card-link">{{item.title}}</a>
                    <!--<b-nav-item :to="item.regularPath" class="card-link">{{item.title}}</b-nav-item>-->
                    <div>
                        <span class="articleText"><v-icon name="user" class="author"></v-icon>  遥近</span>
                        <span class="articleText"><v-icon name="clock" class="author"></v-icon>  {{item.frontmatter.date}}</span>
                    </div>
                </b-card>
            </div>
            <div class="paging">
                <b-pagination v-model="currentPage" :total-rows="articleList.length" :per-page="num" @change="changeList"></b-pagination>
            </div>
        </div>
</template>

<script>
    export default {
        name: "articleList",
        created() {
            let path = this.$page.path;
            this.articleData = this.$siteData.themeConfig.sidebar[path];
            this.articleData.shift();
        },
        data () {
            return {
                articleData: [], // 当前下拉分类文章总数据
                num: 5, // 默认每页显示数量
                currentPage: 1, // 默认显示第几页
                articleList: [], // 当前选中文章列表总数据
                FilteredList: []
            }
        },
        methods: {
            getArticleList (index) {
                this.articleList = [];
                let basicPath = this.articleData[index].children[0][0];
                basicPath =  basicPath.substr(0, basicPath.lastIndexOf('/'));
                this.$siteData.pages.forEach((item) => {
                    item.regularPath.indexOf(basicPath) !== -1 ? this.articleList.push(item) : null
                });
                this.articleList.map((item) => {
                    if (item.frontmatter.date.indexOf('T') !== -1) {
                        item.frontmatter.date = item.frontmatter.date.substr(0, item.frontmatter.date.lastIndexOf('T'))
                    } else {}
                });
                this.changeList(1);
                this.currentPage = 1;
            },
            changeList(page){
                let StartNum = (page - 1) * this.num;
                let EndNum = page * this.num;
                this.FilteredList =  this.articleList.filter((item, index) => {
                    return  StartNum <= index && index < EndNum
                });
                window.scrollTo(0,0);
            }
        },
        mounted() {
            this.getArticleList(0);
            this.changeList(1);
        }
    }
</script>

<style lang="less" scoped>
    .classifyWrap{
        padding-top: 70px;
        background-color: #e9ecef;
        .classifyBtn{
            width: 90%;
            margin: 20px auto;
            .BtnItem{
                margin-right: 10px;
            }
            .BtnItemActive{
                background-color: red;
            }
        }
        .articleList {
            .card {
                width: 90%;
                margin: auto;
                margin-bottom: 10px;
                border-radius: 10px;
                transition: 0.2s;
                animation: TextAnim 0.5s ;
                &:hover{
                    box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
                }
            }
            .card-link{
                position: relative;
                color: #424242;
                font-weight: 800;
                text-decoration: none;
                &:after{
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #424242;
                    visibility: hidden;
                    transform: scaleX(0);
                    transition: .3s ease-in-out;
                }
                &:hover:after{
                    visibility: visible;
                    transform: scaleX(1);
                }
            }
            .articleText{
                font-size: 12px;
                margin-left: 5px;
                .author{
                    width: 10px;
                    height: 10px;
                }
            }
        }
        .paging{
            width: 90%;
            margin: 0 auto;
            padding: 15px 0;
        }
    }
    @keyframes TextAnim {
        from {top:100px;}
        to {top:0;}
    }

</style>
