<template>
    <div class="homeWrap">
        <img src="./banner.png" class="banner" @click="$bvModal.show('myInf')">
        <div class="homeTitle">
            <h2>贴近您心,想您所想</h2>
            <span>信心来自实力,实力来自勤奋</span>
        </div>
        <b-alert
            :show="4"
            class="AlertStyle"
        >
            {{`目前文章总数${this.ArticleNum}`}}
        </b-alert>
        <div class="articleRec">
            <b-card :title="item.title" v-for="(item, index) in NewArticle.slice(startNum,EndNum).slice(0, 4)">
                <a :href="item.path" class="card-link">马上查看</a>
            </b-card>
        </div>
        <div class="footer">
            <span @click="$bvModal.show('blogInf')">遥近个人博客</span>
        </div>
        <b-modal id="blogInf" size="xl" title="博客介绍" hide-footer centered>
            <p>博客创建于2019-7-20</p>
            <p>文章大多是自己在网上看的文章,然后通过自己的理解,写下来进行记录,希望对您有帮助!</p>
            <p style="color: red">如果文章存在错误的点,您可以在文章下方留下评价!</p>
            <p style="text-align: right">创建人: 遥近</p>
        </b-modal>


        <b-modal id="myInf" size="xl" title="关于我" hide-footer centered>
            <p>一个来自大自然的前端搬运工</p>
            <p>遥近这个名字来源于一份工作的艺名,改变了我,以此作为纪念</p>
            <img src="./my.png" alt="" class="myWeChat">
        </b-modal>
    </div>
</template>

<script>
    import '../styles/text.css'
    export default {
        name: "myHome",
        created() {
            this.getNum()
            // 对日期格式化
            // this.NewArticle.map((item) => {
            //     if (item.frontmatter.date.indexOf('T') !== -1) {
            //         item.frontmatter.date = item.frontmatter.date.substr(0, item.frontmatter.date.lastIndexOf('T'))
            //         item.frontmatter.date = item.frontmatter.date.replace(/-/g, ' ')
            //         item.frontmatter.date = Date.parse(item.frontmatter.date)
            //     } else {
            //         item.frontmatter.date = item.frontmatter.date.replace(/-/g, ' ')
            //         item.frontmatter.date = Date.parse(item.frontmatter.date)
            //     }
            // });
            // this.NewArticle.sort((a, b) => {
            //     return b.frontmatter.date - a.frontmatter.date
            // });
            // this.ArticleNum = this.NewArticle.length;
            // this.NewArticle.slice(0, 4)
            // console.log( this.NewArticle.slice(0, 4))
        },
        data () {
            return {
                NewArticle: [],
                ArticleNum: 0,
                startNum:'',
                EndNum: ''
            }
        },
        methods: {
            getNum() {
                let data = this.$siteData.pages;
                console.log(data)
                // 过滤没有date的数据,防止报错
                data.forEach((item) => {
                    if (item.frontmatter.date && item.frontmatter.title !== '介绍') {
                        this.NewArticle.push(item)
                    } else {}
                });
                this.ArticleNum = this.NewArticle.length;
                this.startNum = Math.floor(Math.random()*this.ArticleNum)
                this.EndNum = Math.floor(Math.random()*this.ArticleNum)
                 if (this.startNum > this.EndNum) {
                     let start = this.startNum
                     let end = this.EndNum
                     this.EndNum = start;
                     this.startNum = end;

                     
                 }
                console.log(this.startNum, this.EndNum)
            }
        }
    }
</script>

<style lang="less" scoped>
    .banner {
        position: relative;
        display: block;
        margin: 60px auto 20px;
        width: 250px;
        height: 250px;
        animation: TextAnim 1s ;
    }
    .myWeChat{
        width: 250px;
        height: 250px;
    }
    .homeWrap {
        background-color: #e9ecef;
        /*background-image: url("./slider-background.png");*/
        .homeTitle{
            text-align: center;
            h2{
                position: relative;
                padding-top:10px;
                color: black;
                font-family: "vueText" !important;
                animation: TextAnim 1s ;
            }
            span {
                position: relative;
                display: block;
                color: black;
                margin-top: 20px;
                padding-bottom: 20px;
                animation: TextAnim 1s ;
            }
        }
    }
    .articleRec{
        .card {
            width: 98%;
            margin: auto;
            margin-bottom: 10px;
            border-radius: 10px;
            transition: 0.2s;

            &:hover{
                box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
            }
        }
    }
    .footer{
        text-align: center;
        height: 40px;
        font-weight: 600;
        span{
            cursor:pointer;
        }
    }
    .AlertStyle{
        width: 10%;
        position: absolute;
        right: 0;
        top: 100px;
        text-align: center;
    }
    @keyframes TextAnim {
        from {top:100px;}
        to {top:0;}
    }
    @keyframes LogoAnim {
        from {opacity:0;}
        to {opacity:1;}
    }
</style>
