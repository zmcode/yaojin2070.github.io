---
title: New关键字到底做了些什么?
date: 2019-07-23
---
1.	创建一个空的对象,这个对象就是我最终要显示的结果(设我新的对象是obj)
2.	将我新创建的对象的隐式原型指向构造函数的显示原型( obj.__proto__ === xxx.protptype )
3.	通过apply来改变我构造函数的this指向,并且将我对应的形参传入到我的构造函数中,对其进行调用,最终就会返回对应的结果了
4.	最后一点需要注意都是,返回值的问题,如果在构造函数中有返回其他对象,那么最后会返回这个对象,如果没有的话,会返回我新创建的对象,并且我构造函数中的this会指向我新创建的对象

以下是new 实现的相应代码模仿

```js
<script type="text/javascript">
    function _new() {
        //创建一个空的对象
        let target = {};
        //把我传入的实参进行展开,赋值到一个新的数组当中,这个数组的第一个就是我的构造函数,其他就是构造函数中对应的实参
        let [constructor, ...args] = [...arguments];
        //新创建的对象的隐式原型指向构造函数的显示原型,让我新创建的对象可以继承构造函数的方法和属性
        target.__proto__ = constructor.prototype;
        //调用构造函数,并且把我构造函数的this指向我的新创建的对象,传入实参,将函数的返回值,赋值到result;
        let result = constructor.apply(target, args);
        //判断我的result是否是一个对象,如果是的话就返回这个对象,不是的话我就返回我新创建的对象;
        if (result && (typeof (result) === "object" || typeof (result) === "function")) {
            return result;
        }
        return target;
    };
    //自定义的构造函数,接受2个形参
    function Person(name, age) {
        this.name = name;
        this.age = age;
    };
    //调用我创建的new方法,需要传入构造函数的名字,以及对应的2个形参
    const yaojin = _new(Person,"遥近",22);
    //最后打印输出
    console.log(yaojin.__proto__ === Person.prototype);
    console.log(yaojin);
</script>

```