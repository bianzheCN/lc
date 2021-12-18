# Flex

## 参考

[https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html] 阮一峰

## Why

对于布局的传统解决方案，用 `display`, `position` 和 `float`。他对于那些特殊的布局非常不方便，比如垂直居中；还有三个盒子一个居中，一个靠左，另一个靠右，这个就很难。

用 Flex 可以简单地进行响应式布局，他引入了新的布局方案，其中包括一些新概念，非常灵活

## How

使用 flex 布局的元素，只需要:

```css
.box {
    display: flex;
}
```

这之后，这个元素就是 Flex container，他的所有子元素称为 flex item，我们简称 item。
对于 container, 他有一个主轴和交叉轴的概念，在布局的时候会用到

### container 的属性

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

#### flex-direction

意义：主轴的方向
值：row(default) | row-reverse | column | column-reverse

其中：
row    / row-reverse    代表主轴位于水平方向，row 是从左到右排，row-reverse 相反
column / column-reverse 代表主轴位于垂直方向，column 从上到下排，column-reverse 相反

#### flex-wrap

意义：如果轴上排不下，是否换行
值：nowrap(default) | wrap | wrap-reverse

其中：
nowrap: 不换行
wrap: 换行，第二行会出现在第一行下面（flex-direction :row），如果 flex-direction: column，则会出现在右面
wrap-reverse: 与上面的情况相反

#### flex-flow

意义：flex-direction & flex-wrap 的缩写
值：`<flex-direction> <flex-wrap>`

#### justify-content

意义：item 在主轴上的对齐方式
值：flex-start(default) | flex-end | space-between | space-around

其中：
flex-start: 左对齐
flex-end: 右对齐
center: 居中
space-between: 两端对齐，item 之间的距离是相等的
space-around: item 两边的间隔是相等的，所以在两头的 item 距离边框的距离是 item 与 item 之间的 1 / 2

#### align-items

意义：在**交叉轴**上如何对齐
值：flex-start | flex-end | center | baseline | stretch(default)

其中：
前三个和上边一样，另外：
base-line 表示和 item 第一行文字基线去对齐
stretch: 如果 item 没设置高度或为 auto，那么会拉伸 item 让他占据整个的容器高度或宽度

#### align-content

意义：定义多根**轴线**在交叉轴如何对齐，只有一个轴线不生效
值：flex-start | flex-end | center | space-between | space-around | stretch(占满整个交叉轴);
注：如果设置了 flex: nowrap，align-content 不生效

### item 的属性

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

#### order

意义：**排序**的优先级，越大越靠前

#### flex-grow

意义：用于分配剩余空间，表示对于存在剩余空间的情况，是否**放大**元素
值：`<number> (default 0)`(负值不合法)
注：
如果不存在剩余空间，比如宽度 `600px` 的 container, 有 3 个 `200px` 的 item，那么其中一个 item `flex-grow` 设置多大的值也是没用的～,
另外如果都设置了 `flex-grow` 或者其中几个 item 设置，那么他们的大小(宽度/高度) 比例就是他们所设置的值的比例

#### flex-shrink

意义：用于分配剩余空间，表示在剩余空间不够的情况下，会不会**缩小** item
值：`<number> (default 1)`(负值不合法)
注：
不论设置了 `width` 还是 `flex-basis` 都会缩小，和 `flex-grow` 一样，都有比例关系

#### flex-basis

意义：用于计算剩余空间，在分配剩余空间之前，会根据这个属性来计算 item 占据主轴的空间
值：`<length> | auto(default)`

#### align-self

意义：覆盖 container 的 `align-items`
