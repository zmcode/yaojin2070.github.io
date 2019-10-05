---
title: class基本使用
date: 2019-09-28
---

::: danger 注意
这篇文章将会让你了解class的基本使用,文章的代码尤为重要
:::

class是ES6提出的一种概念,通过class关键字来定义类,他其实是创建构造函数的一种语法糖,通过class来创建,使语法更加明了

让我们来创建一个类吧

```js
class Person {
  constructor (name) {
      // 给类的实例添加一个name属性
      this.name = name;
  }
  // 在prototype中添加say方法
  say () {
      console.log(this) // Person实例
      console.log('我的名字叫遥近')
  }
}


// 上面的代码其实等价于此
function Person (name) {
    this.name = name
}

Person.prototype.say = function () {
  console.log('我的名字叫遥近')
}
 
```

constructor不是必须要写的,如果您需要为实例添加属性和方法,那么就需要,但是constructor又是必须的,只要通过new来创建了实例,哪怕你没有写上,它也会默认添加constructor


