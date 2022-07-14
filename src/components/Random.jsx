import React from "react";
import Button from "./Button";

export default class Random extends React.Component {

  constructor(props) {
    super(props);

    //this.state is an object value
    this.state = { color: [92, 132, 153] };
    //use as an event handler. Your new method uses this.
    this.handleClick = this.handleClick.bind(this);
  }


  //new method:
  handleClick() {

    //pass this.setState() an object
    this.setState({ color: this.chooseColor() });
  }


  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>

          Your color is  {this.formatColor(this.state.color)}!
        </h1>
        { /* Give <Button /> light attribute: and onClick event */}
        <Button light={this.isLight()}
          onClick={this.handleClick} />
      </div>
    );
  }
}