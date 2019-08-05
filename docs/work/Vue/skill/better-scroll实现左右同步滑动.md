---
title: better-scroll实现左右同步滑动
date: 2019-07-22
---
今天想实现右侧导航滑动的时候,我对应的左侧也会随之滑动到对应的位置,并且点击对应类目,右边就会跳转到对应的位置,也就就是说它们是相互的关系!

<img src='/work/Vue/better-scroll.png'>

想了想,大概的思想就是,提取我右边每个li的高度,一个li对应左边的一个li,它们是一一对应的,所以当我右边滑动到一定的距离,我就通过index值和滑动高度来对左边实现跳转,当然想要实现这个必须左边跟右边的数量是一一对应的!

然而有一个很好的插件,可以很好的帮助我实现我想要的效果,它就是 [better-scroll](http://ustbhuangyi.github.io/better-scroll/doc/api.html)

让我们来看看官网的介绍吧,这里简单的描述了如何进行使用

国际惯例,下包引入之后,我们就创建一个实例,接受2个参数,第一个参数接受一个包裹的元素,一般我们用选择器来写,第二个参数是一些配置

```js
let scroll = new BScroll('.wrapper',{
    scrollY: true,
    click: true
})
```
`这样就实现了一个纵向可点击的滚动效果。`

此时我们就可以通过监听我滚动过程,来实时获取我当前滚动的距离,它有一个事件, [scroll事件](http://ustbhuangyi.github.io/better-scroll/doc/events.html#scroll)

获取到了滚动距离之后,我们就可以通过scrollY值以及右侧每一项li的高度,获取li高度时候,踩了一个坑,[watch更新后不能直接操作dom](https://www.yjdzm.com/work/pit/watch%E6%9B%B4%E6%96%B0%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E6%93%8D%E4%BD%9Cdom.html)

很好,我们现在有了我们想要的数据了,我们先来实现右边滑动的时候,左边对应的更新吧,您可以参考以下代码

```js
	currentIndex() {
        const {scrollY, tops} = this //这里的scrollY是指右侧滑动的了的高度,tops放置的是右侧每个li距离包裹元素的高度
        const index = tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])
        //通过数组的findIndex方法,在tops数组中找到最接近当前scrollY值的元素下标值(fineIndex方法就是找满足条件的第一个下标值)
        if (index != this.index && this.leftScroll) {
          //把当前下标进行更新存放
          this.index = index
          //通过对应的下标在左侧包裹元素中寻找到对应的li
          const li = this.$refs.leftUl.children[index]
          //通过better-scroll 对应的 scrollToElement方法,滑动到相应的位置
          this.leftScroll.scrollToElement(li, 300)
        }
        //返回index,用于判断index值相等的时候,改变我的class样式
        return index
    }
```

点击对应类目,右边就会跳转到对应的位置, 您可以参考以下代码
```js
//当我点击左侧选项的时候,获取我的index值
      goCurrent(index) {
        // index值一一对应,获取到我右边需要滑动的距离
        const top = this.tops[index]

        // 更新我右侧应该滑动的距离
        this.scrollY = top

        // 通过better-scroll 对应的 scrollTo,滑动到相应的位置
        this.rightScroll.scrollTo(0, -top, 300)
      }
```