import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './style';
import {
  format,
  display,
  transms,
  transstr,
  reduce,
} from './utils';
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRightHover: false,
      isLeftHover: false,
      re: '00:00:00:000',
      le: [],
      isRun: false,
      isPause: false,
    };
    this.timeId = '';
    this.br = '00:00:00:000';
    this.delay = 0;
    this.st = null;
    this.progress = undefined;
    this.sss = undefined;
    this.ss = undefined;
    this.mm = 0;
    this.hh = 0;
    this.toggleHover = (dir) => {
      this.setState({
        [`is${dir}Hover`]: !this.state[`is${dir}Hover`],
      });
    };
    this.start = this.start.bind(this);
    this.reset = this.reset.bind(this);
    this.count = this.count.bind(this);
    this.pause = this.pause.bind(this);
    this.step = this.step.bind(this);
  }
  renderRecord() {
    const data = this.state.le;
    return data.map((record, index) => 
    (<div style={styles.record} key={`key${index}`}>{record}</div>));
  }
  start() {
    this.timeId = window.requestAnimationFrame(this.step);
    this.setState({
      isRun: true,
      isPause: false,
    });
  }
  pause() {
    this.setState({
      isRun: true, // still run in requestAnimationFrame
      isPause: true,
    });
  }
  reset() {
    let r;
    window.cancelAnimationFrame(this.timeId);
    this.mm = 0;
    this.ss = 0;
    this.hh = 0;
    this.sss = 0;
    this.delay = 0;
    r = format(this.hh, 2) + ':' + format(this.mm, 2) + ':' + format(this.ss, 2) + ':' + format(this.sss, 3);
    this.setState({
      re: r,
      le: [],
      isRun: false,
      isPause: false,
    });
  }
  count() {
    let ru;
    let newlist = this.state.le.slice();
    const { re, isRun, isPause } = this.state;
    if (this.br !== re && isRun && !isPause) {
      ru = reduce(this.state.re, this.br);
      newlist.unshift(ru);
      this.br = re;
      this.setState({ le: newlist });
    }
  }
  step(timestamp) {
    let temp1, temp2, t, r;
    const { isRun, isPause } = this.state;
    if (this.st === null) { this.st = timestamp; }
    if (isRun && !isPause) {
      this.progress = timestamp - this.st - this.delay;
      t = ((this.progress/1000).toFixed(3));
      this.ss = +(t.split('.')[0]);
      this.sss = +(t.split('.')[1]);
      temp1 = display(this.ss, 3600);
      this.hh = temp1.tbig;
      this.ss = temp1.tsmall;
      temp2 = display(this.ss, 60);
      this.mm = temp2.tbig;
      this.ss = temp2.tsmall;
      r = format(this.hh, 2) + ':' + format(this.mm, 2) + ':' + format(this.ss, 2) + ':' + format(this.sss, 3);
      this.setState({ re: r });
      window.requestAnimationFrame(this.step);
    } else if (isRun && isPause) { // press stop
      this.delay = timestamp - this.st - this.progress;
      window.requestAnimationFrame(this.step);
    } else if (!isRun && !isPause) { // press reset
      this.st = null;
      this.br = '00:00:00:000';
    }
  }
  render() {
    const { isRightHover, isLeftHover, isRun, isPause } = this.state;
    const rightBtnStyle = Object.assign({}, styles.button, {
      backgroundColor: isRightHover ? '#6e6ae2' : '#a9a7e5'
    });
    const leftBtnStyle = Object.assign({}, styles.button, {
      backgroundColor: isLeftHover ? '#6e6ae2' : '#a9a7e5'
    });
    return(
      <div style={styles.layout}>
        <div style={styles.header}>Timer</div>
        <div style={styles.panel}>
          {this.state.re}
        </div>
          {!isPause && <span>
            <button 
              style={leftBtnStyle}
              onClick={this.count}
              onMouseEnter={() => this.toggleHover('Left')}
              onMouseLeave={() => this.toggleHover('Left')}
            >Count
            </button>
          </span>}
          {isPause && <span>
            <button
              style={leftBtnStyle}
              onClick={this.reset}
              onMouseEnter={() => this.toggleHover('Left')}
              onMouseLeave={() => this.toggleHover('Left')}
            >Reset
            </button>
          </span>}
          { (!isRun === !isPause) && <span>
            <button 
              style={rightBtnStyle}
              onClick={this.start}
              onMouseEnter={() => this.toggleHover('Right')}
              onMouseLeave={() => this.toggleHover('Right')}
            >Start
            </button>
          </span>}
          {(isRun !== isPause) &&<span>
            <button
              style={rightBtnStyle}
              onClick={this.pause}
              onMouseEnter={() => this.toggleHover('Right')}
              onMouseLeave={() => this.toggleHover('Right')}
            >Pause
            </button>
          </span>}
          <div style={styles.list}>
            {this.renderRecord()}
          </div>
      </div>  
    );
  }
}
export default Timer;
