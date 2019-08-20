## 改变大小写

通过这几个类可以改变文本的大小写。

lowercased text.

UPPERCASED TEXT.

Capitalized Text.

```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
```

## 缩略语

当鼠标悬停在缩写和缩写词上时就会显示完整内容，Bootstrap 实现了对 HTML 的 `<abbr>` 元素的增强样式。缩略语元素带有 `title` 属性，外观表现为带有较浅的虚线框，鼠标移至上面时会变成带有“问号”的指针。如想看完整的内容可把鼠标悬停在缩略语上（对使用辅助技术的用户也可见）, 但需要包含 title 属性。

### 基本缩略语

An abbreviation of the word attribute is attr.

```html
<abbr title="attribute">attr</abbr>
```

### 首字母缩略语

为缩略语添加 `.initialism` 类，可以让 font-size 变得稍微小些。

HTML is the best thing since sliced bread.

```html
<abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
```

## 地址

让联系信息以最接近日常使用的格式呈现。在每行结尾添加 `<br>` 可以保留需要的样式。

**Twitter, Inc.**
1355 Market Street, Suite 900
San Francisco, CA 94103
P: (123) 456-7890**Full Name**
[first.last@example.com](mailto:#)

```html
<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market Street, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>
```

## 引用

在你的文档中引用其他来源的内容。

### 默认样式的引用

将任何 HTML 元素包裹在 `<blockquote>` 中即可表现为引用样式。对于直接引用，我们建议用 `<p>` 标签。

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```

### 多种引用样式

对于标准样式的 `<blockquote>`，可以通过几个简单的变体就能改变风格和内容。

#### 命名来源

添加 `<footer>` 用于标明引用来源。来源的名称可以包裹进 `<cite>`标签中。

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
>
> Someone famous in Source Title

```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```

#### 另一种展示风格

通过赋予 `.blockquote-reverse` 类可以让引用呈现内容右对齐的效果。

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
>
> Someone famous in Source Title

```html
<blockquote class="blockquote-reverse">
  ...
</blockquote>
```

## 列表

### 无序列表

排列顺序*无关紧要*的一列元素。

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa
- Facilisis in pretium nisl aliquet
- Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
- Faucibus porta lacus fringilla vel
- Aenean sit amet erat nunc
- Eget porttitor lorem

```html
<ul>
  <li>...</li>
</ul>
```

### 有序列表

顺序*至关重要*的一组元素。

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem

```html
<ol>
  <li>...</li>
</ol>
```

### 无样式列表

移除了默认的 `list-style` 样式和左侧外边距的一组元素（只针对直接子元素）。**这是针对直接子元素的**，也就是说，你需要对所有嵌套的列表都添加这个类才能具有同样的样式。

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa
- Facilisis in pretium nisl aliquet
- Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
- Faucibus porta lacus fringilla vel
- Aenean sit amet erat nunc
- Eget porttitor lorem

```html
<ul class="list-unstyled">
  <li>...</li>
</ul>
```

### 内联列表

通过设置 `display: inline-block;` 并添加少量的内补（padding），将所有元素放置于同一行。

- Lorem ipsum
-  

- Phasellus iaculis
-  

- Nulla volutpat

```html
<ul class="list-inline">
  <li>...</li>
</ul>
```

### 描述

带有描述的短语列表。

- Description lists

  A description list is perfect for defining terms.

- Euismod

  Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.

  Donec id elit non mi porta gravida at eget metus.

- Malesuada porta

  Etiam porta sem malesuada magna mollis euismod.

```html
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

#### 水平排列的描述

`.dl-horizontal` 可以让 `<dl>` 内的短语及其描述排在一行。开始是像 `<dl>` 的默认样式堆叠在一起，随着导航条逐渐展开而排列在一行。

- Description lists

  A description list is perfect for defining terms.

- Euismod

  Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.

  Donec id elit non mi porta gravida at eget metus.

- Malesuada porta

  Etiam porta sem malesuada magna mollis euismod.

- Felis euismod semper eget lacinia

  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

```html
<dl class="dl-horizontal">
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

#### 自动截断

通过 `text-overflow` 属性，水平排列的描述列表将会截断左侧太长的短语。在较窄的视口（viewport）内，列表将变为默认堆叠排列的布局方式。

# 代码

## 内联代码

通过 `<code>` 标签包裹内联样式的代码片段。

For example, `<section>` should be wrapped as inline.

```html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
```

## 用户输入

通过 `<kbd>` 标签标记用户通过键盘输入的内容。

To switch directories, type cd followed by the name of the directory.
To edit settings, press ctrl + ,

```html
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
```

## 代码块

多行代码可以使用 `<pre>` 标签。为了正确的展示代码，注意将尖括号做转义处理。

```html
<p>Sample text here...</p>
<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
```

还可以使用 `.pre-scrollable` 类，其作用是设置 max-height 为 350px ，并在垂直方向展示滚动条。

## 变量

通过 `<var>` 标签标记变量。

y = mx + b

```html
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
```

## 程序输出

通过 `<samp>` 标签来标记程序输出的内容。

This text is meant to be treated as sample output from a computer program.

```html
<samp>This text is meant to be treated as sample output from a computer program.</samp>
```

# 表格

## 基本实例

为任意 `<table>` 标签添加 `.table` 类可以为其赋予基本的样式 — 少量的内补（padding）和水平方向的分隔线。这种方式看起来很多余！？但是我们觉得，表格元素使用的很广泛，如果我们为其赋予默认样式可能会影响例如日历和日期选择之类的插件，所以我们选择将此样式独立出来。

| #    | First Name | Last Name | Username |
| :--- | :--------- | :-------- | :------- |
| 1    | Mark       | Otto      | @mdo     |
| 2    | Jacob      | Thornton  | @fat     |
| 3    | Larry      | the Bird  | @twitter |

```html
<table class="table">
  ...
</table>
```



## 条纹状表格

通过 `.table-striped` 类可以给 `<tbody>` 之内的每一行增加斑马条纹样式。

#### 跨浏览器兼容性

条纹状表格是依赖 `:nth-child` CSS 选择器实现的，而这一功能不被 Internet Explorer 8 支持。

| #    | First Name | Last Name | Username |
| :--- | :--------- | :-------- | :------- |
| 1    | Mark       | Otto      | @mdo     |
| 2    | Jacob      | Thornton  | @fat     |
| 3    | Larry      | the Bird  | @twitter |

```html
<table class="table table-striped">
  ...
</table>
```



## 带边框的表格

添加 `.table-bordered` 类为表格和其中的每个单元格增加边框。

| #    | First Name | Last Name | Username |
| :--- | :--------- | :-------- | :------- |
| 1    | Mark       | Otto      | @mdo     |
| 2    | Jacob      | Thornton  | @fat     |
| 3    | Larry      | the Bird  | @twitter |

```html
<table class="table table-bordered">
  ...
</table>
```



## 鼠标悬停

通过添加 `.table-hover` 类可以让 `<tbody>` 中的每一行对鼠标悬停状态作出响应。

| #    | First Name | Last Name | Username |
| :--- | :--------- | :-------- | :------- |
| 1    | Mark       | Otto      | @mdo     |
| 2    | Jacob      | Thornton  | @fat     |
| 3    | Larry      | the Bird  | @twitter |

```html
<table class="table table-hover">
  ...
</table>
```



## 紧缩表格

通过添加 `.table-condensed` 类可以让表格更加紧凑，单元格中的内补（padding）均会减半。

| #    | First Name     | Last Name | Username |
| :--- | :------------- | :-------- | :------- |
| 1    | Mark           | Otto      | @mdo     |
| 2    | Jacob          | Thornton  | @fat     |
| 3    | Larry the Bird | @twitter  |          |

```html
<table class="table table-condensed">
  ...
</table>
```

## 状态类

通过这些状态类可以为行或单元格设置颜色。

| Class      | 描述                                 |
| :--------- | :----------------------------------- |
| `.active`  | 鼠标悬停在行或单元格上时所设置的颜色 |
| `.success` | 标识成功或积极的动作                 |
| `.info`    | 标识普通的提示信息或动作             |
| `.warning` | 标识警告或需要用户注意               |
| `.danger`  | 标识危险或潜在的带来负面影响的动作   |

| #    | Column heading | Column heading | Column heading |
| :--- | :------------- | :------------- | :------------- |
| 1    | Column content | Column content | Column content |
| 2    | Column content | Column content | Column content |
| 3    | Column content | Column content | Column content |
| 4    | Column content | Column content | Column content |
| 5    | Column content | Column content | Column content |
| 6    | Column content | Column content | Column content |
| 7    | Column content | Column content | Column content |
| 8    | Column content | Column content | Column content |
| 9    | Column content | Column content | Column content |

```html
<!-- On rows -->
<tr class="active">...</tr>
<tr class="success">...</tr>
<tr class="warning">...</tr>
<tr class="danger">...</tr>
<tr class="info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="active">...</td>
  <td class="success">...</td>
  <td class="warning">...</td>
  <td class="danger">...</td>
  <td class="info">...</td>
</tr>
```



#### 向使用辅助技术的用户传达用意

通过为表格中的一行或一个单元格添加颜色而赋予不同的意义只是提供了一种视觉上的表现，并不能为使用辅助技术 -- 例如屏幕阅读器 -- 浏览网页的用户提供更多信息。因此，请确保通过颜色而赋予的不同意义可以通过内容本身来表达（即在相应行或单元格中的可见的文本内容）；或者通过包含额外的方式 -- 例如应用了 `.sr-only` 类而隐藏的文本 -- 来表达出来。

## 响应式表格

将任何 `.table` 元素包裹在 `.table-responsive` 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。

#### 垂直方向的内容截断

响应式表格使用了 `overflow-y: hidden` 属性，这样就能将超出表格底部和顶部的内容截断。特别是，也可以截断下拉菜单和其他第三方组件。

#### Firefox 和 `fieldset` 元素

Firefox 浏览器对 `fieldset` 元素设置了一些影响 `width` 属性的样式，导致响应式表格出现问题。可以使用下面提供的针对 Firefox 的 hack 代码解决，但是以下代码并未集成在 Bootstrap 中：

```css
@-moz-document url-prefix() {
  fieldset { display: table-cell; }
}
```