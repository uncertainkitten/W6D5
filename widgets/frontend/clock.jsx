import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>CLOCK ~!</h1>
          <section className="clock-outer">
            <div className="flex-div">
              <span className="clockdings">Time:</span>
              <span className="clockdings">{this.state.date.toLocaleTimeString({timeZoneName: 'short'})}</span>
            </div>
            <div className="flex-div">
              <span className="clockdings">Date:</span>
              <span className="clockdings">{this.state.date.toLocaleDateString({month: 'short', weekday: 'short'})}</span>
            </div>
          </section>
      </div>
    );
  }
}

export default Clock;
