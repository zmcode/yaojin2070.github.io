---
title: Vuex的使用
data: 2019-07-26
---

::: danger 注意 
这篇文章,通过一个简单的例子,详细讲解Vuex的基本使用,文章的代码块尤为重要,切记不要仅仅看文字
:::

## 安装 ##

npm
```js
npm install vuex --save
```

Yarn
```js
yarn add vuex
```

## 引入使用 ##
创建一个store.js文件,作为我的主文件
```js
// 引入vue以及vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)
```

在主入口(一般为`main.js`文件)引入store文件,并且为我的所有子组件都注册store选项,这样您就可以通过this.$store来读取store了,不需要每个组件都引入store这个文件
```js
import Vue from 'vue'
import VuexTest from './VuexTest.vue'
import store from './store'
new Vue({
  el: '#app',
  components: {
    VuexTest
  },
  template: '<VuexTest/>',
    store // 注册上vuex的store: 所有组件对象都多一个属性$store
})
```

很好,现在我们已经完成了初步的准备工作了,让我们来正式使用Vuex吧


## 复制代码 ##
在store文件中,创建store对象,这个对象,就是保存我所有的数据状态
```js
const state = {
  age: '',
  detail: ''
}
```

创建actions对象,action主要用来间接触发我的mutation更新数据
```js
const actions = {
  reqDetail ({commit, state}) {
    // 假设这个定时器就是发送了ajax请求
    setTimeout(() => {
      // 假设请求回来一个数据
      const data = '我是遥近(action间接触发mutation更新数据)'
	  // 调用commit方法,从而触发对应mutation方法
      commit('changeDetail', {data})
    })
  }
}
```

创建mutations对象,mutation是改变我数据状态的方法之一
```js
const mutations = {
  changeAge (state) {
    state.age++
  },
  changeDetail (state, {data}) {
    state.detail = data
  },
  AddDetail (state, {data}) {
    setTimeout(() => {
      state.detail = data
    })
  }
}
```

创建getters对象,getter可以从store中派生一些新的状态数据
```js
const getters = {
  getData (state) {
    return `我的年龄是 :${state.age}  + 这是我通过异步获取到的数据: ${state.detail}`
  }
}
```

创建完毕,通过默认暴露方式,暴露store实例,里面就是有我刚刚创建的相应对象
```js
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
```

在VuexTest组件中,放入相应html代码以及js代码
```html
<template>
  <div>
    <h2>异步获取数据: {{detail}}</h2>
    <h2>年龄: {{age}}</h2>
    <h2>这个是通过getters派生出来的数据: {{getData}}</h2>
    <button @click="directChangeAge">直接改变age数据</button><br>
    <button @click="addAge">commit改变age数据</button><br>
    <button @click="noAction">mutation下异步更新</button><br>
    <button @click="Action">action间接更新数据</button><br>
  </div>
</template>
```

```js
<script type="text/javascript">
export default {
  computed: {
    detail () {
      return this.$store.state.detail
    },
    age () {
      return this.$store.state.age
    },
    getData () {
      return this.$store.getters.getData
    }
  },
  methods: {
    directChangeAge () {
      // 最直接改变store数据的方式
      this.$store.state.age = 18
    },
    addAge () {
      // 通过调用store实例的commit方法来触发mutation改变数据状态
      this.$store.commit('changeAge')
    },
    noAction () {
      console.log(this)
      const data = '我是遥近(mutation下异步获取数据)'
      this.$store.commit('AddDetail', {data})
    },
    Action () {
      this.$store.dispatch('reqDetail')
    }
  }
}
</script>
```

:::danger 注意
下面是对代码进行讲解,请您结合上述代码认真阅读!
:::



## 读取数据 ##
那么既然state是用来存储数据的,那么我们应该如何获取到state里面的数据呢

这时候我们就使用到了vue的computed了,在computed中,我们可以通过`this.$store.state.(state中某个数据)`

您就可以直接读取到state中对应的数据了,并且把对应的数据添加到vue的实例对象中(computed实现的)

## 更新数据 ##
那么,我们要如何改变我的state数据呢,我们先来看下最简单的方式吧.

您可以直接通过`this.$store.state.(state中某个数据) = 您想改变的值`

这样是最简单改变我state数据的方式,可是它有一个弊端,我无法通过devTools上来观测到我状态的更新数据

<img src='/article/vue/devTools1.png'>


此时我们就可以通过commit方法来进行更新了,它可以触发对应的mutation方法来触发更新(通过commit更新数据,devTools会有相应的数据)

`this.$store.commit('changeAge')`(注意必须是同步更新数据时使用)

commit方法接受2个参数,第一个参数是对应的mutation对象当中属性,这样就会触发对应的mutation方法了,
第二个参数是您需要改变的值,mutation中的方法其实都是通过对象的简写来实现的

```js
changeAge (state) {
    state.age++
}

// 等同于
changeAge: function (state) {
	state.age++
}
```

:::danger 注意
mutation必须是同步函数,如果异步更新数据,将不能通过devTools来返回上一步数据,详情您可以看到第三个按钮,结合devTools进行查看
:::

## 异步更新数据 ##
那么我们要如何解决这个问题了,此时action就发挥它的作用了!

当我们需要异步更新数据的时候,我们就在action当中异步获取对应的数据,例如ajax请求,当我的数据请求回来之后,我在通过commit方法来触发对应的mutation更新,这样我即可以在devTools中查看对应的更新数据状态以及完成更新

通过调用`this.$store.dispatch('某个actions中的属性')`,从而触发对应的函数执行

## 通过getter派生新的状态 ##

当我们需要通过state中的数据派生出一些新的数据,例如,我需要对state中的2个数据状态进行计算或者合并成一个新的字符串,此时我们就需要使用getter来帮我们完成了

其实它跟vue的computed属性一样,具有依懒性以及缓存性,一旦我改变state中对应的数据,它也会相应的发生改变

它会对依赖的数据进行缓存,一旦数据发生变化,将会重新计算,从而改变

通过`this.$store.getters.(某个getters中的属性)` ,从而触发对应的函数执行

## Module ##

关于更多的Module的使用,请移步至












