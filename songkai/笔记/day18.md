

# SASS 

### 快速入门

1. 使用变量;

   1. SASS一个重要的特性就是它为CSS引入了变量。你可以把反复使用的css属性值定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值。或者，对于仅使用过一 次的属性值，你可以赋予其一个易懂的变量名，让人一眼就知道这个属性值的用途。

   2. 变量声明；

      `sass`变量的声明和`css`属性的声明很像：

      ```
      $highlight-color: #F90;
      ```

      这意味着变量`$highlight-color`现在的值是`#F90`。任何可以用作`css`属性值的赋值都 可以用作`sass`的变量值，甚至是以空格分割的多个属性值，如`$basic-border: 1px solid black;`，或以逗号分割的多个属性值，如`$plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica、"Liberation Sans"、Arial和sans-serif; sans-serif;`。这时变 量还没有生效，除非你引用这个变量——我们很快就会了解如何引用。

      与`CSS`属性不同，变量可以在`css`规则块定义之外存在。当变量定义在`css`规则块内，那么该变量只能在此规则块内使用。如果它们出现在任何形式的`{...}`块中（如`@media`或者`@font-face`块），情况也是如此：

      ```
      $nav-color: #F90;
      nav {
        $width: 100px;
        width: $width;
        color: $nav-color;
      }
      
      //编译后
      
      nav {
        width: 100px;
        color: #F90;
      }
      ```

      在这段代码中，`$nav-color`这个变量定义在了规则块外边，所以在这个样式表中都可以像 `nav`规则块那样引用它。`$width`这个变量定义在了`nav`的`{ }`规则块内，所以它只能在`nav`规则块 内使用。这意味着是你可以在样式表的其他地方定义和使用`$width`变量，不会对这里造成影响。

      只声明变量其实没啥用处，我们最终的目的还是使用它们。上例已介绍了如何使用 `$nav-color`和`$width`这两个变量，接下来我们将进一步探讨变量的使用方法。

   3. 变量引用；

      凡是`css`属性的标准值（比如说1px或者bold）可存在的地方，变量就可以使用。`css`生成时，变量会被它们的值所替代。之后，如果你需要一个不同的值，只需要改变这个变量的值，则所有引用此变量的地方生成的值都会随之改变。

      ```
      $highlight-color: #F90;
      .selected {
        border: 1px solid $highlight-color;
      }
      
      //编译后
      
      .selected {
        border: 1px solid #F90;
      }
      ```

      看上边示例中的`$highlight-color`变量，它被直接赋值给`border`属性，当这段代码被编译输出`css`时，`$highlight-color`会被`#F90`这一颜色值所替代。产生的效果就是给`selected`这个类一条1像素宽、实心且颜色值为`#F90`的边框。

      在声明变量时，变量值也可以引用其他变量。当你通过粒度区分，为不同的值取不同名字时，这相当有用。下例在独立的颜色值粒度上定义了一个变量，且在另一个更复杂的边框值粒度上也定义了一个变量：

      ```
      $highlight-color: #F90;
      $highlight-border: 1px solid $highlight-color;
      .selected {
        border: $highlight-border;
      }
      
      //编译后
      
      .selected {
        border: 1px solid #F90;
      }
      ```

      这里，`$highlight-border`变量的声明中使用了`$highlight-color`这个变量。产生的效 果就跟你直接为`border`属性设置了一个`1px` `$highlight-color solid`的值是一样的。 最后，我们来了解一下变量命名的实用技巧，以结束关于变量的介绍。

   4. `sass`的变量名可以与`css`中的属性名和选择器名称相同，包括中划线和下划线。这完全取决于个人的喜好，有些人喜欢使用中划线来分隔变量中的多个词（如`$highlight-color`），而有些人喜欢使用下划线（如`$highlight_color`）。使用中划线的方式更为普遍，这也是`compass`和本文都用的方式。

      不过，`sass`并不想强迫任何人一定使用中划线或下划线，所以这两种用法相互兼容。用中划线声明的变量可以使用下划线的方式引用，反之亦然。这意味着即使`compass`选择用中划线的命名方式，这并不影响你在使用`compass`的样式中用下划线的命名方式进行引用：

      ```
      $link-color: blue;
      a {
        color: $link_color;
      }
      
      //编译后
      
      a {
        color: blue;
      }
      ```

      在上例中，`$link-color`和`$link_color`其实指向的是同一个变量。实际上，在`sass`的大 多数地方，中划线命名的内容和下划线命名的内容是互通的，除了变量，也包括对混合器和Sass函数的命名。但是在`sass`中纯`css`部分不互通，比如类名、ID或属性名。

      尽管变量自身提供了很多有用的地方，但是`sass`基于变量提供的更为强大的工具才是我们关注的焦点。只有当变量与`sass`的其他特性一起使用时，才能发挥其全部的潜能。接下来，我们将探讨其中一个非常重要的特性，即规则嵌套。

