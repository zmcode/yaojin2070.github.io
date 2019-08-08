---
title: betterScroll监听事件
date: 2019-08-06
---

今天开发的时候,使用betterScroll遇到了一个bug,就是监听srcoll事件,可是不触发,一直找了很久,原来是因为没有定义 `probeType`, 这样的话就会导致我的scroll事件没办法触发

```js
goodData () {
      this.$nextTick(() => {
        this.goodDataBar = new BScroll('.goodWrap', {
          click: true,
          scrollY: true,
          // bounce: false
          probeType: 2 // 如果不定义这个属性的话,就不会触发scroll事件
        })
        this.goodDataBar.on('scroll', () => {
          console.log(1231233)
          this.goodDataBar.refresh()
        })
      })
    }
```