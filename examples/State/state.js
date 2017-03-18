/* Demo */
function Component() {
  this.state = {
    score: 0
  };
}
Component.prototype.setState = function(state, callback) { // setState 方法
  if (!state) {
    return;
  }
  this.state = Object.assign({}, this.state, state);
  if (typeof callback === 'function') {
    callback();
  }
};

function View(state, queue) {
  Component.call(this, state);
  this.state = state;
}
function Inherit(extendComponent, prototype) { // 繼承 方法
  var T = Object.create(prototype);
  T.constructor = extendComponent;
  extendComponent.prototype = T;
}
function addScore(queue) {
  var map = Array.prototype.map;
  if (queue.length === 0) {
    return;
  }
  if (typeof queue[0] === 'function') {
    map.call(queue, function(nextState) {
      this.setState(nextState.call(this, this.state));
    }.bind(this));
    return;
  }
  map.call(queue, function(nextState) {
    this.setState(nextState);
  }.bind(this));
}

Inherit(View, Component.prototype); // View 繼承 Component

var myView1 = new View({score: 4}); // new View Instance
var myView2 = new View({score: 4});

var queue1 = [
  { score: myView1.state.score + 1 },
  { score: myView1.state.score + 2 },
  { score: myView1.state.score + 3 }
];
var queue2 = [
  (state) => ({ score: state.score + 1 }),
  (state) => ({ score: state.score + 2 }),
  (state) => ({ score: state.score + 3 })
];

addScore.apply(myView1, [queue1]);
addScore.apply(myView2, [queue2]);

console.log(myView1.state);   // { score: 7 }
console.log(myView2.state);   // { score: 10 } 
console.log(myView1.state.score === myView2.state.score); // false !! wow