2. 嵌套CSS规则

   `css`中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，往往需要 一遍又一遍地写同一个`ID`：

   ```
   #content article h1 { color: #333 }
   #content article p { margin-bottom: 1.4em }
   #content aside { background-color: #EEE }
   ```

   像这种情况，`sass`可以让你只写一遍，且使样式可读性更高。在Sass中，你可以像俄罗斯套娃那样在规则块中嵌套规则块。`sass`在输出`css`时会帮你把这些嵌套规则处理好，避免你的重复书写。

   ```
   #content {
     article {
       h1 { color: #333 }
       p { margin-bottom: 1.4em }
     }
     aside { background-color: #EEE }
   }
    /* 编译后 */
   #content article h1 { color: #333 }
   #content article p { margin-bottom: 1.4em }
   #content aside { background-color: #EEE }
   ```

   上边的例子，会在输出`css`时把它转换成跟你之前看到的一样的效果。这个过程中，`sass`用了两步，每一步都是像打开俄罗斯套娃那样把里边的嵌套规则块一个个打开。首先，把`#content`（父级）这个`id`放到`article`选择器（子级）和`aside`选择器（子级）的前边：

   ```
   #content {
     article {
       h1 { color: #333 }
       p { margin-bottom: 1.4em }
     }
     #content aside { background-color: #EEE }
   }
    /* 编译后 */
   #content article h1 { color: #333 }
   #content article p { margin-bottom: 1.4em }
   #content aside { background-color: #EEE }
   ```

   然后，`#content article`里边还有嵌套的规则，`sass`重复一遍上边的步骤，把新的选择器添加到内嵌的选择器前边。

   一个给定的规则块，既可以像普通的CSS那样包含属性，又可以嵌套其他规则块。当你同时要为一个容器元素及其子元素编写特定样式时，这种能力就非常有用了。

   ```
   #content {
     background-color: #f5f5f5;
     aside { background-color: #eee }
   }
   ```

   容器元素的样式规则会被单独抽离出来，而嵌套元素的样式规则会像容器元素没有包含任何属性时那样被抽离出来。

   ```
   #content { background-color: #f5f5f5 }
   #content aside { background-color: #eee }
   ```

   大多数情况下这种简单的嵌套都没问题，但是有些场景下不行，比如你想要在嵌套的选择器 里边立刻应用一个类似于`：hover`的伪类。为了解决这种以及其他情况，`sass`提供了一个特殊结 构`&`。

# 混合器;

如果你的整个网站中有几处小小的样式类似（例如一致的颜色和字体），那么使用变量来统一处理这种情况是非常不错的选择。但是当你的样式变得越来越复杂，你需要大段大段的重用样式的代码，独立的变量就没办法应付这种情况了。你可以通过`sass`的混合器实现大段样式的重用。

混合器使用`@mixin`标识符定义。看上去很像其他的`CSS @`标识符，比如说`@media`或者`@font-face`。这个标识符给一大段样式赋予一个名字，这样你就可以轻易地通过引用这个名字重用这段样式。下边的这段`sass`代码，定义了一个非常简单的混合器，目的是添加跨浏览器的圆角边框。

```
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

然后就可以在你的样式表中通过`@include`来使用这个混合器，放在你希望的任何地方。`@include`调用会把混合器中的所有样式提取出来放在`@include`被调用的地方。如果像下边这样写：

```
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

//sass最终生成：
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

在`.notice`中的属性`border-radius``-moz-border-radius`和`-webkit-border-radius`全部来自`rounded-corners`这个混合器。这一节将介绍使用混合器来避免重复。通过使用参数，你可以使用混合器把你样式中的通用样式抽离出来，然后轻松地在其他地方重用。实际上，混合器太好用了，一不小心你可能会过度使用。大量的重用可能会导致生成的样式表过大，导致加载缓慢。所以，首先我们将讨论混合器的使用场景，避免滥用。

