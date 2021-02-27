(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{531:function(t,s,a){"use strict";a.r(s);var n=a(27),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开启typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启typescript"}},[t._v("#")]),t._v(" 开启Typescript")]),t._v(" "),a("h2",{attrs:{id:"场景类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景类型"}},[t._v("#")]),t._v(" 场景类型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("场景一：你调用一个别人写的函数，但是很不幸 这个家伙没有留下任何注释为了搞清楚参数类型 你只能硬着头皮去看里面的逻辑")])]),t._v(" "),a("li",[a("p",[t._v("场景二：为了保证代码的健壮性 你很有责任心 对一个函数的输入参数进行各种假设 最终给老板呈上了一碗香喷喷的意大利面")])]),t._v(" "),a("li",[a("p",[t._v("场景三：领导看好你 让你维护一个重要的底层类库 你殚精竭虑 优化了一个参数类型 但是不知道有多少处引用 在提交代码前是否感到脊背发凉")])]),t._v(" "),a("li",[a("p",[t._v("场景四：明明定义好了接口 可一联调就报错了"),a("code",[t._v("TypeError: Cannot read properity 'length' of undefined")]),t._v("于是你怒气冲冲的找后端理论 嘿哥们 这个字段是数组 这个字段是数组")])])]),t._v(" "),a("p",[t._v("以上情况归根结底是因为Javascript 是一门动态弱类型语言 对变量的类型非常宽容 而且不会再这些变量和他们的调用者间建立结构化的契约")]),t._v(" "),a("h2",{attrs:{id:"typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" TypeScript")]),t._v(" "),a("p",[t._v("拥有类型系统的Javascript 的超级")]),t._v(" "),a("ul",[a("li",[t._v("类型检查")])]),t._v(" "),a("p",[t._v("TypeScript 在编译代码时会进行严格的静态类型检查，这意味着你在编码阶段 发现可能存在的隐患 而不必把他们带到线上去")]),t._v(" "),a("ul",[a("li",[t._v("语言扩展")])]),t._v(" "),a("p",[t._v("TypeScript 会包括来自ECMAScript 6 和未来提案中的特性比如异步操作和装饰器 也会从其它语言借鉴某些特性比如接口和抽象类")]),t._v(" "),a("ul",[a("li",[t._v("工具属性")])]),t._v(" "),a("p",[t._v("TypeScript 可以编写成标准的Javascript 可以在任何浏览器中运行 操作系统上运行 无需任何运行时的额外开销 从这个角度上讲TypeScript 更像是一个工具 而不是一门独立的语言")]),t._v(" "),a("h2",{attrs:{id:"强类型与弱类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强类型与弱类型"}},[t._v("#")]),t._v(" 强类型与弱类型")]),t._v(" "),a("h2",{attrs:{id:"动态类型与静态类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态类型与静态类型"}},[t._v("#")]),t._v(" 动态类型与静态类型")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("静态类型语言")]),t._v("：在编译阶段确定所有变量的类型")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("动态类型语言")]),t._v("：在执行阶段确定所有变量的类型")])]),t._v(" "),a("li",[a("p",[t._v("Javascript")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Javascript")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("C")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在程序运行时，动态计算属性偏移量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要额外的空间存储姓名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有对象的偏移量信息各存一份")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("ul",[a("li",[t._v("C++")])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("class C "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpublic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("C a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" C b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译阶段确定属性偏移量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用偏移量访问代替属性名访问")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 偏移量信息共享")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("静态类型语言")]),t._v(" "),a("th",[t._v("动态类型语言")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("对类型极度严格")]),t._v(" "),a("td",[t._v("对类型非常宽松")])]),t._v(" "),a("tr",[a("td",[t._v("立即发现错误")]),t._v(" "),a("td",[t._v("Bug 可能隐藏数月甚至数年")])]),t._v(" "),a("tr",[a("td",[t._v("运行时性能好")]),t._v(" "),a("td",[t._v("运行时性能差")])]),t._v(" "),a("tr",[a("td",[t._v("自文档化")]),t._v(" "),a("td",[t._v("可读性差")])])])]),t._v(" "),a("p",[t._v("动态类型语言的支持者认为：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("性能时可以改善的（V8引擎），而语言的灵活性更重要")])]),t._v(" "),a("li",[a("p",[t._v("隐藏的错误可以通过单元测试发现")])]),t._v(" "),a("li",[a("p",[t._v("文档可以通过工具生成")])])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s3.ax1x.com/2020/12/20/rUWznK.png",alt:"rUWznK.png"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);