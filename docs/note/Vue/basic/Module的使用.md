---
title: Vuex(Module)的使用
date: 2019-09-29
---

:::danger 注意 
请确保你已经看过 [Vuex的使用](https://www.yjdzm.com/note/Vue/basic/Vuex%E7%9A%84%E4%BD%BF%E7%94%A8.html), 对Vuex的使用已经有基本的了解,文章的代码尤为重要
:::

在Vuex中使用module,是当项目比较大的时候,如果将所有的公用的state都存放在一个地方,就会显得很臃肿,此时将不同的功能分开成一个模块,就有module的存在了,主要思想跟模块化相似


## 文件的准备 ##
 
1. 为了让代码更加规范,我们在store文件夹中,创建一个 `modules` 文件夹,这里就是专门放置模块文件的地方

2. 在文件夹中,创建对应的js文件(这里我们以成本额和销售额简单的2个数字框来做例子,分别创建 `cost.js` 、 `sale.js`)

```js
export default {
    // 使用命名空间,避免重名的mutations会触发
    namespaced: true,
    state: {
        costNum: ''
    },
    getter: {},
    mutations: {
        setUserToken (state, token) {
            state.userToken = token
        },
        removeToken (state) {
            state.userToken = ''
        }
    },
    actions: {}
}
```

3. 在store文件夹中的 `index.js` 文件中引入 `user.js`文件
```js
import Vuex from 'vuex';
import Vue from 'vue';
import sale from './modules/sale.js'
import cost from './modules/cost.js'
Vue.use(Vuex);
export default new Vuex.Store({
    // 引入modules模块
    modules: {
        sale,
        cost
    }
})
```

**读取数据**

`this.$store.state.模块的名称.state的值`

例如案例中读取用户的token就是  `this.$store.state.user.userToken`


## namespaced的作用 ##

将我们创建的js文件暴露给外部使用,namespaced的主要作用是区分同名的 `actions`、 `getters`、 `mutations`方法,举个例子