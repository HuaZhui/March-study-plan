/* ═══════════════════════════════════════════
   游戏数据：5 大区域 × 30 关 = 前端完整路径
   与「三个月速成」W1读码 + W2 H5 目标对齐
   ═══════════════════════════════════════════ */
const REGIONS = [
  {
    id: "html", icon: "📄", name: "HTML 结构森林",
    desc: "标签、语义化、表单 — 网页的骨架",
    planMap: "W1 D3-D4 · H5目标·读结构",
    levels: [
      { id:"h1", name:"标签入门", enemy:"🪲", bug:"乱码小虫",
        lesson:"HTML 用<strong>标签</strong>描述内容。每个标签有开始和结束：<code>&lt;p&gt;文字&lt;/p&gt;</code>。浏览器读到标签就知道怎么显示。",
        questions:[
          { q:"哪个标签表示段落？", code:"", opts:["<div>","<p>","<span>","<section>"], ans:1, exp:"<p> = paragraph 段落。" },
          { q:"`<h1>` 通常用于？", code:"", opts:["最小标题","页面主标题","加粗文字","隐藏内容"], ans:1, exp:"h1-h6 六级标题，h1 最大最重要。" },
          { q:"下面哪个写法正确？", code:"<p>你好</p>", opts:["<p>你好","<p>你好<p>","<p>你好</p>","p>你好</p>"], ans:2, exp:"标签必须成对闭合。" }
        ]},
      { id:"h2", name:"链接与图片", enemy:"🕷️", bug:"断链蜘蛛",
        lesson:"<code>&lt;a href=\"url\"&gt;</code> 做超链接；<code>&lt;img src=\"路径\" alt=\"描述\"&gt;</code> 插入图片。alt 在图片加载失败时显示。",
        questions:[
          { q:"点击跳转到百度，正确写法？", code:"", opts:['<a src="https://baidu.com">','<link href="https://baidu.com">','<a href="https://baidu.com">百度</a>','<url>https://baidu.com</url>'], ans:2, exp:"a 标签 + href 属性。" },
          { q:"img 标签哪个属性是必填的（规范要求）？", code:"", opts:["width","alt","class","id"], ans:1, exp:"alt 提供替代文字，利于无障碍和 SEO。" },
          { q:"在新标签页打开链接？", code:"", opts:['target="_self"','target="_blank"','open="new"','tab="new"'], ans:1, exp:"target=\"_blank\" 新窗口打开。" }
        ]},
      { id:"h3", name:"列表与表格", enemy:"🐜", bug:"排列蚂蚁",
        lesson:"无序列表 <code>&lt;ul&gt;&lt;li&gt;</code>，有序列表 <code>&lt;ol&gt;&lt;li&gt;</code>。表格用 <code>&lt;table&gt;&lt;tr&gt;&lt;td&gt;</code>。",
        questions:[
          { q:"无序列表的正确结构？", code:"", opts:["<list><item>","<ul><li>","<ol><div>","<dl><dt>"], ans:1, exp:"ul = unordered list, li = list item。" },
          { q:"表格一行用什么标签？", code:"", opts:["<td>","<tr>","<th>","<row>"], ans:1, exp:"tr = table row 表格行。" },
          { q:"`<ol>` 和 `<ul>` 的区别？", code:"", opts:["没区别","ol有序带编号","ul更大","ol只能放图片"], ans:1, exp:"ol 自动编号 1,2,3…" }
        ]},
      { id:"h4", name:"表单元素", enemy:"🦗", bug:"表单蝗虫",
        lesson:"<code>&lt;form&gt;</code> 收集用户输入。<code>&lt;input&gt;</code> 单行，<code>&lt;textarea&gt;</code> 多行，<code>&lt;button&gt;</code> 按钮，<code>&lt;select&gt;</code> 下拉。",
        questions:[
          { q:"密码输入框 type 值？", code:'<input type="___" />', opts:["text","password","hidden","secret"], ans:1, exp:"type=\"password\" 会隐藏输入。" },
          { q:"提交表单按钮？", code:"", opts:['<input type="submit">','<submit>','<form-button>','<go>'], ans:0, exp:"input type=\"submit\" 或 button type=\"submit\"。" },
          { q:"placeholder 的作用？", code:"", opts:["设置默认值","输入框内的灰色提示","表单名称","验证规则"], ans:1, exp:"placeholder 是占位提示，不是真实值。" }
        ]},
      { id:"h5", name:"语义化标签", enemy:"🐉", bug:"语义之龙", boss:true,
        lesson:"语义化让代码<strong>可读、SEO 友好</strong>：<code>header</code> 页头、<code>nav</code> 导航、<code>main</code> 主体、<code>footer</code> 页脚、<code>article</code> 文章、<code>section</code> 区块。",
        questions:[
          { q:"导航链接区域最适合？", code:"", opts:["<div class=\"nav\">","<nav>","<header>","<menu>"], ans:1, exp:"<nav> 专用于导航。" },
          { q:"页面唯一主内容区？", code:"", opts:["<body>","<content>","<main>","<section>"], ans:2, exp:"<main> 每页通常只有一个。" },
          { q:"一篇独立文章/blog？", code:"", opts:["<section>","<article>","<div>","<aside>"], ans:1, exp:"<article> 表示独立完整的内容单元。" },
          { q:"侧边栏补充信息？", code:"", opts:["<side>","<extra>","<aside>","<sidebar>"], ans:2, exp:"<aside> 侧边栏/附加信息。" }
        ]}
    ]
  },
  {
    id: "css", icon: "🎨", name: "CSS 样式峡谷",
    desc: "选择器、盒模型、Flex — 网页的外观",
    planMap: "W1 D5-D6 · H5目标·读CSS适配",
    levels: [
      { id:"c1", name:"选择器", enemy:"🎭", bug:"伪装怪",
        lesson:"CSS 用<strong>选择器</strong>选中元素加样式。常见：<code>.class</code> 类、<code>#id</code> ID、<code>tag</code> 标签、<code>parent > child</code> 子选择器。",
        questions:[
          { q:"选中 class=\"btn\" 的元素？", code:"", opts:["#btn",".btn","btn","*btn"], ans:1, exp:". 开头表示 class。" },
          { q:"选中 id=\"header\" ？", code:"", opts:[".header","#header","header","@header"], ans:1, exp:"# 开头表示 id，页面应唯一。" },
          { q:"哪个优先级最高？", code:"", opts:["标签选择器","类选择器","内联 style","通配符 *"], ans:2, exp:"内联 > id > class > 标签。" }
        ]},
      { id:"c2", name:"盒模型", enemy:"📦", bug:"盒模型魔",
        lesson:"每个元素是一个<strong>盒子</strong>：content → padding → border → margin。<code>box-sizing: border-box</code> 让 width 包含 padding 和 border。",
        questions:[
          { q:"元素外部的空白间距？", code:"", opts:["padding","border","margin","gap"], ans:2, exp:"margin 在边框外面。" },
          { q:"border-box 的含义？", code:"", opts:["只有边框","width含padding和border","没有margin","圆形盒子"], ans:1, exp:"更好控布局，H5 常用。" },
          { q:"内边距属性？", code:"", opts:["margin","padding","spacing","inner"], ans:1, exp:"padding 在内容与边框之间。" }
        ]},
      { id:"c3", name:"Flex 布局", enemy:"🧱", bug:"排列砖块",
        lesson:"<code>display: flex</code> 让子元素弹性排列。<code>justify-content</code> 主轴对齐，<code>align-items</code> 交叉轴对齐。H5 移动端最常用！",
        questions:[
          { q:"水平居中（主轴）？", code:"display:flex;\njustify-content: ___;", opts:["center","middle","align-center","flex-center"], ans:0, exp:"justify-content: center" },
          { q:"垂直居中（交叉轴）？", code:"display:flex;\nalign-items: ___;", opts:["center","middle","vertical-center","flex-center"], ans:0, exp:"align-items: center" },
          { q:"子元素等分空间？", code:"", opts:["flex:1","share:equal","width:100%","float:left"], ans:0, exp:"flex: 1 让子项平分剩余空间。" }
        ]},
      { id:"c4", name:"响应式", enemy:"📱", bug:"屏幕变形怪",
        lesson:"<code>&lt;meta viewport&gt;</code> 让手机正确缩放。媒体查询 <code>@media (max-width:768px)</code> 在不同屏幕应用不同样式。rem 相对根字体大小。",
        questions:[
          { q:"viewport meta 的作用？", code:"", opts:["加速加载","控制移动端缩放","加密页面","设置标题"], ans:1, exp:"H5 必写 viewport。" },
          { q:"手机端样式写法？", code:"", opts:["@phone {}","@media (max-width:768px) {}","@mobile {}","@screen phone {}"], ans:1, exp:"媒体查询按屏幕宽度切换。" },
          { q:"rem 相对什么？", code:"", opts:["父元素","根元素html","body","viewport"], ans:1, exp:"rem = root em，H5 适配常用。" }
        ]},
      { id:"c5", name:"CSS 综合", enemy:"🌈", bug:"调色巨龙", boss:true,
        lesson:"颜色 <code>color/background</code>，字体 <code>font-size/font-weight</code>，圆角 <code>border-radius</code>，阴影 <code>box-shadow</code>，过渡 <code>transition</code>。",
        questions:[
          { q:"文字颜色属性？", code:"", opts:["text-color","font-color","color","foreground"], ans:2, exp:"color 设置文字颜色。" },
          { q:"圆角 8px？", code:"", opts:["round:8px","border-radius:8px","corner:8px","radius:8px"], ans:1, exp:"border-radius 控制圆角。" },
          { q:"hover 动画过渡？", code:"", opts:["animation:hover","transition: all .3s","transform:hover","animate: 3s"], ans:1, exp:"transition 让属性变化平滑。" },
          { q:"隐藏元素但保留占位？", code:"", opts:["display:none","visibility:hidden","opacity:0","remove"], ans:1, exp:"visibility:hidden 仍占空间；display:none 不占。" }
        ]}
    ]
  },
  {
    id: "js", icon: "⚡", name: "JavaScript 火山",
    desc: "变量、逻辑、函数 — 网页的大脑",
    planMap: "W1 读码 · W2 JS验收",
    levels: [
      { id:"j1", name:"变量与类型", enemy:"🔢", bug:"类型混淆者",
        lesson:"<code>let</code> 可变，<code>const</code> 常量。基本类型：string、number、boolean、null、undefined。用 <code>typeof</code> 查看类型。",
        questions:[
          { q:"声明不可变变量？", code:"", opts:["var x","let x","const x","fixed x"], ans:2, exp:"const 声明后不能重新赋值。" },
          { q:"typeof null 返回？", code:"", opts:['"null"','"object"','"undefined"','"boolean"'], ans:1, exp:"JS 历史遗留 bug，null 返回 object。" },
          { q:"下面哪个是字符串？", code:"", opts:["42","'42'","true","null"], ans:1, exp:"引号包裹的是字符串。" }
        ]},
      { id:"j2", name:"条件与循环", enemy:"🔀", bug:"分支幽灵",
        lesson:"<code>if/else</code> 条件判断，<code>for</code> 和 <code>for...of</code> 循环遍历。<code>===</code> 严格相等（类型+值）。",
        questions:[
          { q:"严格相等运算符？", code:"", opts:["==","===","=","!="], ans:1, exp:"=== 不会类型转换，更安全。" },
          { q:"`1 == '1'` 结果？", code:"", opts:["true","false","报错","undefined"], ans:0, exp:"== 会做类型转换。" },
          { q:"`1 === '1'` 结果？", code:"", opts:["true","false","报错","null"], ans:1, exp:"=== 类型不同直接 false。" }
        ]},
      { id:"j3", name:"函数", enemy:"📐", bug:"函数工匠",
        lesson:"函数封装可复用逻辑。箭头函数 <code>(a,b) => a+b</code> 简洁。参数可以有默认值。return 返回值。",
        questions:[
          { q:"箭头函数写法？", code:"", opts:["function => x","x => x * 2","=> x * 2","func x => x*2"], ans:1, exp:"(参数) => 表达式 或 { return ... }" },
          { q:"没有 return 的函数返回？", code:"", opts:["0","null","undefined","false"], ans:2, exp:"默认返回 undefined。" },
          { q:"调用函数 greet() 的写法？", code:"function greet(){}", opts:["call greet","greet()","run greet","execute(greet)"], ans:1, exp:"函数名加括号调用。" }
        ]},
      { id:"j4", name:"数组与对象", enemy:"🗃️", bug:"数据保管员",
        lesson:"数组 <code>[1,2,3]</code>，对象 <code>{name:'Tom', age:18}</code>。常用：map/filter/forEach/find。",
        questions:[
          { q:"取对象属性？", code:"const u = {name:'Amy'};", opts:["u[name]","u->name","u.name","u::name"], ans:2, exp:"点语法或 u['name']。" },
          { q:"数组长度？", code:"const arr = [1,2,3];", opts:["arr.size","arr.count","arr.length","arr.len"], ans:2, exp:".length 属性。" },
          { q:"map 的作用？", code:"", opts:["过滤元素","映射/transform每个元素","排序","去重"], ans:1, exp:"map 返回新数组，每个元素经过函数变换。" }
        ]},
      { id:"j5", name:"异步基础", enemy:"⏳", bug:"时间术士",
        lesson:"<code>Promise</code> 处理异步。async/await 让异步代码像同步一样读。fetch() 发 HTTP 请求获取数据。",
        questions:[
          { q:"发 GET 请求？", code:"", opts:["ajax()","http.get()","fetch(url)","request(url)"], ans:2, exp:"现代浏览器原生 fetch API。" },
          { q:"await 必须在什么函数里？", code:"", opts:["普通 function","async function","箭头函数","任何函数"], ans:1, exp:"await 只能在 async 函数中使用。" },
          { q:"Promise 三种状态不包括？", code:"", opts:["pending","resolved/fulfilled","rejected","paused"], ans:3, exp:"pending → fulfilled 或 rejected。" }
        ]},
      { id:"j6", name:"JS 综合", enemy:"🧠", bug:"逻辑魔王", boss:true,
        lesson:"综合：作用域、闭包概念、JSON.parse/stringify、模板字符串 <code>`你好 ${name}`</code>、解构赋值。",
        questions:[
          { q:"模板字符串写法？", code:"", opts:['"hello "+name',"'hello '+name","`hello ${name}`","hello ${name}"], ans:2, exp:"反引号 + ${变量}。" },
          { q:"JSON 字符串转对象？", code:"", opts:["JSON.toObject()","JSON.parse()","parse.json()","Object.fromJSON()"], ans:1, exp:"JSON.parse(str) 最常用。" },
          { q:"`[] + []` 结果？", code:"", opts:['""',"[]","0","报错"], ans:0, exp:"数组转字符串再拼接 → 空字符串。" },
          { q:"const {a,b} = {a:1,b:2} 是？", code:"", opts:["数组解构","对象解构","赋值错误","循环"], ans:1, exp:"解构赋值，快速取属性。" }
        ]}
    ]
  },
  {
    id: "dom", icon:"🖱️", name:"DOM 交互平原",
    desc:"选元素、改内容、绑事件 — 让页面活起来",
    planMap: "W2 H5 · F12验收+交互",
    levels: [
      { id:"d1", name:"选择元素", enemy:"🎯", bug:"定位猎手",
        lesson:"<code>document.querySelector('.btn')</code> 选第一个匹配元素。<code>querySelectorAll</code> 选全部。返回 DOM 节点对象。",
        questions:[
          { q:"选第一个 .item 元素？", code:"", opts:["getElement('.item')","querySelector('.item')","select('.item')","find('.item')"], ans:1, exp:"querySelector 用 CSS 选择器语法。" },
          { q:"选 id=app 的元素？", code:"", opts:["querySelector('.app')","querySelector('#app')","getById('app')","两者B和C都对"], ans:3, exp:"#app 或 getElementById('app')。" },
          { q:"改元素文字内容？", code:"", opts:["el.value","el.textContent","el.html","el.innerText()"], ans:1, exp:"textContent 设置纯文本。" }
        ]},
      { id:"d2", name:"事件监听", enemy:"👆", bug:"点击精灵",
        lesson:"<code>el.addEventListener('click', handler)</code> 绑定事件。handler 是函数。event.preventDefault() 阻止默认行为（如表单提交）。",
        questions:[
          { q:"绑定点击事件？", code:"", opts:["el.onclick = fn","el.addEventListener('click', fn)","el.click(fn)","el.on('click', fn)"], ans:1, exp:"addEventListener 更灵活，可绑多个。" },
          { q:"阻止链接默认跳转？", code:"", opts:["e.stop()","e.preventDefault()","e.cancel()","return false only"], ans:1, exp:"preventDefault() 阻止默认行为。" },
          { q:"事件对象通常叫？", code:"", opts:["evt / event / e","this","target only","param"], ans:0, exp:"回调第一个参数是 event 对象。" }
        ]},
      { id:"d3", name:"改样式与类", enemy:"✨", bug:"样式法师",
        lesson:"<code>el.style.color = 'red'</code> 改行内样式。<code>el.classList.add('active')</code> 切 class 更推荐（配合 CSS）。",
        questions:[
          { q:"添加 CSS class？", code:"", opts:["el.class = 'active'","el.classList.add('active')","el.addClass('active')","el.className.add()"], ans:1, exp:"classList.add/remove/toggle。" },
          { q:"隐藏元素（不占位）？", code:"", opts:["el.style.display='none'","el.style.visibility='hidden'","el.hide()","el.remove()"], ans:0, exp:"display:none 完全移除布局。" },
          { q:"改行内颜色？", code:"", opts:["el.color='red'","el.style.color='red'","el.css('color','red')","el.setColor('red')"], ans:1, exp:"通过 el.style 修改行内样式。" }
        ]},
      { id:"d4", name:"表单与输入", enemy:"📝", bug:"表单守卫",
        lesson:"<code>input.value</code> 获取输入值。form submit 事件里 e.preventDefault() 阻止刷新，用 JS 处理数据。",
        questions:[
          { q:"获取 input 的值？", code:"", opts:["input.text","input.content","input.value","input.innerHTML"], ans:2, exp:"表单元素用 .value。" },
          { q:"阻止表单默认提交？", code:"", opts:["form.stop()","e.preventDefault()","form.prevent()","return null"], ans:1, exp:"在 submit 回调里 preventDefault。" },
          { q:"checkbox 是否选中？", code:"", opts:["checkbox.checked","checkbox.selected","checkbox.value","checkbox.on"], ans:0, exp:".checked 返回 boolean。" }
        ]},
      { id:"d5", name:"DOM 综合", enemy:"🏰", bug:"交互堡垒", boss:true,
        lesson:"localStorage 持久化存储。createElement + appendChild 动态创建节点。F12 Elements 面板实时查看 DOM 变化。",
        questions:[
          { q:"本地持久存储？", code:"", opts:["sessionStorage only","localStorage","cookie only","memory"], ans:1, exp:"localStorage 关闭浏览器仍在。" },
          { q:"创建新 div？", code:"", opts:["document.create('div')","document.createElement('div')","new Div()","document.newElement('div')"], ans:1, exp:"createElement 动态创建节点。" },
          { q:"F12 哪个面板看 DOM？", code:"", opts:["Console","Network","Elements","Sources"], ans:2, exp:"Elements = DOM 树，你的验收神器。" },
          { q:"appendChild 作用？", code:"", opts:["删除子节点","添加子节点到末尾","替换节点","复制节点"], ans:1, exp:"把新元素插入父节点。" }
        ]}
    ]
  },
  {
    id: "h5", icon:"🚀", name:"H5 现代frontend城",
    desc:"Vue、路由、API、状态 — 你的 H5 八条目标",
    planMap: "W2 全周 · H5八条目标毕业关",
    levels: [
      { id:"v1", name:"组件概念", enemy:"🧩", bug:"组件碎片",
        lesson:"组件 = 可复用的 UI 块。Vue 单文件组件 .vue 含 template/script/style。props 传数据进组件，emit 向父组件发事件。",
        questions:[
          { q:"Vue 组件文件扩展名？", code:"", opts:[".vue",".component",".v",".jsx only"], ans:0, exp:".vue 单文件组件 SFC。" },
          { q:"父传子数据用？", code:"", opts:["emit","props","store","router"], ans:1, exp:"props 父 → 子。" },
          { q:"子通知父？", code:"", opts:["props","emit","callback only","ref"], ans:1, exp:"$emit / defineEmits。" }
        ]},
      { id:"v2", name:"路由", enemy:"🛤️", bug:"迷途指针",
        lesson:"Vue Router 管理页面跳转而不刷新。<code>/home</code> → Home 组件，<code>/about</code> → About。router-link 导航，useRouter 编程式跳转。",
        questions:[
          { q:"Vue 路由库？", code:"", opts:["Vuex","Vue Router","Pinia","Vue Navigation"], ans:1, exp:"vue-router 官方路由。" },
          { q:"声明式导航组件？", code:"", opts:["<a href>","<router-link>","<nav-link>","<route>"], ans:1, exp:"router-link 不刷新页面。" },
          { q:"SPA 的含义？", code:"", opts:["单页应用","简单页面","静态页面","安全页面"], ans:0, exp:"Single Page Application，前端路由切换。" }
        ]},
      { id:"v3", name:"API 封装", enemy:"📡", bug:"通信干扰",
        lesson:"把 fetch/axios 封装成 request 函数，统一 baseURL、token、错误处理。API 文件按模块划分：user.js、product.js。",
        questions:[
          { q:"HTTP 获取数据常用方法？", code:"", opts:["POST","GET","DELETE","PATCH"], ans:1, exp:"GET 读取，POST 创建/提交。" },
          { q:"封装 request 的好处？", code:"", opts:["代码更长","统一处理token和错误","不需要","只能用于GET"], ans:1, exp:"DRY 原则，H5 项目标配。" },
          { q:"401 状态码通常表示？", code:"", opts:["成功","未授权/未登录","服务器崩溃","找不到"], ans:1, exp:"需要登录或 token 过期。" }
        ]},
      { id:"v4", name:"状态管理", enemy:"💾", bug:"记忆吞噬者",
        lesson:"Pinia/Vuex 管理全局状态（用户信息、购物车）。组件内用 ref/reactive 管理局部状态。computed 计算属性，watch 监听变化。",
        questions:[
          { q:"Vue3 推荐状态库？", code:"", opts:["Vuex only","Pinia","Redux","MobX"], ans:1, exp:"Pinia 是 Vue3 官方推荐。" },
          { q:"响应式变量？", code:"", opts:["var","ref / reactive","static","global"], ans:1, exp:"ref 基本类型，reactive 对象。" },
          { q:"computed 的作用？", code:"", opts:["监听变化","根据依赖自动计算的属性","发送请求","路由跳转"], ans:1, exp:"有缓存的计算属性。" }
        ]},
      { id:"v5", name:"H5 毕业关", enemy:"👑", bug:"终极 Boss", boss:true,
        lesson:"🎓 <strong>恭喜来到最后一关！</strong>H5 核心理念：不必先系统学完所有语法——懂结构、写清需求、AI 实现、F12 验收。你已经掌握了全部核心知识！",
        questions:[
          { q:"H5 移动端必写 meta？", code:"", opts:["charset","viewport","keywords","author"], ans:1, exp:"viewport 适配手机。" },
          { q:"Vant 是什么？", code:"", opts:["后端框架","Vue 移动端 UI 库","数据库","打包工具"], ans:1, exp:"Vant 常用 H5 组件库。" },
          { q:"验收 H5 页面第一步？", code:"", opts:["直接上线","F12 + 手机模式预览","只看代码","问 AI"], ans:1, exp:"你的学习计划核心循环！" },
          { q:"你的学习策略？", code:"", opts:["先背完整文档再写","懂需求→AI实现→浏览器验收","只复制不理解","跳过测试"], ans:1, exp:"这就是你的 H5 哲学 ✨" }
        ]}
    ]
  }
];

