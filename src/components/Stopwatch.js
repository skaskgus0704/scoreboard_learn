import React from 'react';

import styles from '../pages/scoreboard/Scoreboard.module.css';

export class Stopwatch extends React.Component {
  tickRef;
  state = {
    timer: 0,
    isRunning: false
  }

  render() {
    return (
      <div className={styles.stopwatch}>
        <h2>Stopwatch</h2>
        <span className={styles["stopwatch-time"]}>{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.resetStopwatch}>Reset</button>
      </div>
    );
  }

  // Dom이 렌더링된 직후에 호출되는 라이프사이클
  // 주로 네트워크 호출, 3rd 라이브러리 로딩 등의 역할을 수행
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // DOM이 파괴되기 직전에 호출되는 라이프 사이클
  // 리소스 해제 등의 역할을 수행
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning
    }))
  }

  resetStopwatch = () => {
    this.setState({timer: 0})
  }
}
