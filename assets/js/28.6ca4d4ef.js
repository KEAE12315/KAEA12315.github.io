(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{294:function(t,s,a){"use strict";a.r(s);var _=a(13),v=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"first-fit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-fit"}},[t._v("#")]),t._v(" First Fit")]),t._v(" "),s("p",[t._v("该算法从空闲分区链首开始查找，直至找到一个能满足其大小要求的空闲分区为止。然后再按照作业的大小，从该分区中划出一块内存分配给请求者，余下的空闲分区仍留在空闲分区链中。")]),t._v(" "),s("ul",[s("li",[t._v("特点: 该算法倾向于使用内存中低地址部分的空闲区，在高地址部分的空闲区很少被利用，从而保留了高地址部分的大空闲区。显然为以后到达的大作业分配大的内存空间创造了条件。")]),t._v(" "),s("li",[t._v("缺点: 低地址部分不断被划分，留下许多难以利用、很小的空闲区，而每次查找又都从低地址部分开始，会增加查找的开销。")])]),t._v(" "),s("h2",{attrs:{id:"next-fit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-fit"}},[t._v("#")]),t._v(" Next Fit")]),t._v(" "),s("p",[t._v("该算法是由首次适应算法演变而成的。在为进程分配内存空间时，不再每次从链首开始查找，直至找到一个能满足要求的空闲分区，并从中划出一块来分给作业。")]),t._v(" "),s("ul",[s("li",[t._v("特点: 使内存中的空闲分区分布的更为均匀，减少了查找时的系统开销。")]),t._v(" "),s("li",[t._v("缺点: 缺乏大的空闲分区，从而导致不能装入大型作业。")])]),t._v(" "),s("h2",{attrs:{id:"best-fit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-fit"}},[t._v("#")]),t._v(" Best Fit")]),t._v(" "),s("p",[t._v("该算法总是把既能满足要求，又是最小的空闲分区分配给作业。为了加速查找，该算法要求将所有的空闲区按其大小排序后，以递增顺序形成一个空白链。这样每次找到的第一个满足要求的空闲区，必然是最优的。孤立地看，该算法似乎是最优的，但事实上并不一定。因为每次分配后剩余的空间一定是最小的，在存储器中将留下许多难以利用的小空闲区。同时每次分配后必须重新排序，这也带来了一定的开销。")]),t._v(" "),s("ul",[s("li",[t._v("特点: 每次分配给文件的都是最合适该文件大小的分区。")]),t._v(" "),s("li",[t._v("缺点: 内存中留下许多难以利用的小的空闲区。")])]),t._v(" "),s("h2",{attrs:{id:"worst-fit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worst-fit"}},[t._v("#")]),t._v(" Worst Fit")]),t._v(" "),s("p",[t._v("该算法按大小递减的顺序形成空闲区链，分配时直接从空闲区链的第一个空闲区中分配（不能满足需要则不分配）。很显然，如果第一个空闲分区不能满足，那么再没有空闲分区能满足需要。这种分配方法初看起来不太合理，但它也有很强的直观吸引力: 在大空闲区中放入程序后，剩下的空闲区常常也很大，于是还能装下一个较大的新程序。")]),t._v(" "),s("p",[t._v("最坏适应算法与最佳适应算法的排序正好相反，它的队列指针总是指向最大的空闲区，在进行分配时，总是从最大的空闲 区开始查寻。\n该算法克服了最佳适应算法留下的许多小的碎片的不足，但保留大的空闲区的可能性减小了，而且空闲区回收也和最佳适 应算法一样复杂。")]),t._v(" "),s("ul",[s("li",[t._v("特点: 给文件分配分区后剩下的空闲区不至于太小，产生碎片的几率最小，对中小型文件分配分区操作有利。")]),t._v(" "),s("li",[t._v("缺点: 使存储器中缺乏大的空闲区，对大型文件的分区分配不利。")])]),t._v(" "),s("h2",{attrs:{id:"buddy-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buddy-system"}},[t._v("#")]),t._v(" buddy system")]),t._v(" "),s("p",[t._v("伙伴分配算法将总内存设为2的n次幂，并将内存按照2的n次幂的格式进行分发。")]),t._v(" "),s("p",[t._v("需要分配内存的时：核心就是分配出不小于所需的最小2次幂大小的内存(如果需要25，就分配32；如果需要63，就分配64)，具体分配时，如果有符合的内存块，直接分配即可；如果当前的空闲块没有满足要求的，就将大块进行二等分，继续重复分配过程")]),t._v(" "),s("p",[t._v("需要释放内存时：首先将该内存块释放，然后看其相邻的块(可以进行合并的相邻块，即在分配时由一个内存块分成的两个等大内存块)是否释放，如果相邻块没有释放，则结束即可；如果相邻块释放，则将两个块合并，重复释放过程，对合并后的块进行释放。对相邻块做一个更容易实现的解释：相邻块不仅地址相邻，且二者中的低地址块的地址必须为2的整数幂。")]),t._v(" "),s("ul",[s("li",[t._v("优点是快速搜索合并（O(logN)时间复杂度）以及低外部碎片（最佳适配best-fit）")]),t._v(" "),s("li",[t._v("缺点是内部碎片，因为按2的幂划分块，如果碰上65单位大小，那么必须划分128单位大小的块。实际上存储结点信息也会占用一小部分内存，但该算法总体上来看性能还是比较优越的。")])]),t._v(" "),s("h2",{attrs:{id:"slab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slab"}},[t._v("#")]),t._v(" Slab")]),t._v(" "),s("p",[t._v("lab以内存池为思想，解决内部碎片问题，专门解决小内存问题。提供一种可分配任意大小的内存分配机制。")]),t._v(" "),s("p",[t._v("slab分配器是基于对象进行管理，将相同类型的对象归为一类，每当要申请这样一个对象时，slab分配器就从一个slab列表中分配一个这样大小的单元出去，而当要释放时，将其重新保存在该列表中，而不是直接返回给伙伴系统，从而避免内部碎片。slab分配器并不丢弃已经分配的对象，而是释放并把它们保存在内存中。slab分配对象时，会使用最近释放的对象的内存块，因此其驻留在cpu高速缓存中的概率会大大提高。")]),t._v(" "),s("p",[t._v("slab算法在buddy-system分配大内存的基础上，对小内存区域进行了有效的管理。可以解决内部碎片问题，提供一种可分配任意大小的内存分配机制，slab 分配器还支持通用对象的初始化，从而避免了为同一目的而对一个对象重复进行初始化。slab算法最大的缺点就是复杂，包括队列管理较为复杂、缓冲区管理较为复杂，以及实现起来非常复杂。")]),t._v(" "),s("blockquote",[s("p",[t._v("参考文献"),s("br"),t._v("\nhttps://blog.csdn.net/liying_1234/article/details/52053183#:~:text=%E5%9B%9B%E3%80%81%E6%9C%80%E5%9D%8F%E9%80%82%E5%BA%94%E7%AE%97%E6%B3%95,%E7%A9%BA%E9%97%B2%E5%88%86%E5%8C%BA%E8%83%BD%E6%BB%A1%E8%B6%B3%E9%9C%80%E8%A6%81%E3%80%82"),s("br"),t._v("\nhttps://blog.csdn.net/dingdingdodo/article/details/100624125")])])])}),[],!1,null,null,null);s.default=v.exports}}]);