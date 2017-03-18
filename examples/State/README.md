## Functional State Change

> Thanks to [Functional setState is the future of React @Justice Mba](https://medium.freecodecamp.com/functional-setstate-is-the-future-of-react-374f30401b6b)

> Thanks to [Dive into React codebase: Handling state changes @Marcin Grzywaczewski](http://reactkungfu.com/2016/03/dive-into-react-codebase-handling-state-changes/)

### Introduction

1. Compare TWO ways to pass parameters to setState 

-  pass object to setState

```js
this.setState({ myState: this.state.myState + 1 });
```
 

-  pass functional state to setState

```js
this.setState((state, props) => ({ myState: state.myState + 1 }));
```
