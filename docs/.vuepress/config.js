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
          { text: 'JavaScript', link: '/note/JavaScript/'},
          // { text: 'React', link: '/note/React' },
          { text: 'Vue', link: '/note/Vue/' },
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
      {text: '工作分享', link: '/work/'}
    ],
    //侧边栏相应配置
    sidebar: {


      //htmlcss笔记
      '/note/html&&css/': [
        ['', '介绍'],
        {
          title: '基本内容',
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


      //JavaScript笔记
      '/note/JavaScript/': [
        ['', '介绍'],
        {
          title: '基本内容',
          children: [
            ['/note/JavaScript/basic/什么是构造函数','什么是构造函数'],
            ['/note/JavaScript/basic/了解语法糖','了解语法糖']
          ],
        },
      ],


      //Vue笔记
      '/note/Vue/': [
        ['', '介绍'],
        {
          title: '基本内容',
          children: [
            ['/note/Vue/basic/Vuex的使用','Vuex的使用'],
            ['/note/Vue/basic/name的作用','name的作用']
          ],
        },
      ],


      //javascript文章
      '/article/JavaScript/': [
        ['', '介绍'],
        {
          title: '文章',
          children: [
            ['/article/JavaScript/interview/New 关键字到底做了些什么','New关键字到底做了些什么?'],
            ['/article/JavaScript/interview/什么是闭包','什么是闭包?'],
            ['/article/JavaScript/interview/谈谈原型链','谈谈原型链']
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
          title: '文章',
          children: [
            ['/article/Vue/interview/Vue的数据代理','Vue的数据代理?'],
            ['/article/Vue/interview/vue的生命周期','vue的生命周期'],
            ['/article/Vue/interview/computed和watch的区别','computed和watch的区别'],
            ['/article/Vue/interview/MVC与MVVM的区别','MVC与MVVM的区别'],
            ['/article/Vue/interview/谈谈Vuex','谈谈Vuex'],
            ['/article/Vue/interview/data必须是函数','data必须是函数'],
          ],
        },
        {
          title: '原理',
          children: [
            ['/article/Vue/theory/敬请期待','敬请期待'],
          ]
        },
      ],



      //工作文章
        '/work/': [
        ['', '介绍'],
        {
          title: 'bug',
          children: [
            ['/work/pit/watch更新不能直接操作dom','watch更新不能直接操作dom'],
          ],
        },
        {
          title: '小技巧',
          children: [
            ['/work/skill/better-scroll实现左右同步滑动','better-scroll实现左右同步滑动'],
          ]
        },
      ],



      '/': [
      ]
    },
    //取消标题显示二级页面
    sidebarDepth: '0',
    //头部显示logo图片
    logo:'/head.jpg',
    //GitHub更新时间
    lastUpdated: 'Last Updated',
    author: '遥近',
    valineConfig: {
      visitor: true,
      //评价功能
      appId: '7j1opqjclKwtzwDfYqBFtDaF-gzGzoHsz',// your appId
      appKey: 'QL7DaJxnQrvG4X5zwHOEzgeR', // your appKey
      placeholder: '在这里输入您的评论吧!'
    }
  },
  theme: 'reco',
  markdown: {
    lineNumbers: true
  }
}

