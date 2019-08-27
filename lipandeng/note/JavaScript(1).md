 c:/website/web/xz/index.htm
  c:/website/web/img/photo.jpg
  在此例中index.htm中联接的photo.jpg应该怎样表示呢？
  错误写法：../../img/photo.jpg

  正确写法：可以使用../img/photo.jpg的相对路径来定位文件
--------------------- 

Java是编译型语言，JavaScript是解释性语言    script   脚本

每条语句末尾加上；这是良好的编程习惯

注释：//和<!--效果是一样的-->都是表示注释，建议使用//

javaScript对允许直接赋值而不需要提前声明，但提前声明是良好的编程习惯

变量的命名和Java一样

escaping 转义字符，比如'don/'t  sleeping'   或者"用时5'33/"完成训练"，保证n t是字符串的一部分 -----推荐用""双引号

布尔不是字符串，不用用“”

数组 var name = [12,34,56]用中括号，数组可以使变量，可以是多种类型的混合存放，数组元素可以是其他数组的某个元素或其他数组 

空字符串和false相同   ，===用来比较数值，也会比较数据类型

DOM  document文档 object对象 model模型

BOM，Browser Object Model，即**浏览器对象模型**

DOCTYPE标签是一种标准通用标记语言的文档类型声明

charset  字符集

meta标签的charset的信息参数如UTF-8时，代表世界通用的语言编码。

**在HTML5中，在表达charset信息时可以简写，前面的内容可以去掉，即写法是： <meta charset="utf-8">**

      <meta http-equiv="content-Type" content="text/html; charset=GBK" >  简体中文

meta标签共有两个属性，它们分别是http-equiv属性和name属性      英[ˈmɛtə]

meta标签的name属性语法格式是：<meta name="参数" content="具体的参数值">；。

meta标签的http-equiv属性语法格式是：<meta http-equiv="参数" content="参数变量值"> 

Element      元素       Tag 标签

document.getElementsById("purchase");

  document.getElementsByClassName(class);

node 节点  结点

