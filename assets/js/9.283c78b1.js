(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{275:function(a,t,s){"use strict";s.r(t);var r=s(13),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"一个苹果的表示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个苹果的表示"}},[a._v("#")]),a._v(" 一个苹果的表示")]),a._v(" "),t("p",[a._v("别误会，这并不是牛顿的苹果；而是从一开始，人们如何表示苹果的数量为1个。对物品的数量描述，催生了数字的出现。一个苹果的概念天然不可分割，尽管我们可以把它劈成两半，但是也许用劈开的苹果来说更合适，因为它离一个苹果中苹果所表示的概念--那个圆圆的，皮红叶绿的苹果--已经有所区别。对于这种不可分割的概念，数量的表示只有整数。但很快，对一堆苹果来说，它就可以被分成几分了（先假设能整分好了）。这种概念催生了")]),a._v(" "),t("h2",{attrs:{id:"基本数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本数据"}},[a._v("#")]),a._v(" 基本数据")]),a._v(" "),t("p",[a._v("整数"),t("br"),a._v("\n浮点数"),t("br"),a._v("\n有点特殊的字符与字符串")]),a._v(" "),t("h2",{attrs:{id:"data-structures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-structures"}},[a._v("#")]),a._v(" Data Structures")]),a._v(" "),t("h3",{attrs:{id:"arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arrays"}},[a._v("#")]),a._v(" Arrays")]),a._v(" "),t("h3",{attrs:{id:"linked-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linked-lists"}},[a._v("#")]),a._v(" Linked Lists")]),a._v(" "),t("h3",{attrs:{id:"stacks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stacks"}},[a._v("#")]),a._v(" Stacks")]),a._v(" "),t("h3",{attrs:{id:"queues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#queues"}},[a._v("#")]),a._v(" Queues")]),a._v(" "),t("h3",{attrs:{id:"hash-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash-tables"}},[a._v("#")]),a._v(" Hash Tables")]),a._v(" "),t("p",[a._v("新的问题, 假设我们需要存一下学生的身份证号和名字, 该怎么用数组来做呢? 身份证是唯一的, 每个人都不一样, 但名字有可能相同. 当然可以用一个二维数组, 但问题是, 唯一的下标索引对应唯一的身份证号, 如果能用身份证号做索引就好了. 但数组在内存中是连续的, 身份证号却不一定连续, 做下标会让空间浪费, 而且我们也很难确定该要多少内存空间.")]),a._v(" "),t("p",[a._v("现在再回忆一下, 因为身份证号唯一, 我们希望能直接通过身份证号代替下标索引找到内存地址存取姓名, 但数组本身的设计却很难完成这一点. 抽象一下就是, 一组数据, 有唯一的关键词key, 对应相应的value. 那么, 如何有效地存取一组key-vaule键值对?")]),a._v(" "),t("p",[a._v("注意, 这里有四个关键词:")]),a._v(" "),t("ul",[t("li",[a._v("key-value键值对")]),a._v(" "),t("li",[a._v("一组")]),a._v(" "),t("li",[a._v("存")]),a._v(" "),t("li",[a._v("取")])]),a._v(" "),t("p",[a._v("现在, 我们有一个key, 有一个对应的value. 我们想通过key直接定位到存储位置. 如果能有一个函数f(), 对唯一的key有唯一的f(k)值, 那么我们把这个唯一的f(k)值作为存储地址, 那么下次无论是查询还是存储, 只要知道k, 再通过f(k)计算出存储地址, 不就可以了吗. 确实如此, 我们已经基本搞清了原理, 但还有一些小问题需要解决.")]),a._v(" "),t("ul",[t("li",[a._v("如果f(k)的值域是无穷")]),a._v(" "),t("li",[a._v("在有限域上,")])]),a._v(" "),t("p",[a._v("基本概念")]),a._v(" "),t("ul",[t("li",[a._v("key")]),a._v(" "),t("li",[a._v("value")]),a._v(" "),t("li",[a._v("Hash function")]),a._v(" "),t("li",[a._v("散列表")]),a._v(" "),t("li",[a._v("Collision")])]),a._v(" "),t("h4",{attrs:{id:"java中的hash-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java中的hash-table"}},[a._v("#")]),a._v(" Java中的Hash Table")]),a._v(" "),t("p",[a._v("在Java中, 用Map表示键值对的数据结构, 但Map并不指定用什么方式存储键值对. 实际上, Map只是一个接口. 其中HashMap以hash table的方式实现对键值对的存储, 是Map接口的一个实现类.")]),a._v(" "),t("h3",{attrs:{id:"trees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trees"}},[a._v("#")]),a._v(" Trees")]),a._v(" "),t("p",[a._v("Tree traversal")]),a._v(" "),t("ul",[t("li",[a._v("Depth-first search\n"),t("ul",[t("li",[a._v("Pre-order, NLR")]),a._v(" "),t("li",[a._v("Post-order, LRN")]),a._v(" "),t("li",[a._v("In-order, LNR")])])]),a._v(" "),t("li",[a._v("Breadth-first search")])]),a._v(" "),t("h3",{attrs:{id:"graphs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#graphs"}},[a._v("#")]),a._v(" Graphs")]),a._v(" "),t("blockquote",[t("p",[a._v("参考资料"),t("br"),a._v("\nhttps://segmentfault.com/a/1190000015796727"),t("br"),a._v("\nhttps://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E8%A1%A8"),t("br"),a._v("\nhttps://segmentfault.com/a/1190000015796727\nhttps://stackoverflow.com/questions/10901752/what-is-the-significance-of-load-factor-in-hashmap"),t("br"),a._v("\nhttps://zh.wikipedia.org/wiki/%E6%A0%91%E7%9A%84%E9%81%8D%E5%8E%86#:~:text=%E5%9C%A8%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6%E8%A3%A1%EF%BC%8C%E6%A0%91,%E9%A1%BA%E5%BA%8F%E6%98%AF%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84%E3%80%82")])])])}),[],!1,null,null,null);t.default=e.exports}}]);