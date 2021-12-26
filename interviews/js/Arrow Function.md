# Arrow Function

## Diffs with Normal Function

- 没有自己的 `this`
- 不可以被当作构造函数，否则 `TypeError`(Uncaught TypeError: <Function_Name> is not a constructor)
- 没有 `arguments`，可以用 rest 参数代替
- 不能用 `yield`，所以不能被用作 Generator 函数

### 没有自己的 `this`

    上面四点中，最重要的是第一点。对于普通函数来说，内部的this指向函数运行时所在的对象，但是这一点对箭头函数不成立。它没有自己的this对象，内部的this就是定义时上层作用域中的this。也就是说，箭头函数内部的this指向是固定的，相比之下，普通函数的this指向是可变的。

## 箭头函数的优势

- 书写简单，简化了回调的书写
- 默认绑定了 `this` 为定义时所处上下文，`this` 是固定的

## 不适用箭头函数的场景

- 作为函数方法，内部需要用 `this`，调用该对象方法 `this` 会指向全局作用域
- 需要动态 `this`，因为箭头函数的 `this` 是固定的
