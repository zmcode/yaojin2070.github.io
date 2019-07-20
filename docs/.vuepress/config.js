module.exports = {
  // 设置网站标题
  title: '遥近个人博客',
  // 设置输出目录
  dest: './dist',
  //GitHub的仓库
  repo: 'https://github.com/yaojin2070/yaojin2070.github.io.git',
  //头部的相应设置,兼容移动端的设置
  head: [['link', { rel: 'icon', href: '/logo.ico' }],['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]],
  themeConfig: {
    //导航条相应的设置
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      {
        text: '基本用法',
        items: [
          { text: 'HTML&&CSS', link: '/note/html&&css/'},
          // { text: 'JavaScript', link: '/note/JavaScript/'},
          // { text: 'React', link: '/note/React' },
          // { text: 'Vue', link: '/note/Vue' },
        ]
      },
      {
        text: '我的文章',
        items: [
          // { text: 'HTML&&CSS', link: '/htmlcss/'},
          { text: 'JavaScript', link: '/article/JavaScript/'},
          // { text: 'React', link: '/share/React' },
          { text: 'Vue', link: '/article/Vue/' },
        ]
      },
    ],
    //侧边栏相应配置
    sidebar: {
      //htmlcss笔记
      '/note/html&&css/': [
        ['', '介绍'],
        {
          title: '基本用法',
          children: [
            ['/note/html&&css/basic/HelloWord','HelloWord'],
          ],
        },
        {
          title: 'demo讲解',
          children: [
            ['/note/html&&css/demo/标签综合练习','标签综合练习'],
          ]
        },
      ],
      //javascript文章
      '/article/JavaScript/': [
        ['', '介绍'],
        {
          title: '面试题',
          children: [
            ['/article/JavaScript/interview/new','New关键字到底做了些什么?'],
          ],
        },
        {
          title: '原理',
          children: [
            ['/article/JavaScript/theory/敬请期待','敬请期待'],
          ]
        },
      ],
      //vue文章
      '/article/Vue/': [
        ['', '介绍'],
        {
          title: '面试题',
          children: [
            ['/article/Vue/interview/Vue的数据代理','Vue的数据代理?'],
          ],
        },
        {
          title: '原理',
          children: [
            ['/article/Vue/theory/敬请期待','敬请期待'],
          ]
        },
      ],
      '/': [
      ]
    },
    //取消标题显示二级页面
    sidebarDepth: '0',
    //是否在每个代码块显示行号
    lineNumbers: true,
    //头部显示logo图片
    logo:'/head.jpg',
    //GitHub更新时间
    lastUpdated: 'Last Updated',
    author: '遥近',
    // valineConfig: {
    //   visitor: true
    // }
  },
  theme: 'reco',
}

