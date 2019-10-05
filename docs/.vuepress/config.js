module.exports = {
  // 设置网站标题
  title: '遥近个人博客',
  // 设置输出目录
  dest: './dist',
  //GitHub的仓库
  repo: 'https://github.com/yaojin2070/yaojin2070.github.io.git',
  //头部的相应设置,兼容移动端的设置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
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


      {
        text: '工作分享',
        items: [
          { text: 'Vue', link: '/work/Vue/'},
          { text: 'React', link: '/work/React/'},
        ]
      },
        { text: '插件汇总', link: '/collect/plugIn/', icon: 'reco-npm' },
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
            ['/note/JavaScript/basic/什么是构造函数', '什么是构造函数'],
            ['/note/JavaScript/basic/了解语法糖', '了解语法糖'],
            ['/note/JavaScript/basic/class基本使用', 'class基本使用']
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
            ['/note/Vue/basic/name的作用','name的作用'],
            ['/note/Vue/basic/Module的使用','Vuex(Module)的使用'],
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
            ['/article/JavaScript/interview/谈谈原型链','谈谈原型链'],
            ['/article/JavaScript/interview/call、apply、bind的区别','call、apply、bind的区别'],
            ['/article/JavaScript/interview/谈谈this的指向','谈谈this的指向'],
            ['/article/JavaScript/interview/防抖和节流实现','防抖和节流实现'],
            ['/article/JavaScript/interview/谈谈跨越','谈谈跨越'],
            ['/article/JavaScript/interview/作用域和作用域链','作用域和作用域链'],
            ['/article/JavaScript/interview/变量和函数的提升','变量和函数的提升'],
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
            ['/article/Vue/interview/利用vuepress搭建个人博客','利用vuepress搭建个人博客'],
          ],
        },
        {
          title: '原理',
          children: [
            ['/article/Vue/theory/敬请期待','敬请期待'],
          ]
        },
      ],



      // 工作文章
        '/work/Vue/': [
        ['', '介绍'],
        {
          title: 'bug',
          children: [
            ['/work/Vue/pit/watch更新不能直接操作dom','watch更新不能直接操作dom'],
            ['/work/Vue/pit/betterScroll监听事件','betterScroll监听事件'],
            ['/work/Vue/pit/Element UI 组件引入的注意','Element UI 组件引入的注意'],
          ],
        },
        {
          title: '小技巧',
          children: [
            ['/work/Vue/skill/better-scroll实现左右同步滑动','better-scroll实现左右同步滑动'],
            ['/work/Vue/skill/element ui 日期设置小功能','element ui 日期设置小功能'],
          ]
        },
      ],

      '/work/React/': [
        ['', '介绍'],
        {
          title: 'bug',
          children: [
            ['/work/React/pit/没有bug','没有bug'],
          ],
        },
        {
          title: '小技巧',
          children: [
            ['/work/React/skill/搜索栏查找实现','搜索栏查找实现'],
            ['/work/React/skill/一个页面多个组件','一个页面多个组件'],
            ['/work/React/skill/Ant Design自定义组件样式','Ant Design自定义组件样式']
          ]
        },
      ]
    },
    //取消标题显示二级页面
    sidebarDepth: '0',
    //头部显示logo图片
    logo:'/head.jpg',
    //GitHub更新时间
    lastUpdated: '最后更新时间',
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

