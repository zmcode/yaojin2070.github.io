---
title: element ui日期限制选择范围
date: 2019-09-08
---

最近实在太忙了,抽空来写这篇文章,其实功能不难,可能大家百度就能到对应的答案,我收集起来,为了更加方便自己寻找,当然,我也希望我能通过自己的理解来表达给有需要的人,希望这篇文章在日后对您所有帮助!


# 限制选择日期的范围 #
如果我们需要对日期限制在特定的日期内,就是用户只能选择某个特定时间段的日期,我们应该如何设置呢

我们可以看到官网 日期配置项当中,有个属性 `picker-options` ,看到它的功能介绍,仅仅只是说可以让你有个快速选择日期的功能,并没有限制您的日期输入呀,可是细心发现,这个属性是一个对象,对象里面可以放一个函数,名为 `disabledDate` 这个函数,就可以限制您的日期选择, 并且它接受一个参数,这个参数就是 <span style="color: red"> 当前年份选择页,所有的日期时间 </span>

<img src='/work/Vue/ele-data1.png'>

```js
<template>
  <div class="block">
    <el-date-picker
      v-model="dateValue"
      type="date"
      :picker-options="AstrictDate"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'app',
    data() {
      return {
          dateValue: '', // 日期的值
          AstrictDate: {   // picker-options属性对应的配置对象
              disabledDate(time) { // 禁止选择日期范围的函数
                  console.log(time)
                  return time.getTime() > Date.now();
              },
          }
      }

    },

}
</script>
```




我们可以看到官网给到的例子仅仅只是针对当天的限制,那么我想自定义限制某个时间段,我该如何设置呢,这个函数好像没法接受参数啊,我怎么让我的函数可以读取到我的参数呢, 这个时候就可以想到通过 [闭包](https://www.yjdzm.com/article/JavaScript/interview/%E4%BB%80%E4%B9%88%E6%98%AF%E9%97%AD%E5%8C%85.html) 的方式获取到

通过闭包的方式可以让我们访问到我们想要的数据,那么我们应该如何设置呢? 我们可以看到配置属性最后接受的是一个对象,对象当中需要携带一个名为 `disabledDate`的函数,那么我们也可以设置一个函数,然后函数执行完之后返回一个包含 `disabledDate` 函数的对象就可以了!

1. 先将data中刚刚定义的对象,让其为空 `AstrictDate: null`
2. 在methods中设置一个函数,最终返回一个对象
```js
 methods:{
      setDateValue (timeValue) {
          let obj = Object.assign({},{ // 通过Object.assign函数可以创建一个对象,如果您想添加快速选择的相应属性设置,有可以继续增加
              disabledDate(time) {
                  return time.getTime() > timeValue;
              }
          })
          return obj // 对象创建完毕,返回
      }
    },
```
3. 在获得限制值的时候,执行该函数,我们假设在mounted的时候获得了限制的值
```js
mounted() {
      this.AstrictDate = this.setDateValue(1571846400000) // 假设我们能选择的时间不能大于2019.10.24号
    }
```

4. 如果您想限制2019-10-05 到 2019-10-24 类似这样更加小的范围,那么就让函数接受2个函数,并且修改对应return的内容

```js
methods:{
      setDateValue (startTime,endTime) {
          let obj = Object.assign({},{ // 通过Object.assign函数可以创建一个对象,如果您想添加快速选择的相应属性设置,有可以继续增加
              disabledDate(time) {
                  // console.log(1)
                  console.log(time)
                  return startTime > time.getTime() || time.getTime() > endTime
              }
          })
          return obj // 对象创建完毕,返回
      }
    },
    mounted() {
      this.AstrictDate = this.setDateValue(1570204800000, 1571846400000) 
    }

```

最终的效果:

<img src='/work/Vue/ele-data2.png'>