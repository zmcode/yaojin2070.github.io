---
title: watch更新不能直接操作dom
date: 2019-07-22
---


有一个shop组件一个good组件,shop组件用来从后台中请求good需要的相应数据
可是good是shop的子组件,并且我重定向到了good,可是此时我的请求还没有回来,我的good还没有数据,此时我就想到我只能通过watch来监视我good数据

一旦我的数据发生改变了,我就调用我对应的需要实现业务逻辑的函数,可是发现这样写是没有作用的

```js
watch: {
    goods() {
        //goods数据主要为了遍历产生li,而函数主要就是求得每个li的高度
        this.getHeight()
    }
  }
```

一开始我的想法是,按道理来说我的数据已经请求回来了,不是可以进行遍历了吗,为什么打印我的li高度还是为0的,最终通过debugger终于找到原因了

原来我的data里面的数据的确是更新了,但是我的dom还没进行渲染,此时仅仅只是渲染了我的虚拟dom,vue还需要对其进行diff算法优化,所以此时我的页面压根就没有遍历出li,这个跟[生命周期](https://www.yjdzm.com/article/Vue/interview/vue%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html)有关!

<img src='/work/watch-bug.png'>

太好了,终于找到对应的根源了,那么怎么处理了,此时我们只能等我页面渲染完的时候执行我的函数了,那么我们就可以用到vm.$nextTick()

```js
watch: {
    goods() {
      this.$nextTick(function () {
        this.getHeight()
      })
    }
  }
```

它的作用就在于,我的dom更新完之后立即执行里面的回调函数,这个时候我们就可以把对应的方法放进去,最终就实现我们想要的效果了!