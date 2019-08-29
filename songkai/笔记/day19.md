# jQuery

1. jQuery是什么？

   jQuer是JavaScript中使用最广泛的一个库。

2. jQuery能做什么？

   - 消除浏览器差异：你不需要写冗长的代码来针对不同的浏览器来绑定事件，编写AJAX等代码；
   - 简洁的操作DOM的方法：写`` $(`#test`)``肯定比`` document.getElementById(`test`)``来得简洁；
   - 轻松实现动画、修改CSS等各种动作。
   
3. jQuery库包含的功能有哪些？

   - HTML元素选取
   - HTML元素操作
   - CSS操作
   - HTML事件函数
   - JavaScript特效和动画
   - HTML DOM遍历和修改
   - AJAX
   - Utilities

jQuery的理念：让你写更少的代码，完成更多的工作。



### $符号

` $`	是著名的jQuery符号。实际上，jQuery把所有功能全部封装在一个全局变量`jQuery`中，而`$`也是一个合法的变量名，它是变量`jQuery`的别名：

```
window.jQuery; // jQuery(selector, context)
window.$; // jQuery(selector, context)
$ === jQuery; // true
typeof($); // 'function'
```

`$`本质上就是一个函数，但是函数也是对象，于是`$`除了可以直接调用外，也可以有很多其他属性。

*注意*，你看到的`$`函数名可能不是`jQuery(selector, context)`，因为很多JavaScript压缩工具可以对函数名和参数改名，所以压缩过的jQuery源码`$`函数可能变成`a(b, c)`。

绝大多数时候，我们都直接用`$`（因为写起来更简单嘛）。但是，如果`$`这个变量不幸地被占用了，而且还不能改，那我们就只能让`jQuery`把`$`变量交出来，然后就只能使用`jQuery`这个变量：

```
$; // jQuery(selector, context)
jQuery.noConflict();
$; // undefined
jQuery; // jQuery(selector, context)
```

这种黑魔法的原理是jQuery在占用`$`之前，先在内部保存了原来的`$`,调用`jQuery.noConflict()`时会把原来保存的变量还原。

在jQuery中常用的选择器：类选择器、属性选择器、ID选择器等...

```html
<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <title>jQuery</title>    <script src="../jquery-3.4.1.js"></script>    <script src="jq01.js"></script></head><body>    <div style="font-size: 2em; width: auto; background-color: skyblue;color: black">Hello World!</div>    <p>p1</p>    <p id="p2">p2</p>    <button>click me</button></body></html>
```

```jquery
$(document).ready(function () {    $("button").click(function () {        $("#p2").text("p元素被修改了")    })})
```

