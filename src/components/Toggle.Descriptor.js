import React from "react";

class ToggleDescriptor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let header;
    if (this.props.isToogleOn) {
      /*Inline If with Logical && Operator*/
      header = <h1>Toogle ON {this.props.isToogleOn && <b>confirm - on</b>} </h1>;
    } else {
      header = <h1>Toogle Off {this.props.isToogleOn ? "true" : "(false)"}</h1>;
    }

    return header;
  }
}

export default ToggleDescriptor;
