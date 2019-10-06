<template>
    <div class="HeadWrap">
        <b-navbar toggleable="lg" type="dark" variant="dark" vertical fixed="top">
            <b-navbar-brand href="https://www.yjdzm.com/" class="title">
                <img :src="$site.themeConfig.logo" class="d-inline-block align-top logo" alt="Kitten">
                遥近个人博客
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="快速搜索文章" id="popover-target-1" v-model="value" @input="getSearchData" autocomplete="off"></b-form-input>
                    </b-nav-form>
                    <b-popover target="popover-target-1" triggers="focus" placement="top">
                        <template v-slot:title>搜索内容</template>
                        <b-nav vertical  small v-if="searchData.length > 0">
                            <a :href="item.path"  v-for="(item, index) in searchData" :key="index">{{item.title}}</a>
                            <!--<b-nav-item :to="item.path"  v-for="(item, index) in searchData" :key="index">{{item.title}}</b-nav-item>-->
                        </b-nav>
                        <strong v-else>输入文章标题进行快速搜索</strong>
                    </b-popover>
                    <b-nav-item :href="item.link" v-for="(item, index) in noDrop" :key="index + 'g'">{{item.text}}</b-nav-item>
                    <b-nav-item-dropdown :text="item.text" right v-for="(item, index) in hasDrop" :key="index">
                        <b-dropdown-item :href="drop.link" v-if="item.items" v-for="(drop, index) in item.items" :key="index">{{drop.text}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Head",
        data () {
            return {
                NavData: [], // 导航的所有数据
                hasDrop: [], // 有下拉的导航
                noDrop:[], // 没有下拉的导航
                value: null, // 搜索栏输入的内容,
                searchData: [], // 搜索到的数据
                AllArticleTitle: [] // 所有文章的标题数据

            }
        },
        mounted() {
            // 遍历获取导航数据
            this.NavData = this.$siteData.themeConfig.nav;
            this.FilterNav(this.NavData);
              this.$siteData.pages.forEach((item, index) => {
                let obj = {
                    title: item.title,
                    path: item.path
                };
                  this.AllArticleTitle.push(obj)
            });
        },
        methods: {
            // 过滤导航数据
            FilterNav (arr) {
                arr.forEach((item, index) => {
                    if (item.items) {
                        this.hasDrop.push(item)
                    } else {
                        this.noDrop.push(item)
                    }
                })
            },
            // 搜索内容
            getSearchData(value) {
                this.searchData = [];
                if (value && value !== null) {
                    this.AllArticleTitle.forEach((item, index) => {
                        item.title.indexOf(value) !== -1 ? this.searchData.push(item) : null
                    })
                } else {
                    this.searchData = []
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .HeadWrap{
        zoom: 1;
        &:before {
            content:"";
            height:0;
            line-height:0;
            display:block;
            visibility:hidden;
            clear:both
        }
         .bg-dark{
             box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
         }
        .title{
            font-weight: 600;
            .logo{
                margin-right: .5rem;
                width: 35px;
                height: 35px;
                border-radius: 50%;
            }
        }

    }
</style>
