(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{625:function(s,t,n){"use strict";n.r(t);var a=n(66),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("今天接到一个需求,是一个表单的数据展示,看了下可以引入Ant Design来进行展示,可是样式却不太相似,可是我却不可以改变全局的样式,这样就会影响到其他的同样的组件")]),s._v(" "),n("p",[s._v("为了解决这个问题,我们只好单一的对其进行修改,于是就有了这篇文章了,让我们按步骤进行修改吧!")]),s._v(" "),n("p",[s._v("我们要实现的效果是取出边框样式以及背景色")]),s._v(" "),n("img",{attrs:{src:"/work/React/Ant Design-before.png"}}),s._v(" "),n("p",[s._v("其实实现很简单,仅仅只是改变css的优先级,我们在您想改变的组件样式中,外面包裹一个div,而这个div,我们给它一个class,然后就可以随意改变的子元素的样式了,让我们定义一个less样式吧!")]),s._v(" "),n("div",{staticClass:"language-less line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".abnormalWrap")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(":global")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ant-table-thead > tr > th")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("white"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".ant-table-placeholder")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("abnormalWrap 就是我的div的class")]),s._v(" "),n("p",[s._v(":::tip\n:global是定义一个全局的css样式,在这里,您可以理解成,它仅仅只是为了更好的找到我的ant中的class,不用每一层的嵌套下去,而它里面就是您想改变的ant组件的样式\n:::")]),s._v(" "),n("p",[s._v("引入less\n"),n("code",[s._v("import stylus from './Listless.less'")])]),s._v(" "),n("p",[s._v(":::tip\n最好引入的时候定义一个名称,引入的时候通过对象点的方式进行获取,这样的话,哪怕您定义了多个div,到时候一目了然,方便维护\n:::")])])},[],!1,null,null,null);t.default=e.exports}}]);