/* 每关追加 1 道代码填空（答错须重答） */
const FILL_QUESTIONS = {
  h1: { type:"fill", q:"补全：用段落标签包裹文字", code:"<___>你好世界</___>", answers:["p","p"], exp:"<p> 表示 paragraph 段落。" },
  h2: { type:"fill", q:"补全：超链接跳转地址属性", code:'<a ___="https://baidu.com">百度</a>', answers:["href"], exp:"href 指定链接目标 URL。" },
  h3: { type:"fill", q:"补全：无序列表外层标签", code:"<___>\n  <li>苹果</li>\n  <li>香蕉</li>\n</___>", answers:["ul","ul"], exp:"ul 包裹 li，成对出现。" },
  h4: { type:"fill", q:"补全：密码输入框类型", code:'<input type="___" />', answers:["password"], exp:"type=\"password\" 隐藏输入内容。" },
  h5: { type:"fill", q:"补全：导航区域语义标签", code:"<___>\n  <a href=\"/\">首页</a>\n</___>", answers:["nav","nav"], exp:"<nav> 专用于导航链接。" },
  c1: { type:"fill", q:"补全：选中 class 为 btn 的元素", code:".___ {\n  color: red;\n}", answers:["btn"], exp:"class 选择器以 . 开头。" },
  c2: { type:"fill", q:"补全：width 包含 padding 和 border", code:"box-sizing: ___-box;", answers:["border"], exp:"border-box 是 H5 布局常用值。" },
  c3: { type:"fill", q:"补全：开启 Flex 弹性布局", code:".box {\n  display: ___;\n}", answers:["flex"], exp:"display:flex 让子元素弹性排列。" },
  c4: { type:"fill", q:"补全：viewport 宽度适配", code:'<meta name="viewport" content="width=___, initial-scale=1">', answers:["device-width"], exp:"device-width 让手机按设备宽度渲染。" },
  c5: { type:"fill", q:"补全：8px 圆角属性", code:"border-___: 8px;", answers:["radius"], exp:"border-radius 控制圆角。" },
  j1: { type:"fill", q:"补全：声明不可变变量", code:"___ PI = 3.14;", answers:["const"], exp:"const 声明常量，不可重新赋值。" },
  j2: { type:"fill", q:"补全：严格相等判断", code:"if (a ___ b) {\n  console.log('相等');\n}", answers:["==="], exp:"=== 同时比较类型和值。" },
  j3: { type:"fill", q:"补全：箭头函数", code:"const double = x ___ x * 2;", answers:["=>"], exp:"=> 是箭头函数语法。" },
  j4: { type:"fill", q:"补全：获取数组长度", code:"const len = arr.___;", answers:["length"], exp:".length 返回数组元素个数。" },
  j5: { type:"fill", q:"补全：等待异步结果", code:"const res = ___ fetch(url);", answers:["await"], exp:"await 需在 async 函数内使用。" },
  j6: { type:"fill", q:"补全：JSON 字符串转对象", code:"const obj = JSON.___(jsonStr);", answers:["parse"], exp:"JSON.parse() 解析 JSON 字符串。" },
  d1: { type:"fill", q:"补全：选取第一个 .btn 元素", code:"const btn = document.___('.btn');", answers:["querySelector"], exp:"querySelector 用 CSS 选择器语法。" },
  d2: { type:"fill", q:"补全：绑定点击事件", code:"el.addEventListener('___', handler);", answers:["click"], exp:"第一个参数是事件名。" },
  d3: { type:"fill", q:"补全：添加 CSS 类名", code:"el.classList.___('active');", answers:["add"], exp:"classList.add 添加 class。" },
  d4: { type:"fill", q:"补全：读取输入框内容", code:"const text = input.___;", answers:["value"], exp:"表单元素用 .value 取值。" },
  d5: { type:"fill", q:"补全：写入本地存储", code:"localStorage.___('score', '100');", answers:["setItem"], exp:"setItem(key, value) 持久化存储。" },
  v1: { type:"fill", q:"补全：Vue 组件 HTML 部分", code:"<___>\n  <div>{{ msg }}</div>\n</___>", answers:["template","template"], exp:"<template> 写组件结构。" },
  v2: { type:"fill", q:"补全：Vue Router 导航组件", code:'<router-___ to="/home">首页</router-___>', answers:["link","link"], exp:"router-link 无刷新跳转。" },
  v3: { type:"fill", q:"补全：解析响应 JSON", code:"const data = await res.___();", answers:["json"], exp:"Response.json() 解析 JSON  body。" },
  v4: { type:"fill", q:"补全：Vue3 响应式变量", code:"import { ___ } from 'vue';\nconst count = ___(0);", answers:["ref","ref"], exp:"ref() 创建响应式基本类型。" },
  v5: { type:"fill", q:"补全：H5 移动端 viewport", code:'<meta name="___" content="width=device-width, initial-scale=1">', answers:["viewport"], exp:"viewport 是 H5 必写 meta。" }
};

