---
title: 谈谈this 的指向
data: 2019-7-29
---

## 正常情况下,执行函数的方式,就决定了this的指向 ##
1. 直接调用
```js
var name = '遥近'
function fn (name) {
    console.log(this)
    console.log(this.name)
  }
  fn() // this指向window 输出遥近
```

2. 对象调用
```js
let obj = {
    name: 'yaojin',
    fn
  }
obj.fn() // this指向obj 输出yaojin
```

3. new调用
```js
function Person (name) {
    this.name = name
  }
  yaojin = new Person('遥近') // 构造函数的this指向yaojin
```

4. call、apply、bind调用
```js
var name = '遥近'
  let obj = {
    name: 'yaojin',
    fn
  }
  let obj1 = {
    name: 'yaojin666'
  }
  function fn (name) {
    console.log(this)
    console.log(this.name)
  }
  fn.call(obj) // 指向obj
  fn.apply(obj)// 指向obj
  const fn2 = fn.bind(obj)
  fn2()// 指向obj
```
想指向谁就在第一个参数写对应的对象即可
[call、apply、bind的区别]()


## 特殊情况下,this的指向 ##
1. 箭头函数
```js
function fn1 () {
      console.log(this.name)
      return () => {
        console.log(this.name)
      }
    }

    var name = 'yaojin'

    const obj = {
      name: '遥近'
    }

    const newFn = fn1.call(obj) // 将fn1的this指向obj
    newFn() // 返回的函数是一个箭头函数,它的this指向也是obj
```
箭头函数的this看外层的是否有函数，
如果有，外层函数的this就是内部箭头函数的this，
如果没有，则this是window。

2. 回调函数
定时器回调: this指向window
dom事件监听回调: this指向绑定事件的对应dom元素


