---
title: 利用vuepress搭建个人博客
date: 2019-08-25
---

最近有人问我博客是如何搭建的,今天就出一个教程,详细的介绍博客的搭建,避免大家浪费更多的时间去看文档,这个仅仅只是基础的让您搭建起一个博客,如果您想对博客进行自定义主题的话,请您留意后续的文章!

博客使用的是 [VuePresss](https://vuepress.vuejs.org/zh/) 进行搭建的

首先我们先全局安装Vuepress吧

`yarn global add vuepress` 

`npm i -g vuepress`

在等待安装的时候,不妨给我一个star [我的github](https://github.com/yaojin2070/yaojin2070.github.io)


# 创建docs文件夹 #
在您想存放您博客的位置当中创建一个 `docs` 文件夹, 切记一定要是docs文件夹,不然就没法编译了

然后我们在这个文件夹当中创建一个mackdown文件,命名为 `README.md`

内容随便写一个标题,以便检测是否成功

# 初始化package.json #
很好,我们现在有了相关的文件夹以及文件了,我们来初始化一个package.json,以便我们可以跑起来吧

运行命令: `npm init`,然后一直回车就完事了


# 运行 #
现在各种文件都有了,让我们跑起来看看结果吧

运行命令:  `npx vuepress dev docs`

编译完成后,我们就可以在命令行窗口中查看到一个地址了,我们在浏览器中输入地址就可以看到我们的项目跑起来了

您看到的情况应该是这样的

<img src='/article/Vue/vuepress-teach1.png'>

# 创建配置文件 #

很好,我们现在已经有了初步的样子了,让我们来设置对应的配置来获得更多的功能吧

首先,我们需要在 `pageage.json` 文件的script属性中,改变它的值

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
```

然后我们在根目录中运行 `npm run docs:build`

当我们运行完毕之后,我们会发现多了一个 `.vuepress` 文件夹,里面有一个 `dist` 文件夹,这个就是打包后的文件夹了,我们部署到GitHub上就是把这个文件夹放上去的

您可以理解成 `.vuepress` 文件夹是vuepress的核心文件夹,它用来存放配置文件以及一些公用的图片等都是放到这个文件夹中的

让我们在这个文件夹中创建一个 `config.js` 文件,它就是vuepress最核心的配置文件了,里面的配置将会决定页面的展示以及部署, 关于更多config文件的配置您可以查看[配置以及默认主题](https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)了解更多,这篇文章只会教一些基本用到的配置项,让您可以搭建一个基本的博客,存放您的文章!

创建 `public` 文件夹存放图片

让我们来看下基本的一些配置信息吧,将这些信息拷贝到您的 `config.js` 文件中

```js
module.exports = {
  title: '遥近个人博客',  // 博客标题
  dest: './dist', // 打包后存放的路径,以根目录开始
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 设置网页的icon图标,将会从public文件夹中找到favicon.ico文件
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }] // 设置移动端兼容
  ],
  themeConfig: {
    nav: [ // 导航栏配置
      // 没有下拉选项的导航
      {
        text: '主页', // 您想展示的文本信息
        link: '/' // '/'默认为docs文件夹下的README.md文件

      },
      // 有下拉选项的导航
      {
        text: '我的文章',
        items: [
          { text: 'vue', link: '/note/vue/'},// 注意link的设置,这样写的话就是从docs文件夹中找到note文件夹在找到vue文件夹
          { text: 'react', link: '/note/react/'},// 注意link的设置,这样写的话就是从docs文件夹中找到note文件夹在找到react文件夹
        ]
      },
    ],
    // 侧边栏配置
    sidebar: {

      // 将会从docs文件夹中找到note文件夹在找到vue文件夹中开始寻找对应的文件
      '/note/vue/':[
        ['','介绍'], // 注意必须要有README.md文件,这样写,就会找到docs/note/vue/README.md文件
        // 单一侧边栏,没有下拉选项
        ['test1.md','vue的介绍'] // 必须以数组的形式进行设置, [link,text],link为文件路径,text为侧边栏文本,这样写,就会从docs/note/vue文件夹中,找到test1.md文件
      ],

      // 将会从docs文件夹中找到note文件夹在找到react文件夹中开始寻找对应的文件
      '/note/react/': [
          ['','介绍'], // 寻找docs/note/react/README.md文件
        // 有下拉选项的侧边栏
          {
            title: '基本教程', // 下拉侧边栏显示的文本
            children: [
              ['/note/react/basic/react如何使用', 'react如何使用'], // 找到docs/note/react/basic/react如何使用.md文件
              ['/note/react/basic/遥近666', '遥近666']
            ]
          }
      ],
      // 首页的侧边栏
      '/':[
        ['','首页'], // docs/README.md
        ['遥近2070','遥近2070'] // docs/遥近2070.md
      ]
    },
    sidebarDepth: 0, // 侧边栏显示等级,我一般设置0级
  }
}


