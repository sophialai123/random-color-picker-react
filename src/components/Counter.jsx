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
  // if use arrow function here ,
  //then do not need to use bind(this) inside of the constructor.
  // handleClickIncrementCounter = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  //use callback function to void memory leaks
  handleClickIncrementCounter = () => {
    this.setState((preveState) => {
      return { count: preveState.count + 1 }
    })

  }

  handleClickDecrementCounter = () => {
    this.setState((preveState) => {
      return { count: preveState.count - 1 }
    })
  }




  render() {
    return (
      <div>
        <h3 className="counter">Increment Counter: {this.state.count}</h3>
        <button onClick={this.handleClickIncrementCounter}> Increment</button>
        <button onClick={this.handleClickDecrementCounter} >Decrement</button>
      </div>
    )
  }

}



//<h3 className="counter">Decrement Counter: {this.state.decrement}</h3>