集成[开发环境](https://baike.baidu.com/item/开发环境)  [IDE](https://baike.baidu.com/item/IDE)，Integrated Development Environment 

**div**     : 是[层叠样式表](https://baike.baidu.com/item/层叠样式表/524980)中的定位技术，全称division，即为划分。有时可以称其为图层。 DIV元素是用来为[HTML](https://baike.baidu.com/item/HTML)（[标准通用标记语言](https://baike.baidu.com/item/标准通用标记语言/6805073)下的一个应用）文档内大块（block-level）的内容提供结构和背景的元素。

HTML : [超文本标记语言](https://baike.baidu.com/item/超文本标记语言/6972570)(**H**yper **T**ext **M**arkup **L**anguage)，[标准通用标记语言](https://baike.baidu.com/item/标准通用标记语言/6805073)下的一个应用。

`slice()`就是对应String的`substring()`版本

`push()`向`Array`的末尾添加若干元素，`pop()`则把`Array`的最后一个元素删除掉：

向`Array`的头部添加若干元素，使用`unshift()`方法，`shift()`方法则把`Array`的第一个元素删掉：

`concat()`方法把当前的`Array`和另一个`Array`连接起来，并返回一个新的`Array`：

console.log()         向 Web 控制台输出一条消息。

关键字`const`来定义常量，



设置html打开默认浏览器步骤:

文件--首选项--设置--输入"open"关键词搜索--打开工作区--修改为"chrome"

<br>换行符,break,< br ----标签是空标签（意味着它没有结束标签，因此这是错误的：<br></br>）。在 XHTML 中，把结束标签放在开始标签中，也就是 <br />

getElementById是返回的是对象,   getElementsByTagName 是返回的数组

getAttribute("属性"),只能通过元素节点对象调用,不能通过对象节点调用,返回属性值

button  [ˈbʌtn] 按钮    border 边界

```
<button onclick="copyText()">Copy Text</button>
```

页面加载之后立即执行一段 JavaScript：<body onload="load()">      语法格式<element onload="script">



```
<script type="text/javascript">1
```

表明放在之间的是文本类型(text)。 
javascript是告诉浏览器里面的text是个javascript脚本。

querySelector() 方法仅仅返回匹配指定选择器的第一个元素



innerHTML和innerText区别：

innerHTML返回的是标签内的 html内容，包含html标签。

innerText返回的是标签内的文本值，不包含html标签。

nav 标签定义导航链接的部分



<a href="#" οnclick="window.close()">关闭</a>

将href="#"是指联接到当前页面，其实是无意义的，页面也不会刷新，关键是后面的onclick，当点击“关闭”时，会执行window.close()代码。

 <b>这是粗体文本</b>     b

css把图像向右浮动：

```
img
  {
  float:right;
  }
```

class 属性大多数时候用于指向样式表中的类（class）

table border="8"               边距的样式

padding: 1cm 1cm       文档的四个边角组成的矩形与四个角的距离    



```
$(id)是js document.getElementById(id)的简写
```

```
function c$(o){return document.createElement(o);}
```

首先创建一个节点，
然后创建一个文本节点，
然后将文本节点添加到LI节点上。
最后将节点添加到列表中。

function myFunction(){
	var node=document.createElement("LI ");
	var textnode=document.createTextNode("Water");
	node.appendChild(textnode);
	document.getElementById("myList").appendChild(node);
}

```
element.setAttribute(attributename,attributevalue)
```

href 目的不是为了引用资源，而是为了建立联系，让当前标签能够链接到目标地址。----表示当前文档和引用资源的关系

src的概念 source（缩写），指向外部资源的位置，指向的内容将会应用到文档中当前标签所在位置---**用于替换当前元素** 



<button type="button" onclick="myFunction()">点击这里</button>-----两种表达方式------- <input type="button" onclick="myFunction()" value ="点击这里"></input>

| [getDate()](https://www.w3school.com.cn/jsref/jsref_getDate.asp) | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。 |
| ------------------------------------------------------------ | ------------------------------------------- |
| [getDay()](https://www.w3school.com.cn/jsref/jsref_getDay.asp) | 从 Date 对象返回一周中的某一天 (0 ~ 6)。    |

- **for/in** - 循环遍历对象的属性

​    var x;
​	var txt="";
​	var person={fname:"Bill",lname:"Gates",age:56}; 
​	for (x in person){
​		txt=txt + person[x];
​	}
​	document.getElementById("demo").innerHTML=txt;

BillGates56

typeof返回值有六种，分别是：

- number
- string
- Boolean
- object
- undefined
- function

var n = str.search(/Runoob/i);

var txt = str.replace(/microsoft/i,"Runoob");

**/runoob/i**  是一个正则表达式   

正则表达式加上i不区分大小写，，

search() 方法** 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置，如果没有返回-1

test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。

/e/.test("The best things in life are free!")

try catch 的异常捕获

isNaN() 函数用于检查其参数是否是非数字值，NaN 即 Not a Number

  try { 
    if(x == "") throw "值是空的";
    if(isNaN(x)) throw "值不是一个数字";
    x = Number(x);
    if(x > 10) throw "太大";
    if(x < 5) throw "太小";
  }
  catch(err) {
    message.innerHTML = "错误: " + err + ".";
  }

严格模式下你不能使用未声明的变量。

"use strict";
x = 3.14;       // 报错 (x 未定义)

# javascript中6种为false的值

**undefined           null            false            0            NaN (Not a Number)            空字符串**



type 属性规定 input 元素的类型

button  按钮  一般与onclick 连用   checkbox  复选框（男女）  file 文件上传   password 密码，隐藏显示   reset  重置按钮会清除表单中的所有数据   submit   发送表单数据到服务器，< form action=“”>    text    输入的文本格式

query  ˈkwɪəri



forms 集合返回当前页面所有表单的数组集合，表单是一个数组

form name="myForm" action="demo-form.php" onsubmit="return validateForm();" method="post">
p> Email: <input type="text" name="email"></p>
input type="submit" value="提交">
/form>

var x=document.forms   【"myForm"]["email"].value   name类比id属性，

validation     ˌvælɪˈdeɪʃən       验证

- 在方法中，this 表示该方法所属的对象。

- 如果单独使用，this 表示全局对象。

- 在函数中，this 表示全局对象。

- 在事件中，this 表示接收事件的元素。

  let 声明的变量只在 let 命令所在的代码块 **{}** 内有效，在 **{}** 之外不能访问

```
{ 
    let x = 2;
}
// 这里不能使用 x 变量
```

`const`定义常量与使用`let` 定义的变量   'kɒnst   英文意思 常数；

const 的本质: const 定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用 const 定义的对象或者数组，其实是可变的

## JSON 实例

{"sites":[     {"name":"Runoob", "url":"www.runoob.com"},    

  {"name":"Google", "url":"www.google.com"},   

  {"name":"Taobao", "url":"www.taobao.com"} ]}

## href="#"与href="javascript:void(0)"的区别

**#** 包含了一个位置信息，默认的锚是**#top** 也就是网页的上端。

而javascript:void(0), 仅仅表示一个死链接。

在页面很长的时候会使用 **#** 来定位页面的具体位置，格式为：**# + id**。

如果你要定义一个死链接请使用 javascript:void(0) 。

# JavaScript 代码规范

通常运算符 ( = + - * / ) 前后需要添加空格:

左花括号前添加一空格

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

例子    var myFunction = function (a, b) {return a * b}



如需改变 HTML 元素的属性，请使用这个语法：

document.getElementById(*id*).*attribute=新属性值*

<img id="image" src="smiley.gif">

<script>document.getElementById("image").src="landscape.jpg";</script>
正则表达式

\d{3}`表示匹配3个数字

`^\d`表示必须以数字开头

`\d$`表示必须以数字结束

`A|B`可以匹配A或B

`\s`可以匹配一个空格