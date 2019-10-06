export default {
    // 类型区分
    type: [
        {name: '官方推荐', type: 'official'},
        {name: 'PC端', type: 'PC'},
        {name: '移动端', type: 'mobile'},
        {name: '可视化', type: 'Visualize'},
    ],
    AllData: {
        // 官方推荐
        official: [
            {
                name: 'React',
                detail: '用于构建用户界面的 JavaScript 库',
                src: 'https://react-1251415695.cos-website.ap-chengdu.myqcloud.com/'
            },
            {
                name: 'Redux',
                detail: 'Redux是JavaScript状态容器，提供可预测化的状态管理',
                src: 'https://cn.redux.js.org/'
            },
            {
                name: 'React Router',
                detail: 'React的 路由解决方案',
                src: 'http://react-guide.github.io/react-router-cn/'
            }
        ],
        PC: [
            {
                name: 'Ant Design Pro',
                detail: '开箱即用的中台前端/设计解决方案',
                src: 'https://pro.ant.design/index-cn'
            },
            {
                name: 'Ant Design',
                detail: '一个基于React开发的组件库',
                src: 'https://ant.design/index-cn'
            },
            {
                name: 'Element UI React',
                detail: 'React版本的 Element UI',
                src: 'https://elemefe.github.io/element-react/#/zh-CN/quick-start'
            },
            {
                name: '飞冰',
                detail: '搭配 GUI 工具极速构建前端应用',
                src: 'https://ice.work/'
            },
            {
                name: 'Zent',
                detail: '有赞开发的PC端React组件库',
                src: 'https://youzan.github.io/zent/zh/component/breadcrumb'
            },
        ],
        mobile: [
            {
                name: 'Pile',
                detail: '滴滴出品的 移动端 React 组件库',
                src: 'https://didi.github.io/pile.js/#/?_k=grcufs'
            },
            {
                name: 'Ant Design Mobile',
                detail: '一个基于 Preact / React / React Native 的 UI 组件库',
                src: 'https://mobile.ant.design/index-cn'
            }
        ],
        Visualize: [
            {
                name: 'BizCharts',
                detail: '在 React 项目中实现常见图表和自定义图表',
                src: 'https://bizcharts.net/index'
            }
        ]
    }
}
