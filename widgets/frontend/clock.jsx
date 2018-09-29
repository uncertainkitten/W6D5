import React from 'react';

class Clock extends React.Component {
  constructor (props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.flashy = setInterval(() => this.flashToggle(), 600);
    this.illustrate = setInterval(() => this.colorize(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.flashy);
    clearInterval(this.illustrate);
  }

  tick() {
    this.setState({date: new Date()});
  }

  flashToggle() {
    let flashy = document.getElementsByClassName('clockdings');
    flashy = Array.from(flashy);
    flashy.map((el) => el.classList.toggle("flash"));
  }

  colorize() {
    let newcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
    let illustrate = document.getElementsByClassName('clockdings');
    illustrate = Array.from(illustrate);
    illustrate.map( (el) => { el.style.color = `${newcolor}`; } );
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
