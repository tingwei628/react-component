## Event

### 何時用 bind?

> 只針對事件處理的才需要bind

> 例如 onClick

[Demo](https://jsfiddle.net/Laxqmuyu/)

* ES6 不會autobind

```js
class View extends React.Component {
  constructor() {
    this.handleClick = this.handleClick.bind(this); 
    // 前者 只是重新命名, 可以隨意命名給onClick用
    // 只是恰巧取名 this.handleClick = ....

    // 後者的 this.handleClick 的 this 指向 View 
  }
  handleClick() {
   // ...
  }
  render() {
    <div onClick={this.handleClick}></div>
  }
}
```


* ES5 會 autobind

```js

React.createClass({
  handleClick() {
   // ...
  }
  render() {
     <div onClick={this.handleClick}></div>
  }
})


```
