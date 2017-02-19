/*
  How to compose and generate a HOC(High Order Component)
  ES6
*/
import React from 'react';
import ReactDOM from 'react-dom';
const props = {style: {width: 100, height: 100, backgroundColor: 'red' }, text: 'WTF123'}; // props_you_want
const outProps = {style: { width: 200, height: 200, backgroundColor: 'blue' }};
function compose(InnerComponent) {
  return class Container extends React.Component {
    render() {
      const {props, outProps: { style }} = this.props
      return <div style={style}>
        <InnerComponent {...props}/>
      </div>
    }
  }
}

function Inner(props) {
  return <div style={props.style}>{props.text}</div>
}

const afterCompose = compose(Inner);

// <afterCompose /> is not right !
// Use React.createElement(afterCompose) instead !

ReactDOM.render(React.createElement(afterCompose, { props, outProps }), document.getElementById('app'));


if (process.env.NODE_ENV !== 'production') { // for hot reload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}
