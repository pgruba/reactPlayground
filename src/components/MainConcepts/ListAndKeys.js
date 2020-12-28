import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5];
    /*we need key*/
    // const listOfNumbers = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);

    return <ul>{listItems}</ul>;

    //todo: continue with this : https://reactjs.org/docs/lists-and-keys.html#keys
  }
}
/*example blow is also component :) */
function ListItem(props) {
  return <li>{props.value}</li>;
}

export default List;
