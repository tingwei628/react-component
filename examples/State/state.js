function Component() {
  this.state = {
    score: 0
  };
}
Component.prototype.setState = function(state) { // setState 方法
  if (typeof (state) === 'function') {
    this.state = Object.assign({}, this.state, state());
    return;
  }
  this.state = Object.assign({}, this.state, state);
};
function View(state) {
  Component.call(this, state);
  this.state = state;
}
function Inherit(extendComponent, prototype) { // 繼承 方法
  var T = Object.create(prototype);
  T.constructor = extendComponent;
  extendComponent.prototype = T;
}
Inherit(View, Component.prototype); // View 繼承 Component

var myView = new View({score: 4}); // new View Instance

myView.setState({ score: myView.state.score + 1 });
myView.setState({ score: myView.state.score + 1 });
myView.setState({ score: myView.state.score + 1 });
// myView.setState(() => ({score: myView.state.score + 1}));
// myView.setState(() => ({score: myView.state.score + 1}));
// myView.setState(() => ({score: myView.state.score + 1}));

console.log(myView.state);
