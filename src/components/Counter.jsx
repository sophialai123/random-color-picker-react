import React from "react";

export default class Counter extends React.Component {

  constructor(props) {
    super(props)
    //set initial state value
    this.state = {
      count: 0,
      decrement: 100
    };


  }

  // use this.setState change the value
  handleClickIncrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleClickDecrementCounter = () => {
    this.setState({
      decrement: this.state.decrement - 1
    })
  }

  render() {
    return (
      <div>
        <h3 className="counter">Increment Counter: {this.state.count}</h3>
        <button onClick={this.handleClickIncrementCounter}> Increment</button>
        <h3 className="counter">Decrement Counter: {this.state.decrement}</h3>
        <button onClick={this.handleClickDecrementCounter} >Decrement</button>
      </div>
    )
  }

}



