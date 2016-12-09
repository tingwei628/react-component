import React from 'react';
import {render} from 'react-dom';
const compose = (Wrapper) => (props) => (<Wrapper {...props} />);
const props = {fn: compose, color: 'red', text: 'okkk'}; // props_you_want


function Inner(props) {
  return <div style={{ color : `${props.color}`}}>{props.text}</div>
}

function Outer(outProps) {
  const fn = outProps.fn; // compose function here!
  return (
    <div>{fn(Inner)(outProps)}</div> // first-order HOC
  );
}

render(<Outer {...props} />, document.querySelector('#app'));
