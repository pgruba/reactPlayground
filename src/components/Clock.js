import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; //this.state can be used as a setter in constructor only
  }

  //lifecycle method 1 runs after the component output has been rendered to the DOM
  componentDidMount() {
    console.log("Mounted");
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  ///lifecycle method 2
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }

  tick() {
    /* use setState instead of this.state = [value] */
    this.setState({
      date: new Date(),
    });

    /*
    1. Try to not to use state and/or props in setState method.
    SetState may be asynchronous because react may batch multiple setState() into a single update
    so instead of :
      this.setState({ counter : this.state.counter + this.props.increment})
    it is better to do something like this:
      this.setState((state, props)=> ({counter: state.counter + props.increment}))

    2. State updates are merged
    https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged

    3. The data flows down - neither parent nor child components can know if a certain component is stateful of stateless
    and they shouldn't care whether it is defined as a function or a class
    https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down 
    */
  }
}

export default Clock;