# 何时使用混合器;

利用混合器，可以很容易地在样式表的不同地方共享样式。如果你发现自己在不停地重复一段样式，那就应该把这段样式构造成优良的混合器，尤其是这段样式本身就是一个逻辑单元，比如说是一组放在一起有意义的属性。

判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。如果你能找到一个很好的短名字来描述这些属性修饰的样式，比如`rounded-corners``fancy-font`或者`no-bullets`，那么往往能够构造一个合适的混合器。如果你找不到，这时候构造一个混合器可能并不合适。



混合器在某些方面跟`css`类很像。都是让你给一大段样式命名，所以在选择使用哪个的时候可能会产生疑惑。最重要的区别就是类名是在`html`文件中应用的，而混合器是在样式表中应用的。这就意味着类名具有语义化含义，而不仅仅是一种展示性的描述：用来描述`html`元素的含义而不是`html`元素的外观。而另一方面，混合器是展示性的描述，用来描述一条`css`规则应用之后会产生怎样的效果。

在之前的例子中，`.notice`是一个有语义的类名。如果一个`html`元素有一个`notice`的类名，就表明了这个`html`元素的用途：向用户展示提醒信息。`rounded-corners`混合器是展示性的，它描述了包含它的`css`规则最终的视觉样式，尤其是边框角的视觉样式。混合器和类配合使用写出整洁的`html`和`css`，因为使用语义化的类名亦可以帮你避免重复使用混合器。为了保持你的`html`和`css`的易读性和可维护性，在写样式的过程中一定要铭记二者的区别。

有时候仅仅把属性放在混合器中还远远不够，可喜的是，`sass`同样允许你把`css`规则放在混合器中。

# 混合器中的CSS规则;

混合器中不仅可以包含属性，也可以包含`css`规则，包含选择器和选择器中的属性，如下代码:

```
@mixin no-bullets {
  list-style: none;
  li {
    list-style-image: none;
    list-style-type: none;
    margin-left: 0px;
  }
}
```

当一个包含`css`规则的混合器通过`@include`包含在一个父规则中时，在混合器中的规则最终会生成父规则中的嵌套规则。举个例子，看看下边的`sass`代码，这个例子中使用了`no-bullets`这个混合器：

```
ul.plain {
  color: #444;
  @include no-bullets;
}
```

`sass`的`@include`指令会将引入混合器的那行代码替换成混合器里边的内容。最终，上边的例子如下代码:

```
ul.plain {
  color: #444;
  list-style: none;
}
ul.plain li {
  list-style-image: none;
  list-style-type: none;
  margin-left: 0px;
}
```

混合器中的规则甚至可以使用`sass`的父选择器标识符`&`。使用起来跟不用混合器时一样，`sass`解开嵌套规则时，用父规则中的选择器替代`&`。

如果一个混合器只包含`css`规则，不包含属性，那么这个混合器就可以在文档的顶部调用，写在所有的`css`规则之外。如果你只是为自己写一些混合器，这并没有什么大的用途，但是当你使用一个类似于`Compass`的库时，你会发现，这是提供样式的好方法，原因在于你可以选择是否使用这些样式。

接下来你将学习如何通过给混合器传参数来让混合器变得更加灵活和可重用。

# 给混合器传参;

混合器并不一定总得生成相同的样式。可以通过在`@include`混合器时给混合器传参，来定制混合器生成的精确样式。当`@include`混合器时，参数其实就是可以赋值给`css`属性值的变量。如果你写过`JavaScript`，这种方式跟`JavaScript`的`function`很像：

```
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

当混合器被`@include`时，你可以把它当作一个`css`函数来传参。如果你像下边这样写：

```
a {
  @include link-colors(blue, red, green);
}

//Sass最终生成的是：

a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```

当你@include混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，`sass`允许通过语法`$name: value`的形式指定每个参数的值。这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可：

```
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}
```

尽管给混合器加参数来实现定制很好，但是有时有些参数我们没有定制的需要，这时候也需要赋值一个变量就变成很痛苦的事情了。所以`sass`允许混合器声明时给参数赋默认值。

# 默认参数值;

为了在`@include`混合器时不必传入所有的参数，我们可以给参数指定一个默认值。参数默认值使用`$name: default-value`的声明形式，默认值可以是任何有效的`css`属性值，甚至是其他参数的引用，如下代码：

```
@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

