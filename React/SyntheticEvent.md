# SyntheticEvent

## Why

- Handle the differences between browsers
- Bind with its **priority principles**
- Consider all browser built-in events

## Modules

- SyntheticEvent
- Simulation of broadcasting

## Implementation of SyntheticEvent

One thing needed to be mentioned here is that SyntheticEvent will not provide polyfill if the browser do not have certain event, due to the bundle size of ReactDOM

```javascript
class SyntheticEvent {
  constructor(e) {
    this.nativeEvent = e;
  }

  stopPropagation() {
    this._stopPropagation = true;
    if (this.nativeEvent.stopPropagation) {
      this.nativeEvent.stopPropagation();
    }
  }
}
```

### nativeEvent Prop

Receive built-in event object, return a wrapped one and the vanilla event object wiil be saved in `nativeEvent` prop

### stopPropagation method

### Caveat

In read React code there would be many other props and methods, this is just an easy implementation

## Implementation of Event broadcasting

### steps

- Bind a certain type of event handler to the root, triggering such type of event on nodes of descendants will delegate to the handler bound to root
- Search the DOM node that triggered this event, locating the `FiberNode`（virtual DOM node)
- Gather all the handlers registered from the current `FiberNode` to the root `FiberNode`
- Call them in reverse(simulation of capture)
- Call them forward(simulation of bubbling)

### Codes for Step1

```javascript
// 步骤1
const addEvent = (container, type) => {
  container.addEventListener(type, (e) => {
    // dispatchEvent是需要实现的“根节点的事件回调”
    dispatchEvent(e, type.toUpperCase(), container);
  });
};
```

### Register Click Callback in the Entry

```javascript
const root = document.querySelector("#root");
ReactDOM.render(jsx, root);
// 增加如下代码
addEvent(root, "click");
```

### Implementation of Callback of Root

```javascript
const dispatchEvent = (e, type) => {
  // 包装合成事件
  const se = new SyntheticEvent(e);
  const ele = e.target;
  
  // 比较hack的方法，通过DOM节点找到对应的FiberNode
  let fiber;
  for (let prop in ele) {
    if (prop.toLowerCase().includes("fiber")) {
      fiber = ele[prop];
    }
  }
  
  // 第三步：收集路径中“该事件的所有回调函数”
  const paths = collectPaths(type, fiber);
  
  // 第四步：捕获阶段的实现
  triggerEventFlow(paths, type + "CAPTURE", se);
  
  // 第五步：冒泡阶段的实现
  if (!se._stopPropagation) {
    triggerEventFlow(paths.reverse(), type, se);
  }
};
```

## Collect All Handlers along the Path

```javascript
const collectPaths = (type, begin) => {
  const paths = [];
  
  // 不是根FiberNode的话，就一直向上遍历
  while (begin.tag !== 3) {
    const { memoizedProps, tag } = begin;
    
    // 5代表DOM节点对应FiberNode
    if (tag === 5) {
      const eventName = ("on" + type).toUpperCase();
      
      // 如果包含对应事件回调，保存在paths中
      if (memoizedProps && Object.keys(memoizedProps).includes(eventName)) {
        const pathNode = {};
        pathNode[type.toUpperCase()] = memoizedProps[eventName];
        paths.push(pathNode);
      }
    }
    begin = begin.return;
  }
  
  return paths;
};
```
