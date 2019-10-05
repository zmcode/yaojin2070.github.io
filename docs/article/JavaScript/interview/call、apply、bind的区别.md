---
title: call、apply、bind的区别和实现
date: 2019-7-28
---

## 共同点 ##
其实都是为了改变我的this指向

## 不同点 ##

**1. 函数是否会调用**
 - call和apply都可以调用我的函数
 - 而我的bind它不会调用我的函数,它会返回一个新的函数,您必须手动的调用它

**2. 传参的不同**
 - call、bind如果函数需要传参,那么您需要依次传入对应的参数
 - apply函数传参,需要封装成数组传递

:::danger
bind必须手动调用新的函数,如果调用之前的函数this的指向是不会变的
:::

## call实现 ##
在实现之前,我们先来看下MDN中对这个方法的定义吧

>call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

**也就是我们需要实现有以下几点:**

1. 我必须是一个函数才能调用该方法,因为call是在Function.prototype中的方法
2. 不传参数或者第一个参数传 null，this 指向 window
3. 第一个参数之后的参数作为调用函数的传参接收
4. 改变函数 this 指向，返回调用函数执行结果


```js
 // 调用该方法必须是一个函数,可以看到是在Function.prototype中添加的方法
  Function.prototype.myCall = function (context) {
    // 判断我的对象是null或者没有传入对应值,如果是的话,就是指向window
    context = context || window
    // 给我的对象添加一个fn属性,fn的值就是调用该方法的函数
    context.fn = this
    // 将我的形参进行通过三点运算符进行解构,并且截取第一个参数后的参数
    const args = [...arguments].slice(1)
    // 调用我的方法, 并且把对应的参数数组进行解构作为实参调用
    const result = context.fn(...args)
    // 函数调用完毕,这个函数是放在我的对象上的,调用完毕,可以删除了
    delete context.fn
    // 返回执行结果
    return result
  }
  var name = 'yaojin'
  const obj = {
    name: '遥近'
  }
  function showName (age) {
    console.log(age)
     // 参数可以接受到输入了18
    console.log(this.name)
  }
  //普通调用该函数
  showName(18) // yaojin

  //通过myCall
  showName.myCall(obj, 18)// 遥近
}
```

## apply的实现 ##

apply的实现其实跟call一致,只是apply传参的话需要是一个数组

```js
var name = 'yaojin'

  function showName (age, money) {
    console.log(age)
    console.log(money)
    // 参数可以接受到输入了18
    console.log(this.name)
  }

  const obj = {
    name: '遥近'
  }

  Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') throw new TypeError('Error');

    context = context || window
    context.fn = this
    let result
    // 判断是否有传参, 如果有传参,读取第二个参数,它是一个数组不然就会报错
    if (arguments[1]) {
      result = context.fn(...arguments[1])
    } else {
      // 如果没有传参就正常调用该函数
      result = context.fn()
    }
    delete context.fn

    return result
  }
  showName() //this指向的是windwo 读取了 yaojin
  showName.myApply(obj, 18) // 遥近 this指向了obj
```

## bind的实现 ##
bind方法跟call和apply最大的区别就是它会返回一个函数,所以要实现返回一个函数,并且改变其this指向,而this指向分2种情况,一种是指定的,一种是,如果通过new调用的话this指向其新创建的对象
```js
Function.prototype.myBind = function(context) {
      let _this = this // 缓存调用该函数的函数
      let args = [...arguments].slice(1) // 去掉第一个传入的参数
      var fn = function () {
        let bindArgs = [...arguments] //将所有参数保存到一个数组中
        // 如果通过new调用,那么this指向我的函数,如果不是的话,this指向我传入的对象,并且传入对应的参数
        return _this.apply(this instanceof fn ? this : context, args.concat(bindArgs))
      }

      // 如果是通过new调用,需要将我新创建的对象的this的prototype指向我函数的prototype
      fn.prototype = Object.create(this.prototype)
      return fn
    }
    const name = 'yaojin'
    const obj = {
      name: '遥近'
    }
    function showName (age, address) {
      this.sex = '男'
      console.log(this.name)
      console.log(age)
      console.log(address)
    }

    showName.myBind(obj, 18)("佛山") // this指向obj, 打印遥近,并且相应的参数也可以打印

    const newFn = showName.myBind(obj, 18)

    var newObj = new newFn('佛山') // 通过new调用

    console.log(newObj.sex) // 打印男,我的新对象能继承我函数里面的属性和方法了
```