如果像下边这样调用：`@include link-colors(red)` `$hover`和`$visited`也会被自动赋值为`red`。

混合器只是`sass`样式重用特性中的一个。我们已经了解到混合器主要用于样式展示层的重用，如果你想重用语义化的类呢？这就涉及`sass`的另一个重要的重用特性：选择器继承。

# 使用选择器继承来精简CSS;

使用`sass`的时候，最后一个减少重复的主要特性就是选择器继承。基于`Nicole Sullivan`面向对象的`css`的理念，选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。这个通过`@extend`语法实现，如下代码:

```
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

在上边的代码中，`.seriousError`将会继承样式表中任何位置处为`.error`定义的所有样式。以`class="seriousError"` 修饰的`html`元素最终的展示效果就好像是`class="seriousError error"`。相关元素不仅会拥有一个`3px`宽的边框，而且这个边框将变成红色的，这个元素同时还会有一个浅红色的背景，因为这些都是在`.error`里边定义的样式。

`.seriousError`不仅会继承`.error`自身的所有样式，任何跟`.error`有关的组合选择器样式也会被`.seriousError`以组合选择器的形式继承，如下代码:

```
//.seriousError从.error继承样式
.error a{  //应用到.seriousError a
  color: red;
  font-weight: 100;
}
h1.error { //应用到hl.seriousError
  font-size: 1.2rem;
}
```

如上所示，在`class="seriousError"`的`html`元素内的超链接也会变成红色和粗体。

本节将介绍与混合器相比，哪种情况下更适合用继承。接下来在探索继承的工作细节之前，我们先了解一下继承的高级用法。最后，我们将看看使用继承可能会有哪些坑，学习如何避免这些坑。

#  何时使用继承;

5-1节介绍了[混合器](https://www.sass.hk/guide/)主要用于展示性样式的重用，而类名用于语义化样式的重用。因为继承是基于类的（有时是基于其他类型的选择器），所以继承应该是建立在语义化的关系上。当一个元素拥有的类（比如说`.seriousError`）表明它属于另一个类（比如说`.error`），这时使用继承再合适不过了。

这有点抽象，所以我们从几个方面来阐释一下。想象一下你正在编写一个页面，给`html`元素添加类名，你发现你的某个类（比如说`.seriousError`）另一个类（比如说`.error`）的细化。你会怎么做？

- 你可以为这两个类分别写相同的样式，但是如果有大量的重复怎么办？使用`sass`时，我们提倡的就是不要做重复的工作。
- 你可以使用一个选择器组（比如说`.error``.seriousError`）给这两个选择器写相同的样式。如果.error的所有样式都在同一个地方，这种做法很好，但是如果是分散在样式表的不同地方呢？再这样做就困难多了。
- 

- 你可以使用一个混合器为这两个类提供相同的样式，但当`.error`的样式修饰遍布样式表中各处时，这种做法面临着跟使用选择器组一样的问题。这两个类也不是恰好有相同的 样式。你应该更清晰地表达这种关系。
- 综上所述你应该使用`@extend`。让`.seriousError`从`.error`继承样式，使两者之间的关系非常清晰。更重要的是无论你在样式表的哪里使用`.error``.seriousError`都会继承其中的样式。

现在你已经更好地掌握了何时使用继承，以及继承有哪些突出的优点，接下来我们看看一些高级用法。

# 继承的高级用法;

任何`css`规则都可以继承其他规则，几乎任何`css`规则也都可以被继承。大多数情况你可能只想对类使用继承，但是有些场合你可能想做得更多。最常用的一种高级用法是继承一个`html`元素的样式。尽管默认的浏览器样式不会被继承，因为它们不属于样式表中的样式，但是你对`html`元素添加的所有样式都会被继承。

接下来的这段代码定义了一个名为`disabled`的类，样式修饰使它看上去像一个灰掉的超链接。通过继承a这一超链接元素来实现：

```
.disabled {
  color: gray;
  @extend a;
}
```

假如一条样式规则继承了一个复杂的选择器，那么它只会继承这个复杂选择器命中的元素所应用的样式。举例来说， 如果`.seriousError``@extend``.important.error` ， 那么`.important.error` 和`h1.important.error` 的样式都会被`.seriousError`继承， 但是`.important`或者`.error下`的样式则不会被继承。这种情况下你很可能希望`.seriousError`能够分别继承`.important`或者`.error`下的样式。

如果一个选择器序列（`#main .seriousError`）`@extend`另一个选择器（`.error`），那么只有完全匹配`#main .seriousError`这个选择器的元素才会继承`.error`的样式，就像单个类 名继承那样。拥有`class="seriousError"`的`#main`元素之外的元素不会受到影响。

