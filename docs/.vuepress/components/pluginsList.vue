<template>
    <div class="PageWrap">
        <div class="HeadWrap">
            <b-navbar toggleable="lg" type="dark" variant="dark" vertical fixed="top">
                <b-navbar-brand href="https://www.yjdzm.com/" class="title">
                    <img :src="$site.themeConfig.logo" class="d-inline-block align-top logo" alt="Kitten">
                    遥近个人博客
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <!--<b-popover target="popover-target-1" triggers="focus" placement="top">-->
                            <!--<template v-slot:title>搜索内容</template>-->
                            <!--<b-nav vertical  small v-if="searchData.length > 0">-->
                                <!--&lt;!&ndash;<a :href="item.path"  v-for="(item, index) in searchData" :key="index">{{item.title}}</a>&ndash;&gt;-->
                                <!--<b-nav-item :to="item.path"  v-for="(item, index) in searchData" :key="index">{{item.title}}</b-nav-item>-->
                            <!--</b-nav>-->
                            <!--<strong v-else>输入文章标题进行快速搜索</strong>-->
                        <!--</b-popover>-->
                        <b-nav-item  v-for="(item, index) in NavBarData" @click="handleType(item.type)">{{item.type}}</b-nav-item>
                        <!--<b-nav-item-dropdown :text="item.text" right v-for="(item, index) in hasDrop" :key="index">-->
                            <!--<b-dropdown-item :href="drop.link" v-if="item.items" v-for="(drop, index) in item.items" :key="index">{{drop.text}}</b-dropdown-item>-->
                        <!--</b-nav-item-dropdown>-->
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <div class="PageContent">
            <div class="Tags">
                <a-tag v-for="(item, index) in data.type" @click="changeDataType(item.type)">{{item.name}}</a-tag>
            </div>
            <div>
                <b-alert
                    :show="4"
                    class="AlertStyle"
                >
                   在评论下留下您的插件, 我将会添加到对应页面上, 您的评价或许能帮助我大大提高开发效率
                </b-alert>
                <a-list
                    :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 3 }"
                    :dataSource="data.AllData[chooseType]"
                >
                    <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-card :title="item.name">
                            <a :href="item.src" slot="extra">查看</a>
                            {{item.detail}}
                        </a-card>
                    </a-list-item>
                </a-list>
            </div>
        </div>
        <Valine/>
    </div>
</template>

<script>
    import Valine from '../theme/components/Valine/index'
    import otherData from './otherData'
    import npmData from './npmData'
    import JavaScriptData from './JavaScriptData'
    import VueData from './VueData'
    import ReactData from './ReactData'
    export default {
        name: "Head",
        data () {
            return {
               NavBarData: [
                   {type: 'Vue'},
                   {type: 'React'},
                   {type: 'JavaScript'},
                   {type: '应用拓展'},
                   {type: '其他'}
               ],
                // NavType: 'Vue', // 选中的总数据类型
                data: [], // 选中的类型总数据
                chooseType: 'official', // 在总数据下选中的类型
                VueData,
                ReactData,
                JavaScriptData,
                npmData,
                otherData
            }
        },
        created() {
            this.data = this.VueData
        },
        methods: {
            handleType(type) {
                let _this = this;
                switch (type) {
                    case 'Vue':
                        _this.data = _this.VueData;
                        _this.chooseType = _this.VueData.type[0].type
                        break
                    case 'React':
                        _this.data = _this.ReactData;
                        _this.chooseType = _this.ReactData.type[0].type
                        break
                    case 'JavaScript':
                        _this.data = _this.JavaScriptData;
                        _this.chooseType = _this.JavaScriptData.type[0].type
                        break
                    case '应用拓展':
                        _this.data = _this.npmData;
                        _this.chooseType = _this.npmData.type[0].type
                        break
                    case '其他':
                        _this.data = _this.otherData;
                        _this.chooseType = _this.otherData.type[0].type
                        break
                    default:
                        _this.data = []
                }
            },
            changeDataType (type) {
                this.chooseType = type
            },
        },
        components: {
            Valine
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    .PageWrap{
        .HeadWrap{
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
        .PageContent{
            padding-top: 80px;
            .Tags {
                padding-left: 10px;
                padding-bottom: 20px;
                /deep/.ant-tag {
                    height: 30px;
                    line-height: 30px;
                    font-size: 15px;
                    margin-bottom: 5px;
                }
            }
            .AlertStyle{
                width: 30%;
                position: absolute;
                right: 0;
                top: 100px;
                z-index: 21;
                text-align: center;
            }
            /deep/.ant-row {
                width: 100%;
                margin: 0 !important;
                /deep/.ant-list-item-content {
                    transition: 0.2s;
                    &:hover {
                        box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
                    }
                }
            }
        }
    }

</style>
