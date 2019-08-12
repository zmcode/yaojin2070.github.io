(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{254:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("闭包很多人都说闭包是一个函数,但是我的理解它是一个对象,其实您可以通过debugger在控制台中可以看到它是一个对象,它包含了被引用的局部变量")]),t._v(" "),a("p",[t._v("控制台中一个名为Closure的对象就是闭包,您可以看到它有2个属性,就是我相应的变量名(key)以及变量的值(value)")]),t._v(" "),a("img",{attrs:{src:"/article/JavaScript/Closure.png"}}),t._v(" "),a("h2",{attrs:{id:"那么闭包是如何产生的呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那么闭包是如何产生的呢","aria-hidden":"true"}},[t._v("#")]),t._v(" 那么闭包是如何产生的呢?")]),t._v(" "),a("p",[t._v("闭包的产生需要满足3个条件")]),t._v(" "),a("p",[t._v("第一个条件函数必须嵌套,也就是要产生闭包,必须最少需要有2个函数(可以看到上图中,的确是有2个函数)")]),t._v(" "),a("p",[t._v("第二个条件就是引用了我外部函数的局部变量(可以看到上图中,inner函数引用了外部函数的相应变量)")]),t._v(" "),a("p",[t._v("第三个条件就是必须调用我外部的函数")]),t._v(" "),a("h2",{attrs:{id:"闭包的作用是什么呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的作用是什么呢","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包的作用是什么呢?")]),t._v(" "),a("p",[t._v("闭包的作用主要是通过作用域链让我内部的函数可以访问到外部函数的局部变量,或者让我的全局坏境能引用到内部函数的变量(具体您可以举例给面试官听),都是为了延长我变量的生命周期,因为没有闭包的存在,我的函数执行完毕,局部变量就会给释放!")]),t._v(" "),a("h2",{attrs:{id:"闭包的弊端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包的弊端","aria-hidden":"true"}},[t._v("#")]),t._v(" 闭包的弊端")]),t._v(" "),a("p",[t._v("东西都是有利弊的,虽然闭包能延长变量的生命周期,但是我函数执行完后, 函数内的局部变量没有释放就会造成内存泄露,解决的办法是,将其设置null")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" yaojin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'遥近'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yaojin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" me"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向的对象会一直保存在堆内存中")]),t._v("\ntest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若不再使用，则让其指向的对象为空")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);