import React from "react";
import ToggleDescriptor from "./Toggle.Descriptor";
import Warning from "./Warning";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToogleOn: true };

    /*
    Binding below is necessary to make 'this' work in the callback
    Check on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    !!! Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
    */
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToogleOn: !state.isToogleOn,
    }));
  }

  render() {
    return (
      <div>
        <Warning showWarning={!this.state.isToogleOn} />
        <button onClick={this.handleClick}>{this.state.isToogleOn ? "ON" : "OFF"}</button>
        <ToggleDescriptor isToogleOn={this.state.isToogleOn} />
      </div>
    );
  }
}

export default Toggle;
