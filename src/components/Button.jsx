import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <button
        //first onClick is html attribute,the second one is props onClick
        onClick={this.props.onClick}
        className={this.props.light ? 'light-button' : 'dark-button'}>
        Refresh
      </button>
    );
  }
}