REGIONS.forEach(r => r.levels.forEach(l => {
  if (FILL_QUESTIONS[l.id]) l.questions.push(FILL_QUESTIONS[l.id]);
}));

/* 每关学习课堂内容（挑战前必读） */
const STUDY_CONTENT = {
  h1: {
    summary: "HTML 是网页的骨架，用「标签」告诉浏览器：这里是一段话、一个标题、一张图……",
    points: ["标签成对出现：<code>&lt;标签&gt;内容&lt;/标签&gt;</code>", "常见标签：<code>h1~h6</code> 标题、<code>p</code> 段落、<code>div</code> 容器、<code>span</code> 行内文字", "标签名不区分大小写，但习惯全小写", "浏览器按标签结构渲染页面，F12 → Elements 可看到 DOM 树"],
    example: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>页面主标题</h1>\n    <p>这是一段文字。</p>\n    <div>一块区域</div>\n  </body>\n</html>",
    tip: "记法：<strong>h = heading 标题，p = paragraph 段落</strong>。看到 &lt;p&gt; 就想到「一段话」。",
    exam: ["&lt;p&gt; 和 &lt;div&gt; 哪个表示段落？", "标签为什么要成对闭合？", "h1 一般放什么内容？"]
  },
  h2: {
    summary: "链接让用户跳转，图片让页面有视觉内容。这两个是 H5 页面最常见的元素。",
    points: ["超链接：<code>&lt;a href=\"地址\"&gt;文字&lt;/a&gt;</code>", "图片：<code>&lt;img src=\"路径\" alt=\"描述\"&gt;</code>（img 没有闭合标签）", "alt 是图片的文字说明，加载失败时会显示", "新窗口打开：<code>target=\"_blank\"</code>"],
    example: "<a href=\"https://baidu.com\" target=\"_blank\">去百度</a>\n<img src=\"logo.png\" alt=\"网站Logo\">",
    tip: "记法：<strong>a = anchor 锚点/链接，href = hyper reference 超链接引用</strong>。",
    exam: ["跳转链接用哪个属性？", "img 的 alt 有什么用？", "新标签页打开写什么？"]
  },
  h3: {
    summary: "列表用来展示多条同类信息，表格用来展示行列数据。",
    points: ["无序列表（圆点）：<code>&lt;ul&gt;&lt;li&gt;项&lt;/li&gt;&lt;/ul&gt;</code>", "有序列表（数字）：<code>&lt;ol&gt;&lt;li&gt;项&lt;/li&gt;&lt;/ol&gt;</code>", "表格：table → tr(行) → td(单元格)", "li = list item，每一项都用 li 包裹"],
    example: "<ul>\n  <li>苹果</li>\n  <li>香蕉</li>\n</ul>\n\n<table>\n  <tr><td>姓名</td><td>年龄</td></tr>\n  <tr><td>小明</td><td>18</td></tr>\n</table>",
    tip: "记法：<strong>ul = unordered 无序，ol = ordered 有序，li = list item</strong>。",
    exam: ["无序列表外层标签？", "表格一行用什么？", "ol 和 ul 区别？"]
  },
  h4: {
    summary: "表单收集用户输入：登录、搜索、注册都靠它。",
    points: ["<code>&lt;form&gt;</code> 包裹整个表单", "<code>&lt;input type=\"text\"&gt;</code> 单行文本", "<code>type=\"password\"</code> 密码（隐藏输入）", "<code>type=\"submit\"</code> 提交按钮", "<code>placeholder</code> 输入框内的灰色提示（不是真实值）"],
    example: "<form>\n  <input type=\"text\" placeholder=\"请输入用户名\">\n  <input type=\"password\" placeholder=\"请输入密码\">\n  <button type=\"submit\">登录</button>\n</form>",
    tip: "placeholder 只是提示，用户还没输入时显示；真正提交的值来自 input 的 value。",
    exam: ["密码框 type 写什么？", "提交按钮怎么写？", "placeholder 是什么？"]
  },
  h5: {
    summary: "语义化标签让代码「一看就懂」，搜索引擎也更喜欢。Boss 关重点！",
    points: ["<code>&lt;header&gt;</code> 页头（logo、顶部栏）", "<code>&lt;nav&gt;</code> 导航链接区", "<code>&lt;main&gt;</code> 页面主体内容（每页通常只有一个）", "<code>&lt;footer&gt;</code> 页脚", "<code>&lt;article&gt;</code> 独立文章", "<code>&lt;aside&gt;</code> 侧边栏"],
    example: "<header>网站Logo</header>\n<nav><a href=\"/\">首页</a></nav>\n<main>\n  <article>一篇文章...</article>\n  <aside>相关推荐</aside>\n</main>\n<footer>版权信息</footer>",
    tip: "能用语义标签就别全用 div。读 H5 项目时，F12 找 nav/main/footer 快速定位结构。",
    exam: ["导航区用哪个标签？", "主内容区？", "侧边栏？"]
  },
  c1: {
    summary: "CSS 负责「长什么样」。选择器决定样式加在谁身上。",
    points: ["标签选择器：<code>p { }</code> 选中所有 p", "类选择器：<code>.btn { }</code> 选中 class=\"btn\"", "ID 选择器：<code>#header { }</code> 选中 id=\"header\"", "优先级：内联 style > #id > .class > 标签"],
    example: "/* 所有段落灰色 */\np { color: gray; }\n\n/* class 为 btn 的按钮 */\n.btn { background: blue; }\n\n/* id 为 header 的元素 */\n#header { height: 60px; }",
    tip: "读代码时：看到 <code>.xxx</code> 就去 HTML 里找 <code>class=\"xxx\"</code>。",
    exam: [".btn 是什么选择器？", "#header 呢？", "哪个优先级最高？"]
  },
  c2: {
    summary: "每个元素都是一个「盒子」，搞懂盒子就搞懂了布局的一半。",
    points: ["从里到外：content（内容）→ padding（内边距）→ border（边框）→ margin（外边距）", "padding：内容和边框之间的空白", "margin：盒子与盒子之间的空白", "box-sizing: border-box → width 包含 padding 和 border（H5 常用）"],
    example: ".box {\n  width: 200px;\n  padding: 10px;   /* 内边距 */\n  border: 1px solid #ccc;\n  margin: 20px;    /* 外边距 */\n  box-sizing: border-box;\n}",
    tip: "元素「挤在一起」→ 调 margin；「内容和边框太近」→ 调 padding。",
    exam: ["margin 在哪一层？", "border-box 什么意思？", "内边距属性名？"]
  },
  c3: {
    summary: "Flex 是 H5 移动端最常用的布局方式，居中、排列全靠它。",
    points: ["父元素写 <code>display: flex</code> 开启弹性布局", "<code>justify-content</code> 控制主轴（默认水平）对齐", "<code>align-items</code> 控制交叉轴（默认垂直）对齐", "<code>flex: 1</code> 让子元素平分剩余空间"],
    example: "/* 水平+垂直居中 */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}",
    tip: "居中口诀：<strong>flex + justify-center + align-center</strong>，背这三个就够应付大部分 H5 布局。",
    exam: ["水平居中用哪个属性？", "垂直居中呢？", "子元素平分空间？"]
  },
  c4: {
    summary: "H5 必须适配手机屏幕，viewport 和媒体查询是核心。",
    points: ["viewport meta 让手机按正确比例显示页面", "媒体查询 <code>@media (max-width:768px)</code> 在小屏生效", "rem 相对 html 根字体大小，常用于移动端适配", "H5 项目里找 viewport 和 rem 设置是读码第一步"],
    example: "<meta name=\"viewport\"\n  content=\"width=device-width, initial-scale=1\">\n\n<style>\n@media (max-width: 768px) {\n  .sidebar { display: none; }\n}\n</style>",
    tip: "打开任意 H5 页面，F12 → 切手机模式，看 viewport 是否生效。",
    exam: ["viewport 干什么用？", "媒体查询写法？", "rem 相对什么？"]
  },
  c5: {
    summary: "颜色、字体、圆角、动画——让页面从「能用」变成「好看」。",
    points: ["<code>color</code> 文字颜色，<code>background</code> 背景色", "<code>font-size</code> 字号，<code>font-weight: bold</code> 加粗", "<code>border-radius</code> 圆角", "<code>transition</code> 属性变化过渡动画", "<code>display:none</code> 隐藏且不占位；<code>visibility:hidden</code> 隐藏但占位"],
    example: ".btn {\n  color: #fff;\n  background: #238636;\n  border-radius: 8px;\n  transition: all .3s;\n}\n.btn:hover {\n  background: #2ea043;\n}",
    tip: "读 H5 UI 组件（如 Vant 按钮）时，重点看 border-radius 和 color。",
    exam: ["文字颜色属性？", "圆角怎么写？", "隐藏但保留占位？"]
  },
  j1: {
    summary: "JavaScript 让页面「动起来」。变量是存数据的容器。",
    points: ["<code>let</code> 声明可变变量，<code>const</code> 声明常量", "基本类型：string 字符串、number 数字、boolean 布尔", "null 和 undefined 都表示「空」，但含义不同", "<code>typeof</code> 查看变量类型（null 返回 object 是历史 bug）"],
    example: "const name = 'Tom';    // 字符串\nlet age = 18;          // 数字\nconst ok = true;       // 布尔\nconsole.log(typeof name); // \"string\"",
    tip: "现代 JS 优先用 const，需要改值才用 let；尽量不用 var。",
    exam: ["不可变变量用？", "typeof null 返回？", "哪个是字符串？"]
  },
  j2: {
    summary: "条件判断和循环是编程的基本逻辑。",
    points: ["<code>if/else</code> 条件分支", "<code>===</code> 严格相等（类型+值都要一样）", "<code>==</code> 宽松相等（会类型转换，容易出 bug）", "for 循环遍历数组"],
    example: "if (age >= 18) {\n  console.log('成年');\n} else {\n  console.log('未成年');\n}\n\n// 1 == '1'  → true（类型转换）\n// 1 === '1' → false（类型不同）",
    tip: "写代码和读代码都用 <strong>===</strong>，不要用 ==，更安全。",
    exam: ["严格相等运算符？", "1 == '1' 结果？", "1 === '1' 呢？"]
  },
  j3: {
    summary: "函数把一段逻辑包起来重复使用。",
    points: ["声明：<code>function fn() { }</code>", "箭头函数：<code>const fn = () => { }</code> 或 <code>x => x * 2</code>", "调用：函数名加括号 <code>fn()</code>", "没有 return 则返回 undefined"],
    example: "// 普通函数\nfunction greet(name) {\n  return '你好, ' + name;\n}\n\n// 箭头函数\nconst double = x => x * 2;\n\nconsole.log(greet('Amy')); // 你好, Amy\nconsole.log(double(5));    // 10",
    tip: "读 H5 项目时大量箭头函数，看到 <code>=></code> 就想到「这是一个函数」。",
    exam: ["箭头函数符号？", "没 return 返回什么？", "怎么调用函数？"]
  },
  j4: {
    summary: "数组存一组数据，对象存键值对。前端 80% 的数据操作都在这。",
    points: ["数组：<code>[1, 2, 3]</code>，用 <code>.length</code> 取长度", "对象：<code>{ name: 'Tom', age: 18 }</code>", "取属性：<code>obj.name</code> 或 <code>obj['name']</code>", "map 把每个元素变换后返回新数组"],
    example: "const arr = [1, 2, 3];\nconsole.log(arr.length); // 3\n\nconst user = { name: 'Amy', age: 20 };\nconsole.log(user.name); // Amy\n\nconst doubled = arr.map(x => x * 2); // [2,4,6]",
    tip: "接口返回的 JSON 数据通常是对象或对象数组，用 . 取字段名。",
    exam: ["取对象属性？", "数组长度？", "map 做什么？"]
  },
  j5: {
    summary: "网络请求、定时器等操作不能立刻完成，需要异步处理。",
    points: ["<code>fetch(url)</code> 发 HTTP 请求（现代浏览器原生支持）", "<code>async/await</code> 让异步代码读起来像同步", "await 必须在 async 函数内", "Promise 状态：pending → fulfilled 或 rejected"],
    example: "async function getData() {\n  const res = await fetch('/api/user');\n  const data = await res.json();\n  console.log(data);\n}",
    tip: "读 H5 项目 api 文件夹：找 fetch/axios + async/await 就是请求数据的逻辑。",
    exam: ["发 GET 请求？", "await 在哪用？", "Promise 没有哪个状态？"]
  },
  j6: {
    summary: "JS 综合技巧：模板字符串、JSON、解构——读项目常见语法。",
    points: ["模板字符串：反引号 <code>`你好 ${name}`</code>", "JSON.parse() 字符串→对象，JSON.stringify() 对象→字符串", "解构：<code>const {a, b} = obj</code> 快速取属性", "[] + [] 结果是空字符串 \"\"（类型转换陷阱）"],
    example: "const name = 'Tom';\nconsole.log(`你好, ${name}`);\n\nconst json = '{\"age\":18}';\nconst obj = JSON.parse(json);\n\nconst { age } = obj; // 解构，age = 18",
    tip: "看到反引号 ` 和 ${} 就是模板字符串；看到 JSON.parse 就是在解析接口数据。",
    exam: ["模板字符串写法？", "JSON 转对象？", "对象解构是什么？"]
  },
  d1: {
    summary: "DOM 是浏览器把 HTML 变成的可操作对象树。JS 通过 DOM 控制页面。",
    points: ["<code>document.querySelector('.btn')</code> 选第一个匹配元素", "<code>querySelector('#app')</code> 选 id", "<code>getElementById('app')</code> 也可以", "<code>el.textContent = '新文字'</code> 改文本内容"],
    example: "const btn = document.querySelector('.btn');\nbtn.textContent = '已点击';\n\nconst app = document.querySelector('#app');\n// 或 document.getElementById('app');",
    tip: "F12 → Console 里可以直接输入 document.querySelector('xxx') 试验，这是验收神器。",
    exam: ["选 .item 元素？", "选 #app？", "改文字内容属性？"]
  },
  d2: {
    summary: "事件监听让页面响应用户操作：点击、输入、滚动……",
    points: ["<code>el.addEventListener('click', handler)</code> 绑定事件", "handler 是函数，点击时自动执行", "event 对象（通常叫 e）包含事件信息", "<code>e.preventDefault()</code> 阻止默认行为（如表单提交刷新页面）"],
    example: "const btn = document.querySelector('.btn');\nbtn.addEventListener('click', function(e) {\n  e.preventDefault();\n  console.log('按钮被点了');\n});",
    tip: "读 H5 代码搜 addEventListener 或 @click，就是交互逻辑所在。",
    exam: ["绑定点击事件？", "阻止默认行为？", "事件对象叫什么？"]
  },
  d3: {
    summary: "JS 可以动态修改元素样式和 class，实现交互效果。",
    points: ["<code>el.style.color = 'red'</code> 改行内样式", "<code>el.classList.add('active')</code> 添加 class（推荐，配合 CSS）", "<code>classList.remove/toggle</code> 移除/切换 class", "<code>display:none</code> 隐藏且不占空间"],
    example: "const box = document.querySelector('.box');\nbox.classList.add('active');   // 加 class\nbox.style.color = 'red';       // 改颜色\nbox.style.display = 'none';    // 隐藏",
    tip: "好的 H5 项目多用 classList 切换 class，CSS 里写好 .active 样式，而不是直接改 style。",
    exam: ["添加 class？", "隐藏不占位？", "改行内颜色？"]
  },
  d4: {
    summary: "表单交互：获取用户输入、阻止页面刷新。",
    points: ["<code>input.value</code> 获取/设置输入框的值", "<code>checkbox.checked</code> 获取是否勾选", "form 的 submit 事件里 <code>e.preventDefault()</code> 阻止刷新", "然后用 JS 处理数据（发请求等）"],
    example: "const form = document.querySelector('form');\nform.addEventListener('submit', function(e) {\n  e.preventDefault();\n  const name = document.querySelector('#name').value;\n  console.log('用户名:', name);\n});",
    tip: "H5 登录页：找 form submit → preventDefault → 取 input.value → 调 api 发请求。",
    exam: ["取 input 值？", "阻止表单提交？", "checkbox 是否选中？"]
  },
  d5: {
    summary: "DOM 综合：动态创建元素、本地存储、F12 验收。",
    points: ["<code>document.createElement('div')</code> 创建元素", "<code>parent.appendChild(child)</code> 插入到页面", "<code>localStorage.setItem/getItem</code> 持久化存储", "F12 → Elements 面板查看 DOM 树"],
    example: "const div = document.createElement('div');\ndiv.textContent = '动态内容';\ndocument.body.appendChild(div);\n\nlocalStorage.setItem('score', '100');\nconst s = localStorage.getItem('score');",
    tip: "你的游戏进度也是 localStorage 存的！F12 → Application → Local Storage 能看到。",
    exam: ["持久存储用什么？", "创建 div？", "F12 看 DOM 哪个面板？"]
  },
  v1: {
    summary: "Vue 组件 = 可复用的 UI 块。一个 .vue 文件就是一个组件。",
    points: [".vue 文件含三部分：template(HTML) + script(JS) + style(CSS)", "props：父组件传数据给子组件", "emit：子组件通知父组件", "读 H5 项目：src/components 文件夹就是组件"],
    example: "<!-- 父组件 -->\n<ChildComp :msg=\"hello\" @done=\"onDone\" />\n\n<!-- 子组件 ChildComp.vue -->\n<template><div>{{ msg }}</div></template>\n<!-- script 部分: defineProps(['msg']) -->",
    tip: "不必会写组件，但要能在项目里找到 .vue 文件，看懂 template 是结构、script 是逻辑。",
    exam: ["组件文件扩展名？", "父传子用什么？", "子通知父？"]
  },
  v2: {
    summary: "Vue Router 实现页面跳转而不刷新——这叫 SPA 单页应用。",
    points: ["路由库：vue-router", "<code>&lt;router-link to=\"/home\"&gt;</code> 声明式导航", "地址 /home 对应 Home 组件，/about 对应 About 组件", "读项目：src/router/index.js 是路由配置"],
    example: "// router/index.js\n{ path: '/home', component: Home }\n\n<!-- 模板中 -->\n<router-link to=\"/home\">首页</router-link>",
    tip: "H5 切页面不闪白屏 = 用了前端路由。找 router 文件夹理解页面结构。",
    exam: ["Vue 路由库？", "导航组件？", "SPA 是什么？"]
  },
  v3: {
    summary: "API 封装：把网络请求统一管理，H5 项目标配。",
    points: ["GET 读取数据，POST 提交数据", "fetch/axios 发请求", "封装 request 函数：统一 baseURL、token、错误处理", "api 文件夹按模块分：user.js、product.js", "401 状态码 = 未登录/token 过期"],
    example: "// api/request.js\nasync function request(url) {\n  const res = await fetch(baseURL + url, {\n    headers: { Authorization: token }\n  });\n  if (res.status === 401) redirectLogin();\n  return res.json();\n}",
    tip: "读 H5 项目：src/api/ 下的文件就是接口调用，配合 F12 Network 面板验收。",
    exam: ["GET 做什么？", "封装 request 好处？", "401 表示什么？"]
  },
  v4: {
    summary: "状态管理：多个页面/组件共享的数据（用户信息、购物车等）。",
    points: ["Vue3 推荐 Pinia 管理全局状态", "组件内局部状态用 ref / reactive", "computed：根据其他数据自动计算（有缓存）", "watch：监听数据变化执行操作", "读项目：src/store/ 文件夹"],
    example: "// store/user.js\nimport { ref } from 'vue';\nexport const useUserStore = () => {\n  const name = ref('');\n  const isLogin = computed(() => !!name.value);\n  return { name, isLogin };\n};",
    tip: "登录后用户名存在 store 里，多个页面都能读到——这就是状态管理。",
    exam: ["Vue3 状态库？", "响应式变量？", "computed 作用？"]
  },
  v5: {
    summary: "🎓 毕业关！H5 核心理念 + 验收方法。",
    points: ["H5 必写：<code>&lt;meta name=\"viewport\"&gt;</code>", "Vant = Vue 移动端 UI 组件库（按钮、弹窗、列表…）", "你的学习策略：懂需求 → AI 实现 → F12 验收", "不必背完所有语法，会读代码、会验收就是合格 H5 工程师", "验收步骤：F12 → 手机模式 → Console 看报错 → Network 看接口"],
    example: "<!-- H5 页面基本骨架 -->\n<meta name=\"viewport\"\n  content=\"width=device-width, initial-scale=1\">\n<div id=\"app\"></div>\n<!-- 底部引入 index.js -->",
    tip: "通关后打开 学习产出/web学习产出.html，用今天学的知识 F12 读一遍代码结构！",
    exam: ["H5 必写 meta？", "Vant 是什么？", "验收第一步？", "你的学习策略？"]
  }
};

