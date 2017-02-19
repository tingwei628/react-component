/*
  How to compose and generate a HOC(High Order Component)
  ES6
*/
import React from 'react';
import ReactDOM from 'react-dom';
const compose = (Wrapper) => (props) => (<Wrapper {...props} />);
const props = {fn: compose, color: 'red', text: 'WTF123'}; // props_you_want


function Inner(props) {
  return <div style={{ color : `${props.color}`}}>{props.text}</div>
}

const afterCompose = compose(Inner)(props);

ReactDOM.render(afterCompose, document.getElementById('app'));
if (process.env.NODE_ENV !== 'production') { // for hot reload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}
