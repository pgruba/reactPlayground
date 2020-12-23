import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToogleOn: true };

    /*
    Binding below is necessary to make 'this' work in the callback
    Check on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    */
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToogleOn: !state.isToogleOn,
    }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isToogleOn ? "ON" : "OFF"}</button>;
  }
}

export default Toggle;
