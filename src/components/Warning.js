import React from "react";

class Warning extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.showWarning ? <h2> !! Warning !!</h2> : null;
  }
}

export default Warning;