const SAVE_KEY = "frontend_quest_save_v1";
const XP_PER_Q = 15;
const XP_BOSS_BONUS = 30;
const XP_PER_LEVEL = 100;

/* ── 状态 ── */
let state = loadState();
let currentRegion = null;
let currentLevel = null;
let qIndex = 0;
let enemyHp = 100;
const MAX_WRONG_HINT = 3;

let questionWrongCount = 0;

function defaultState() {
  return { cleared: {}, xp: 0, lv: 1, totalCorrect: 0, totalAnswered: 0, startedAt: Date.now() };
}

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState();
  } catch { return defaultState(); }
}

function saveState() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) {}
}

function allLevels() {
  const list = [];
  REGIONS.forEach((r, ri) => r.levels.forEach((l, li) => list.push({ region: r, regionIdx: ri, level: l, levelIdx: li })));
  return list;
}

function levelKey(ri, li) { return `${ri}-${li}`; }

function isLevelUnlocked(ri, li) {
  if (ri === 0 && li === 0) return true;
  const all = allLevels();
  const idx = all.findIndex(x => x.regionIdx === ri && x.levelIdx === li);
  if (idx <= 0) return false;
  const prev = all[idx - 1];
  return !!state.cleared[levelKey(prev.regionIdx, prev.levelIdx)];
}

