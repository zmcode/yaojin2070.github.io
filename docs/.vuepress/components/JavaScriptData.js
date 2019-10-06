export default {
    // 类型区分
    type: [
        {name: '常用', type: 'official'},
        {name: '移动端', type: 'mobile'},
        {name: '可视化', type: 'Visualize'},
    ],
    // 总的数据
    AllData: {
        // 官方文档
        official: [
            {
                name: 'jQuery',
                detail: 'jQuery 是一个高效、精简并且功能丰富的 JavaScript 工具库',
                src: 'https://www.jquery123.com'
            },
            {
                name: 'Howler.js',
                detail: '现代浏览器的js音频库,例如,可以将一个音频分段播放',
                src: 'https://howlerjs.com/'
            },
            {
                name: 'layui',
                detail: '经典模块化前端框架',
                src: 'https://www.layui.com/'
            },
            {
                name: 'Lodash',
                detail: '是一个一致性、模块化、高性能的 JavaScript 实用工具库, 想对某些数据进行处理,或者排序,这里或许能帮助到您哦',
                src: 'https://www.lodashjs.com/'
            },
            {
                name: 'day.js',
                detail: '日期插件,需要对日期格式进行转换,赶紧来看看吧',
                src: 'https://github.com/iamkun/dayjs/blob/HEAD/docs/zh-cn/README.zh-CN.md'
            },
            {
                name: 'axios',
                detail: '易用、简洁且高效的http库',
                src: 'http://www.axios-js.com/'
            }
        ],
        mobile: [
            {
                name: 'AUI',
                detail: '轻量级前端框架 更专注更快捷',
                src: 'http://aui.dianm.cc/'
            }
        ],
        Visualize: [
            {
                name: 'echart',
                detail: '一个使用 JavaScript 实现的开源可视化库',
                src: 'https://echarts.apache.org/zh/index.html'
            }
        ]
    }
}