像`#main .error`这种选择器序列是不能被继承的。这是因为从`#main .error`中继承的样式一般情况下会跟直接从`.error`中继承的样式基本一致，细微的区别往往使人迷惑。

现在你已经了解了通过继承能够做些什么事情，接下来我们将学习继承的工作细节，在生成对应`css`的时候，`sass`具体干了些什么事情。

# 继承的工作细节;

跟变量和混合器不同，继承不是仅仅用`css`样式替换@extend处的代码那么简单。为了不让你对生成的`css`感觉奇怪，对这背后的工作原理有一定了解是非常重要的。

`@extend`背后最基本的想法是，如果`.seriousError @extend .error`， 那么样式表中的任何一处`.error`都用`.error``.seriousError`这一选择器组进行替换。这就意味着相关样式会如预期那样应用到`.error`和`.seriousError`。当`.error`出现在复杂的选择器中，比如说`h1.error``.error a`或者`#main .sidebar input.error[type="text"]`，那情况就变得复杂多了，但是不用担心，`sass`已经为你考虑到了这些。

关于`@extend`有两个要点你应该知道。

- 跟混合器相比，继承生成的`css`代码相对更少。因为继承仅仅是重复选择器，而不会重复属性，所以使用继承往往比混合器生成的`css`体积更小。如果你非常关心你站点的速度，请牢记这一点。
- 继承遵从`css`层叠的规则。当两个不同的`css`规则应用到同一个`html`元素上时，并且这两个不同的`css`规则对同一属性的修饰存在不同的值，`css`层叠规则会决定应用哪个样式。相当直观：通常权重更高的选择器胜出，如果权重相同，定义在后边的规则胜出。

混合器本身不会引起`css`层叠的问题，因为混合器把样式直接放到了`css`规则中，而继承存在样式层叠的问题。被继承的样式会保持原有定义位置和选择器权重不变。通常来说这并不会引起什么问题，但是知道这点总没有坏处。

# 使用继承的最佳实践;

通常使用继承会让你的`css`美观、整洁。因为继承只会在生成`css`时复制选择器，而不会复制大段的`css`属性。但是如果你不小心，可能会让生成的`css`中包含大量的选择器复制。

避免这种情况出现的最好方法就是不要在`css`规则中使用后代选择器（比如`.foo .bar`）去继承`css`规则。如果你这么做，同时被继承的`css`规则有通过后代选择器修饰的样式，生成`css`中的选择器的数量很快就会失控：

```
.foo .bar { @extend .baz; }
.bip .baz { a: b; }
```

在上边的例子中，`sass`必须保证应用到.baz的样式同时也要应用到`.foo .bar`（位于class="foo"的元素内的class="bar"的元素）。例子中有一条应用到`.bip .baz`（位于class="bip"的元素内的class="baz"的元素）的`css`规则。当这条规则应用到`.foo .bar`时，可能存在三种情况，如下代码:

```
<!-- 继承可能迅速变复杂 -->
<!-- Case 1 -->
<div class="foo">
  <div class="bip">
    <div class="bar">...</div>
  </div>
</div>
<!-- Case 2 -->
<div class="bip">
  <div class="foo">
    <div class="bar">...</div>
  </div>
</div>
<!-- Case 3 -->
<div class="foo bip">
  <div class="bar">...</div>
</div>
```

为了应付这些情况，`sass`必须生成三种选择器组合（仅仅是.bip .foo .bar不能覆盖所有情况）。如果任何一条规则里边的后代选择器再长一点，`sass`需要考虑的情况就会更多。实际上`sass`并不总是会生成所有可能的选择器组合，即使是这样，选择器的个数依然可能会变得相当大，所以如果允许，尽可能避免这种用法。

值得一提的是，只要你想，你完全可以放心地继承有后代选择器修饰规则的选择器，不管后代选择器多长，但有一个前提就是，不要用后代选择器去继承。