---
title: Ant Design自定义组件样式
date: 2019-08-23
---

今天接到一个需求,是一个表单的数据展示,看了下可以引入Ant Design来进行展示,可是样式却不太相似,可是我却不可以改变全局的样式,这样就会影响到其他的同样的组件

为了解决这个问题,我们只好单一的对其进行修改,于是就有了这篇文章了,让我们按步骤进行修改吧!

我们要实现的效果是取出边框样式以及背景色

<img src="/work/React/Ant Design-before.png">

其实实现很简单,仅仅只是改变css的优先级,我们在您想改变的组件样式中,外面包裹一个div,而这个div,我们给它一个class,然后就可以随意改变的子元素的样式了,让我们定义一个less样式吧!

```less
.abnormalWrap {
  :global {
    .ant-table-thead > tr > th {
      border: none;
      background:white;
    }
    .ant-table-placeholder {
      border: none;
    }
  }
}
```

abnormalWrap 就是我的div的class

:::tip
:global是定义一个全局的css样式,在这里,您可以理解成,它仅仅只是为了更好的找到我的ant中的class,不用每一层的嵌套下去,而它里面就是您想改变的ant组件的样式
:::

引入less
`import stylus from './Listless.less'`

:::tip
最好引入的时候定义一个名称,引入的时候通过对象点的方式进行获取,这样的话,哪怕您定义了多个div,到时候一目了然,方便维护
:::



