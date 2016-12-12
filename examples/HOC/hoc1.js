/*
  How to compose and generate a HOC(High Order Component)
  ES6
*/
import React from 'react';
import {render} from 'react-dom';
const compose = (Wrapper) => (props) => (<Wrapper {...props} />);
const props = {fn: compose, color: 'red', text: 'okkk'}; // props_you_want


function Inner(props) {
  return <div style={{ color : `${props.color}`}}>{props.text}</div>
}

const afterCompose = compose(Inner)(props);
render(afterCompose, document.querySelector('#app'));
