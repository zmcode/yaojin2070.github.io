---
title: name的作用
data: 2019-7-27
---


先来看下代码是怎么样的吧!
```js
export default {
  name: 'DetailList',
  props: ['list'],
  mounted () {
    console.log(this.list)
  }
}
```	

```html
<template>
  <div>
    <h2>遥近</h2>
    <div v-for="(item,index) in list" :key="index">
      <div>
        <span class="item-title-icon"></span>
      </div>
        <detail-list></detail-list>
        {{item.title}}
    </div>
  </div>
</template>
```

name属性的作用主要有3个,这篇主要介绍一种情况(递归调用组件)

我们可以从代码看到,我们设置了一个name的属性,以及通过props得到了一个list数组,然后我通过v-for来遍历我的数组

只要我们设置了name属性,那么就可以在其内部再次调用我的组件

但是需要注意的是,我是有遍历的情况,也就是在v-for里面才可以再次调用我的组件,name的属性的名字可以随便写,但是在再次调用的时候,您必须写同一样的名字才会生效

`<detail-list></detail-list>`   

`name: 'DetailList'`

您可以看到他们两个是同名的,这样的话我才可以再次调用我的组件,设置您可以设置名字为xxx

<hr>

它的第二个作用主要是为了当使用keep-alive时，可搭配组件name进行缓存过滤,设置了的话,那么它就会忽略缓存,第二次进来的时候,它会再次出发mounted钩子函数

例如:
```js
  <div id="app"> 
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
```


第三个作用,您可以在devTools中看到您设置的name名字,这样更加方便的维护!






