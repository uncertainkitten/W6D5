colorize() {
  let newcolor = '#'+Math.floor(Math.random()*16777215).toString(16);
  let flashy = document.querySelectorAll("span");
  flashy.map( (el) => setAttribute("color", `${newcolor}`));
}

flashToggle() {
  let newToggle = (this.state.flashToggle === 'none') ? '' : 'none';
  this.setState({flashToggle: `${newToggle}`});
}

this.illustrate = setInterval(() => this.flashToggle(), 1000);
clearInterval(this.illustrate);
    this.state = {flashToggle: 'none'};
