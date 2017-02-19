import React from 'react';
export function livereload() {
    if (process.env.NODE_ENV !== 'production') { // for hot reload
    document.write(
      '<script src="http://' + (location.host || 'localhost').split(':')[0] +
      ':35729/livereload.js?snipver=1"></' + 'script>'
    );
  }
}
export function totalRender(...components) { // total render
  if (components.length === 0) {
    return (<div>Empty</div>);
  }
  const totalComp = components.map(function(comp, index) {
    return React.cloneElement(comp, {key: index});
  });
  return (<div>{totalComp}</div>);
}