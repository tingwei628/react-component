## Functional State Change

> Thanks to [Functional setState is the future of React @Justice Mba](https://medium.freecodecamp.com/functional-setstate-is-the-future-of-react-374f30401b6b)

### Introduction

1. Compare TWO ways to pass parameters to setState 

-  pass object to setState

```js
this.setState({ myState: myState + 1 });
```
 

-  pass functional state to setState

```js
this.setState((state, props) => ({ myState: myState + 1 }));
```
