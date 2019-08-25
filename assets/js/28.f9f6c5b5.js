(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{264:function(t,e,o){"use strict";o.r(e);var v=o(0),_=Object(v.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("blockquote",[o("p",[t._v("Vuex,它是一个集中式存储和管理Vue所有组件的状态,并且可以通过相应规则改变状态的插件")])]),t._v(" "),o("p",[t._v("Vuex主要包含5个属性: "),o("code",[t._v("state")]),t._v("、 "),o("code",[t._v("getter")]),t._v("、 "),o("code",[t._v("mutation")]),t._v("、 "),o("code",[t._v("action")]),t._v("、 "),o("code",[t._v("moudle")]),t._v(",它们都是对象!")]),t._v(" "),o("p",[o("code",[t._v("state")]),t._v(" : 它是专门用来存储和管理数据的,可以通过this.$store.state来读取数据")]),t._v(" "),o("p",[o("code",[t._v("getter")]),t._v(" : 您可以认为它是store的计算属性, 这样您就可以使用 "),o("a",{attrs:{href:"https://www.yjdzm.com/article/Vue/interview/computed%E5%92%8Cwatch%E7%9A%84%E5%8C%BA%E5%88%AB.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算属性"),o("OutboundLink")],1),t._v(" 一样, 通过state里的某些数据来动态的创建一个新的数据,只有当我的state中的数据发生变化,我才会相应改变,它是具有依懒性以及缓存性的,您可以通过$store.getters来触发某个getter")]),t._v(" "),o("p",[o("code",[t._v("mutation")]),t._v(" : 它是改变我state数据的唯一方法,mutation里面的属性都有一个字符串的事件类型(作为key)和一个回调函数(作为value)来进行数据的更改\n;\n"),o("code",[t._v("action")]),t._v(" : 通过它来提交mutation间接变更状态,一般用来执行一些异步操作")]),t._v(" "),o("p",[o("code",[t._v("moudle")]),t._v(" : 它的作用在于将我的store分割成模块,每个模块独自管理"),o("code",[t._v("state")]),t._v("、 "),o("code",[t._v("getter")]),t._v("、 "),o("code",[t._v("mutation")]),t._v("、 "),o("code",[t._v("action")])]),t._v(" "),o("p",[t._v("当我的组件需要更新某个数据的时候,通过调用dispatch(某个aciton) 执行异步更新操作,action通过commit方法触发我的mutation方法来对数据进行更改,数据更改完毕,通过渲染,返回给组件进行展示!")]),t._v(" "),o("p",[t._v("想知道更多 "),o("a",{attrs:{href:"https://www.yjdzm.com/note/Vue/basic/Vuex%E7%9A%84%E4%BD%BF%E7%94%A8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex的使用"),o("OutboundLink")],1),t._v(" ,这里有详细的解释!")]),t._v(" "),o("div",{staticClass:"danger custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),o("p",[t._v("mutation里面回调函数必须是同步函数,因为我们需要明确地追踪到状态的变化,这样您就可以通过devtool调试工具看到每次数据发生的详细变化了,反之则亦然!")])])])},[],!1,null,null,null);e.default=_.exports}}]);