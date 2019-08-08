---
title: Element UI组件引入的注意
date: 2019-08-08
---

在按需引入Element UI组件的时候,,官网给出的例子中,需要注意不是单单引入一个组件就行的,往往需要引入多个才可以生效

```js
<el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```

比如官网的这段代码当中,可能您点击`Dropdown`组件进入介绍的时候,以为仅仅只是引入该组件,然而并非如此

还需要引入`dropdown-menu`、`dropdown-item`才会生效,不然就会报错了说组件并未注册

所以以后看文档要细心得看,可能就是一个解释没有认真看就会浪费你很多时间

解决bug第一在于细心,第二在于技术!

