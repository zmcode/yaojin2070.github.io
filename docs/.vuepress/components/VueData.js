export default {
    // 类型区分
    type: [
        {name: '官方推荐', type: 'official'},
        {name: 'PC端', type: 'PC'},
        {name: '移动端', type: 'mobile'},
        {name: '小程序', type: 'applet'},
    ],
    AllData: {
        // 官方文档
        official: [
            {
                name: 'vue',
                detail: '渐进式JavaScript框架',
                src: 'https://cn.vuejs.org/'
            },
            {
                name: 'VuePress',
                detail: 'Vue 驱动的静态网站生成器, 用来写文档最好不过的框架,还可以开发个人博客',
                src: 'https://vuepress.vuejs.org/zh/'
            },
            {
                name: 'Vue Router',
                detail: 'Vue Router 是 Vue.js 官方的路由管理器',
                src: 'https://router.vuejs.org/zh/'
            },
            {
                name: 'Vuex',
                detail: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理插件',
                src: 'https://vuex.vuejs.org/zh/'
            },
            {
                name: 'Vue CLi',
                detail: 'Vue 官方脚手架文档',
                src: 'https://cli.vuejs.org/zh/guide/'
            },
            {
                name: 'Vue I18n',
                detail: 'Vue的国际化插件,想在一个页面上,显示不同的语言,这将会帮助您',
                src: 'http://kazupon.github.io/vue-i18n/zh/'
            },
            {
                name: 'Vue Loader',
                detail: '将vue的语法装换成浏览器能识别的代码, 官方的文档',
                src: 'https://vue-loader.vuejs.org/zh/'
            }
        ],

        // PC端
        PC: [
            {
                name: 'Element UI',
                detail: '一个基于Vue开发的组件库,如果你在开发一个后台项目,这个对你非常有帮助',
                src: 'https://element.eleme.cn/2.11/#/zh-CN'
            },
            {
                name: 'Ant Design Vue',
                detail: 'Ant Design的Vue版本, 开发后台项目推荐使用',
                src: 'https://vue.ant.design/docs/vue/introduce/'
            },
            {
                name: 'iView',
                detail: '一个基于Vue的组件库, 个人觉得比Element UI成熟的组件库, 还有土豪版的pro版本',
                src:'https://www.iviewui.com/components/layout'
            },
            {
                name: 'BootstrapVue',
                detail: '基于Bootstrap 开发的 Vue版本,想在Vue中响应式的适配移动端,这个非常适合您',
                src: 'https://bootstrap-vue.js.org/'
            },
            {
                name: 'Muse-UI',
                detail: '类似于Element UI的组件库, 但是有部分适配了移动端,而且UI搭配更加好看,对视觉效果有追求的可以考虑',
                src: 'https://muse-ui.org/#/zh-CN/color'
            },
            {
                name: 'Vue UI Framework',
                detail: '一个官方的UI组件库, 有色彩的推荐, UI风格偏向于扁平颜色搭配',
                src: 'https://vuejs.github.io/ui/#/demo/button'
            },
            {
                name: 'HeyUI',
                detail: '跟Element UI 相似,只是UI风格不一样',
                src: 'https://www.heyui.top/component/plugin/search'
            },
            {
                name: 'vue-element-admin',
                detail: '一个vue的后台管理项目模板, 内置了后台基本的需求技术,国际化语言、权限验证等，这将会更快的帮助你后台项目的初始化开发',
                src: 'https://panjiachen.github.io/vue-element-admin-site/'
            },
            {
                name: 'Avue',
                detail: '一个基于vue+vuex+vue-router快速后台管理模板',
                src: 'https://avuejs.com/'
            },
            {
                name: 'Xvue-ui',
                detail: '轻量级、响应式前端框架',
                src: 'https://www.xvue.cn/'
            }
        ],

        // 移动端
        mobile: [
            {
                name: 'Mint UI',
                detail: '饿了么出品的 基于 Vue.js 的移动端组件库',
                src: 'http://mint-ui.github.io/#!/zh-cn'
            },
            {
                name: 'Vant',
                detail: '有赞出品的 轻量、可靠的移动端 Vue 组件库',
                scr: 'https://youzan.github.io/vant/#/zh-CN/intro'
            },
            {
                name: 'Cube UI',
                detail: '滴滴出品的 基于 Vue.js 实现的精致移动端组件库',
                src: 'https://didi.github.io/cube-ui/#/zh-CN'
            },
            {
                name:'Mand Mobile',
                detail: '面向金融场景设计的移动端组件库',
                src: 'https://didi.github.io/mand-mobile/#/zh-CN/docs/introduce'
            },
            {
                name: 'YDUI',
                detail: '基于 Vue 的移动端 & 微信 UI 组件库',
                src: 'http://vue.ydui.org/'
            },
            {
                name: 'VONIC',
                detail: '一个基于 vue.js 和 ionic 样式的 UI 框架，用于快速构建移动端单页应用',
                src: 'https://wangdahoo.github.io/vonic-documents/#/?id=vonic'
            }
        ],

        applet: [
            {
                name: 'mpvue',
                detail: '基于Vue开发小程序的前端框架',
                src: 'http://mpvue.com/'
            },
            {
                name: 'Taro',
                detail: '腾讯出品的解决多端的框架,一套代码应用百度、微信、支付宝等小程序应用',
                src: 'https://taro.aotu.io/'
            },
            {
                name: 'WePy',
                detail: '腾讯出品的 帮你快速开发小程序的框架',
                src: 'https://tencent.github.io/wepy/donate.html'
            }
        ]
    }
}
