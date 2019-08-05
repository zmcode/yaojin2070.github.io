---
title: better-scroll实现左右同步滑动
date: 2019-08-03
---

在我们使用vue开发的时候,如果通过插件来做移动端适配呢?

本文将基于vue-cli3.0脚手架环境下进行的适配,其他情况下不确保可以使用

如何搭建vue-cli3.0脚手架,可以移步 (官网)[https://cli.vuejs.org/zh/guide/installation.html] 

## 安装lib-flexible ##
>yarn add lib-fiexible

它的主要作用在于,让网页根据设备dpr和宽度，利用viewport和html根元素的font-size配合rem来适配不同尺寸的移动端设备

:::denger
lib-flexible内部已经将meta标签添加了,所以我们在index.html文件中无需添加,如果添加了,它会以index的为准,这样就造成了无法
:::


## 安装postcss-px2rem-exclude ##
>yarn add postcss-px2rem-exclude

在package.json内，在postcss内添加：
```js
"postcss": {  
    "plugins": {   
        "autoprefixer": {},    
        "postcss-pxtorem": {           
            "rootValue": 75, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）          
            "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部    
            }  
        }
    },
```

它的作用在于,设置1rem等于多少px,并且将我样式中写的所有px值转换为对应的rem进行显示