```

:::danger
主要需要注意的是,以文件夹作为结束的路径的话,必须要有/结尾,不然会判断为一个md文件进行编译,图片必须存放到public文件夹中,如果您想首页有侧边栏,务必将配置项放到最后, 不过一般我们首页都不会写侧边栏,这里仅仅告知您注意事项,还需要注意的是,快速搜索栏,会匹配.md文件的标题栏,所以务必养成写标题的习惯,当您的文章比较多的时候,搜索栏是一个非常重要的功能
:::

让我们来看下,设置完毕之后的显示效果吧,图片比较大,您可以保存来查看

<img src='/article/Vue/vuepress-teach2.png'>


# 通过第三包美化界面 #

我们已经对基本的配置已经有基本的了解,如果您想让您的页面独特性,那么就要自己写组件,自定义主题了,这个的话我后续会介绍,今天我们来引入别人写好的第三方包来进行美化,这个也是我目前正在使用的 `vuepress-theme-reco`

首先,我们先安装,在根目录下执行:

 `npm install vuepress-theme-reco -dev--save` 

或者

`yarn add vuepress-theme-reco`

在 `config.js` 配置文件中,添加如下配置

```js
 theme: 'reco' // 表示应用第三方主题,别放在别的属性当中哦
```

删除首页的导航的侧边栏,我们设置一个不一样的首页(如果没有设置可以忽略)

修改 `docs/README.md`文件如下:

```js
---
home: true
heroImage: /head.jpg
actionText: 博客介绍
actionLink: /info
features:
- title: 个人分享
  details: 分享文章
- title: 个人博客
  details: 分享东西
- title: 留言吧
  details: 给出好的建议
---
``` 

里面的内容您可以自动设置, `heroImage`,为大图

设置完毕之后,也在 `config.js` 给 `themeConfig` 对象添加一个logo属性,值跟 `heroImage` 一样,让左上角有个logo图片,看上去更加美观

设置完毕之后如果您想更改主题的默认样式或者基于这个包进行美化,需要您从 `node_modules` 文件夹中找到 `vuepress-theme-reco` 找到对应的组件进行修改,这里就不一一介绍了

关于更多这个包的功能,您可以查看[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/home.html#%E9%BB%98%E8%AE%A4%E9%A6%96%E9%A1%B5%E9%85%8D%E7%BD%AE)

到了这里,恭喜您,基本的配置项您已经掌握了,您可以开始写您自己的文章了,一个简单的博客就这样搭建起来了!

# 部署到GitHub #

作为开发者,必须怀有分享的精神,我们这么辛苦建立的博客怎么能的单单自己看呢,必须进行分享,让我们部署到GitHub上,让更多的人看到吧

首先在 `config.js` 文件中,添加远程关联GitHub的配置

```js
repo: 'https://github.com/您的GitHub账号名/您的GitHub账号名.github.io.git',
```

在根目录,执行 `npm run docs:build` 打包生成新的dist文件夹

在GitHub上创建一个仓库,名字为 `您的GitHub账号名称.github.io`,必须要以这样的格式进行创建

创建完毕之后,我们在根目录下,关联我们的仓库

执行如下命令: `git remote add origin 仓库的地址`

关联完毕之后,在根目录下,创建一个 `.gitignore` 文件,内容为: `node_modules/` ,忽略 `node_modules`内容,避免也提交到GitHub上去,我们并不需要,而且文件非常大


配置完毕之后在根目录执行 `git add . ` 、 `git commit -m '提交的信息描述'`

先别提交内容,创建一个分支,这个分支专门用来开发的 `git checkout -b 分支名称`

在这个分区下再次刚刚的2步操作 然后提交内容 `git push origin 分支名称` 

切换到master分支 `git checkout master`

然后在从master分支下,提取gh-pages的dist文件夹 `git checkout master dist/`

在master分支下,执行提交的3步骤,这样您的仓库就有2个分支,master分支专门用来展示内容的,另外一个分支专门用来开发的

创建完毕了,让我们在地址栏输入 `https://您的GitHub名称.github.io/` 就可以看到你的博客了

如果您想有独特的域名,您可以在阿里云等平台购买一个域名,然后在您的仓库中,改变您的配置,然后在将您的域名解析的地址写成GitHub上的地址,那么也可以访问到的

到这里为止,一个属于自己的博客就创建完毕了!

:::danger
由于之前已经配置过了,可能在部署到GitHub上会存在错误的东西,如果有错误的问题,您留言,我将会在后续当中更改相关的内容
:::




