function isRegionUnlocked(ri) {
  if (ri === 0) return true;
  const prevRegion = REGIONS[ri - 1];
  const lastLi = prevRegion.levels.length - 1;
  return !!state.cleared[levelKey(ri - 1, lastLi)];
}

function countCleared() { return Object.keys(state.cleared).length; }
function totalLevels() { return allLevels().length; }

function addXp(n) {
  state.xp += n;
  while (state.xp >= XP_PER_LEVEL) {
    state.xp -= XP_PER_LEVEL;
    state.lv++;
  }
  saveState();
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function renderMap() {
  const container = document.getElementById("map-container");
  container.innerHTML = "";
  REGIONS.forEach((region, ri) => {
    const unlocked = isRegionUnlocked(ri);
    const cleared = region.levels.filter((_, li) => state.cleared[levelKey(ri, li)]).length;
    const div = document.createElement("div");
    div.className = "region" + (unlocked ? " open" : " locked");
    div.innerHTML = `
      <div class="region-head" data-ri="${ri}">
        <div class="region-icon">${region.icon}</div>
        <div class="region-info">
          <h2>${region.name}</h2>
          <p>${region.desc} · ${region.planMap}</p>
        </div>
        <div class="region-progress">${cleared}/${region.levels.length}</div>
      </div>
      <div class="levels"></div>`;
    const levelsEl = div.querySelector(".levels");
    region.levels.forEach((lv, li) => {
      const key = levelKey(ri, li);
      const done = !!state.cleared[key];
      const canPlay = unlocked && isLevelUnlocked(ri, li);
      const isCurrent = canPlay && !done;
      const btn = document.createElement("button");
      btn.className = "level-btn" + (lv.boss ? " boss" : "") + (done ? " done" : "") + (isCurrent ? " current" : "");
      btn.disabled = !canPlay;
      btn.innerHTML = `<span class="num">${lv.boss ? "👑" : li + 1}</span><span>${done ? "✓" : lv.name.slice(0, 4)}</span>`;
      btn.title = lv.name;
      btn.onclick = () => openStudy(ri, li);
      levelsEl.appendChild(btn);
    });
    div.querySelector(".region-head").onclick = () => {
      if (unlocked) div.classList.toggle("open");
    };
    container.appendChild(div);
  });

  document.getElementById("player-lv").textContent = state.lv;
  document.getElementById("xp-text").textContent = state.xp + " XP";
  document.getElementById("xp-bar").style.width = (state.xp / XP_PER_LEVEL * 100) + "%";
}

function openStudy(ri, li) {
  currentRegion = ri;
  currentLevel = li;
  const region = REGIONS[ri];
  const lv = region.levels[li];
  const study = STUDY_CONTENT[lv.id];
  document.getElementById("study-title").textContent = region.name + " · " + lv.name;
  const container = document.getElementById("study-content");
  if (!study) {
    container.innerHTML = `<div class="study-hero"><h2>${lv.name}</h2><p>${lv.lesson || "暂无学习资料"}</p></div>`;
  } else {
    container.innerHTML = `
      <div class="study-hero">
        <h2>${lv.enemy} ${lv.name}</h2>
        <p>${study.summary}</p>
      </div>
      <div class="study-section">
        <h3>📌 核心知识点</h3>
        <ul>${study.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>
      <div class="study-section">
        <h3>💻 代码示例</h3>
        <div class="study-example">${escHtml(study.example)}</div>
        <div class="study-tip">${study.tip}</div>
      </div>
      <div class="study-section study-exam">
        <h3>🎯 本关考点（等会儿要考的）</h3>
        <ul>${study.exam.map(e => `<li>${e}</li>`).join("")}</ul>
      </div>`;
  }
  showScreen("screen-study");
}

function beginBattle() {
  qIndex = 0;
  enemyHp = 100;
  currentQuestionAnswered = false;
  questionWrongCount = 0;
  const lv = REGIONS[currentRegion].levels[currentLevel];
  document.getElementById("battle-title").textContent = REGIONS[currentRegion].name + " · " + lv.name;
  document.getElementById("enemy-sprite").textContent = lv.enemy;
  document.getElementById("enemy-name").textContent = lv.bug;
  document.getElementById("lesson-card").style.display = "none";
  showScreen("screen-battle");
  renderQuestion();
}

function isFillQuestion(q) { return q.type === "fill"; }

function countBlanks(code) {
  return (code.match(/___/g) || []).length;
}

function getExpectedAnswers(q) {
  const blankCount = countBlanks(q.code);
  if (q.answers.length === blankCount) return q.answers;
  if (q.answers.length === 1 && blankCount > 1) {
    return Array(blankCount).fill(q.answers[0]);
  }
  return q.answers;
}

function normalizeFill(s) {
  return String(s || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function checkFillAnswers(inputs, q) {
  const answers = getExpectedAnswers(q);
  if (inputs.length !== answers.length) return false;
  return inputs.every((val, i) => {
    const exp = answers[i];
    const norm = normalizeFill(val);
    if (Array.isArray(exp)) return exp.some(e => normalizeFill(e) === norm);
    return normalizeFill(exp) === norm;
  });
}

function formatFillHint(q, expected) {
  if (expected.length === 2 && expected[0] === expected[1] && q.code.includes("<___>")) {
    return `<${expected[0]}>…</${expected[0]}>`;
  }
  return expected.join(" / ");
}

function revealCorrectAnswer(q) {
  if (isFillQuestion(q)) {
    const expected = getExpectedAnswers(q);
    const inputs = [...document.querySelectorAll("#fill-wrap .fill-input")];
    inputs.forEach((inp, i) => {
      inp.value = expected[i] || "";
      inp.classList.remove("wrong");
      inp.classList.add("correct");
      inp.disabled = true;
    });
    document.getElementById("btn-submit-fill").style.display = "none";
    showRetryFeedback(
      "💡 已错 " + MAX_WRONG_HINT + " 次，正确答案：" + formatFillHint(q, expected) + "。" + q.exp,
      true
    );
  } else {
    document.querySelectorAll(".opt-btn").forEach((b, i) => {
      b.disabled = true;
      if (i === q.ans) b.classList.add("correct");
    });
    showRetryFeedback(
      "💡 已错 " + MAX_WRONG_HINT + " 次，正确答案：" + q.opts[q.ans] + "。" + q.exp,
      true
    );
  }
  onQuestionCorrect(q);
}

function renderQuestion() {
  currentQuestionAnswered = false;
  const lv = REGIONS[currentRegion].levels[currentLevel];
  const q = lv.questions[qIndex];
  const isFill = isFillQuestion(q);

  document.getElementById("enemy-hp").style.width = enemyHp + "%";
  document.getElementById("question-text").innerHTML =
    `第 ${qIndex + 1}/${lv.questions.length} 题：${q.q}` +
    `<span class="q-type-tag ${isFill ? "" : "choice"}">${isFill ? "⌨️ 代码填空" : "📝 选择题"}</span>`;

  document.getElementById("code-display").innerHTML =
    !isFill && q.code ? `<div class="code-block">${escHtml(q.code)}</div>` : "";

  const optsEl = document.getElementById("options");
  const fillWrap = document.getElementById("fill-wrap");
  const submitFill = document.getElementById("btn-submit-fill");
  const nextBtn = document.getElementById("btn-next-q");

  optsEl.innerHTML = "";
  fillWrap.innerHTML = "";
  fillWrap.style.display = "none";
  submitFill.style.display = "none";
  nextBtn.style.display = "none";

  const fb = document.getElementById("feedback");
  fb.className = "feedback";
  fb.textContent = "";

  if (isFill) {
    fillWrap.style.display = "block";
    const codeBox = document.createElement("div");
    codeBox.className = "fill-code";
    const lines = q.code.split("\n");
    let blankIdx = 0;
    lines.forEach(line => {
      const row = document.createElement("div");
      row.className = "fill-line";
      const parts = line.split("___");
      parts.forEach((part, pi) => {
        if (part) row.appendChild(document.createTextNode(part));
        if (pi < parts.length - 1) {
          blankIdx++;
          const inp = document.createElement("input");
          inp.type = "text";
          inp.className = "fill-input";
          inp.autocomplete = "off";
          inp.spellcheck = false;
          inp.placeholder = `空${blankIdx}`;
          inp.onkeydown = (e) => { if (e.key === "Enter") submitFillAnswer(); };
          row.appendChild(inp);
        }
      });
      codeBox.appendChild(row);
    });
    fillWrap.appendChild(codeBox);

    submitFill.style.display = "inline-block";
    submitFill.textContent = "提交答案";
    submitFill.disabled = false;
    submitFill.onclick = submitFillAnswer;
  } else {
    q.opts.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.textContent = opt;
      btn.onclick = () => answerChoice(i);
      optsEl.appendChild(btn);
    });
  }
}

function onQuestionCorrect(q) {
  currentQuestionAnswered = true;
  const lv = REGIONS[currentRegion].levels[currentLevel];
  state.totalCorrect++;
  const dmg = Math.ceil(100 / lv.questions.length);
  enemyHp = Math.max(0, enemyHp - dmg);
  addXp(XP_PER_Q);
  document.getElementById("enemy-hp").style.width = enemyHp + "%";

  const nextBtn = document.getElementById("btn-next-q");
  nextBtn.style.display = "inline-block";
  nextBtn.textContent = qIndex >= lv.questions.length - 1 ? "完成关卡 ✓" : "下一题 →";
  nextBtn.onclick = advanceQuestion;
}

function showRetryFeedback(msg, isOk) {
  const fb = document.getElementById("feedback");
  fb.classList.add("show", isOk ? "ok" : "err");
  fb.textContent = msg;
}

function answerChoice(chosen) {
  if (currentQuestionAnswered) return;
  const lv = REGIONS[currentRegion].levels[currentLevel];
  const q = lv.questions[qIndex];
  const correct = chosen === q.ans;
  state.totalAnswered++;

  document.querySelectorAll(".opt-btn").forEach((b, i) => {
    b.disabled = true;
    if (correct && i === q.ans) b.classList.add("correct");
    else if (i === chosen && !correct) b.classList.add("wrong");
  });

  if (correct) {
    showRetryFeedback("✅ 正确！" + q.exp, true);
    onQuestionCorrect(q);
  } else {
    questionWrongCount++;
    if (questionWrongCount >= MAX_WRONG_HINT) {
      revealCorrectAnswer(q);
      return;
    }
    showRetryFeedback(
      "❌ 答错了，请重新作答。（还剩 " + (MAX_WRONG_HINT - questionWrongCount) + " 次机会）",
      false
    );
    const nextBtn = document.getElementById("btn-next-q");
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = "再答一次";
    nextBtn.onclick = () => renderQuestion();
  }
}

function submitFillAnswer() {
  if (currentQuestionAnswered) return;
  const lv = REGIONS[currentRegion].levels[currentLevel];
  const q = lv.questions[qIndex];
  const inputs = [...document.querySelectorAll("#fill-wrap .fill-input")];
  const values = inputs.map(inp => inp.value);

  if (values.some(v => !v.trim())) {
    showRetryFeedback("⚠️ 请先填完所有空白再提交。", false);
    return;
  }

  state.totalAnswered++;
  const expected = getExpectedAnswers(q);
  const correct = checkFillAnswers(values, q);
  const submitBtn = document.getElementById("btn-submit-fill");

  if (correct) {
    inputs.forEach(inp => { inp.classList.remove("wrong"); inp.classList.add("correct"); inp.disabled = true; });
    submitBtn.style.display = "none";
    showRetryFeedback("✅ 代码正确！" + q.exp, true);
    onQuestionCorrect(q);
  } else {
    questionWrongCount++;
    if (questionWrongCount >= MAX_WRONG_HINT) {
      revealCorrectAnswer(q);
      return;
    }
    inputs.forEach(inp => {
      inp.classList.add("wrong");
      setTimeout(() => inp.classList.remove("wrong"), 400);
    });
    showRetryFeedback(
      "❌ 答案不对，请修改后重新提交。（还剩 " + (MAX_WRONG_HINT - questionWrongCount) + " 次机会）",
      false
    );
    submitBtn.textContent = "重新提交";
  }
}

function advanceQuestion() {
  if (!currentQuestionAnswered) return;
  qIndex++;
  questionWrongCount = 0;
  const lv = REGIONS[currentRegion].levels[currentLevel];
  if (qIndex >= lv.questions.length) {
    finishLevel();
  } else {
    renderQuestion();
  }
}

function finishLevel() {
  const key = levelKey(currentRegion, currentLevel);
  const lv = REGIONS[currentRegion].levels[currentLevel];
  const firstClear = !state.cleared[key];
  state.cleared[key] = Date.now();
  if (firstClear && lv.boss) addXp(XP_BOSS_BONUS);
  saveState();

  const all = allLevels();
  const total = countCleared();
  const isFinal = total >= totalLevels();

  document.getElementById("victory-emoji").textContent = isFinal ? "🏆" : (lv.boss ? "👑" : "🎉");
  document.getElementById("victory-title").textContent = isFinal ? "前端冒险 · 全通关！" : "关卡完成！";
  document.getElementById("victory-msg").innerHTML = isFinal
    ? `<strong>恭喜毕业！</strong>你已掌握 HTML/CSS/JS/DOM/H5 全部核心知识。<br/>对应学习计划 W1-W2 前端部分已覆盖。<br/>接下来：打开真实 H5 项目，用 F12 验收 + AI 实现页面。`
    : `击败了 <strong>${lv.bug}</strong>！获得 ${lv.questions.length * XP_PER_Q + (lv.boss && firstClear ? XP_BOSS_BONUS : 0)} XP<br/>进度：${total}/${totalLevels()} 关`;
  document.getElementById("overlay-victory").classList.add("show");
}

function showReport() {
  const total = totalLevels();
  const cleared = countCleared();
  const pct = Math.round(cleared / total * 100);
  const accuracy = state.totalAnswered ? Math.round(state.totalCorrect / state.totalAnswered * 100) : 0;
  document.getElementById("report-grid").innerHTML = `
    <div class="report-item"><div class="val">${cleared}/${total}</div>关卡进度</div>
    <div class="report-item"><div class="val">${pct}%</div>完成度</div>
    <div class="report-item"><div class="val">Lv.${state.lv}</div>角色等级</div>
    <div class="report-item"><div class="val">${accuracy}%</div>答题正确率</div>`;

  const topics = REGIONS.map(r => {
    const c = r.levels.filter((_, li) => state.cleared[levelKey(REGIONS.indexOf(r), li)]).length;
    return `${r.icon} ${r.name}：${c}/${r.levels.length}`;
  }).join("<br/>");

  document.getElementById("report-detail").innerHTML = `
    <strong>知识覆盖：</strong><br/>${topics}<br/><br/>
    <strong>与学习计划对应：</strong><br/>
    📄 HTML 森林 → W1 读码 D3-D4<br/>
    🎨 CSS 峡谷 → W1 读码 D5-D6<br/>
    ⚡ JS 火山 → W1-W2 JS 验收<br/>
    🖱️ DOM 平原 → W2 F12 交互验收<br/>
    🚀 H5 之城 → W2 八条目标全过<br/><br/>
    ${pct >= 100 ? "🎓 <strong style='color:var(--ok)'>前端游戏课已毕业！</strong> 可以进入真实项目实战。" : "继续推进，每天 2-3 关即可，比看文档轻松多了。"}`;

  document.getElementById("overlay-report").classList.add("show");
}

function escHtml(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function updateStartScreen() {
  const cleared = countCleared();
  const stats = document.getElementById("start-stats");
  const btnContinue = document.getElementById("btn-continue");
  if (cleared > 0) {
    stats.textContent = `已有进度：${cleared}/${totalLevels()} 关 · Lv.${state.lv}`;
    btnContinue.style.display = "inline-block";
  }
}



function initGame() {
  try {
    document.getElementById("btn-start").onclick = () => {
      renderMap();
      showScreen("screen-map");
      if (countCleared() === 0) { state.startedAt = Date.now(); saveState(); }
    };
    document.getElementById("btn-continue").onclick = () => {
      renderMap();
      showScreen("screen-map");
    };
    document.getElementById("btn-back-map").onclick = () => { renderMap(); showScreen("screen-map"); };
    document.getElementById("btn-back-study").onclick = () => openStudy(currentRegion, currentLevel);
    document.getElementById("btn-study-back").onclick = () => { renderMap(); showScreen("screen-map"); };
    document.getElementById("btn-review-later").onclick = () => { renderMap(); showScreen("screen-map"); };
    document.getElementById("btn-start-battle").onclick = () => beginBattle();
    document.getElementById("btn-victory-ok").onclick = () => {
      document.getElementById("overlay-victory").classList.remove("show");
      renderMap();
      showScreen("screen-map");
    };
    document.getElementById("btn-report").onclick = showReport;
    document.getElementById("btn-report-close").onclick = () => document.getElementById("overlay-report").classList.remove("show");
    document.getElementById("btn-reset").onclick = () => {
      if (confirm("确定重置所有进度？")) {
        state = defaultState();
        saveState();
        renderMap();
        updateStartScreen();
      }
    };
    updateStartScreen();
  } catch (err) {
    console.error("前端冒险初始化失败:", err);
    const el = document.getElementById("start-stats");
    if (el) el.textContent = "加载出错，请 Ctrl+F5 强制刷新";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGame);
} else {
  initGame();
}
