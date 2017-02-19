/*
  How to compose and generate a HOC(High Order Component)
  ES6
*/
import React from 'react';
import ReactDOM from 'react-dom';
import * as utils from './utils';

const props = {style: {width: 100, height: 100, backgroundColor: 'grey' }, text: 'WTF123'}; // props_you_want
const outProps = {style: { width: 200, height: 200, backgroundColor: 'blue' }};

/* ---start of proxyPatternComp--- */
function composePropsProxy(InnerComponent) {
  return class PropsProxyContainer extends React.Component {
    render() {
      const {props, outProps: { style }} = this.props;
      return (<div style={style}>
        <InnerComponent {...props}/>
      </div>);
    }
  };
}
function Inner(props) {
  return (<div style={props.style}>{props.text}</div>);
}

const afterCompose = composePropsProxy(Inner);
// <afterCompose /> is not right !
// Use React.createElement(afterCompose) instead !
const proxyPatternComp = React.createElement(afterCompose, { props, outProps });
/*--end of proxyPatternComp--*/

/*--Inheritance Inversion--*/
function composeInheritanceInversion(InnerComponent) {
  return class IIContainer extends InnerComponent {
    constructor(props) {
      super(props);
      let newStyle = props.style;
      if (newStyle.backgroundColor === 'green') {
        newStyle = Object.assign({}, newStyle, { backgroundColor: 'orange' });
      }
      this.state = {
        newStyle
      };
    }
    render() {
      return (
        <div
          onClick={() => {
            const newStyle = super.handleOnClick(this.state.newStyle);
            this.setState({ newStyle });
          }}
          style={this.state.newStyle}
        >{this.props.text}
        </div>);
    }
  };
}
class InnerForExtend extends React.Component {
  handleOnClick(style) {
    let backgroundColor;
    if (style.backgroundColor === 'red') {
      backgroundColor = 'orange';
    } else {
      backgroundColor = 'red';
    }
    return Object.assign({}, style, {backgroundColor});
  }
  render() {
    const { text, style } = this.props;
    return (<div style={style}>{text}</div>);
  }
}

const IIComp = React.createElement(composeInheritanceInversion(InnerForExtend), {
  text: 'I am from InnerForExtend',
  style: {
    width: 300,
    height: 300,
    backgroundColor: 'green'
  }
});



ReactDOM.render(utils.totalRender(proxyPatternComp, IIComp), document.getElementById('app'));
utils.livereload();
