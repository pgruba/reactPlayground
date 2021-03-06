import React from "react";
import Clock from "./Clock";
import Toggle from "./Toggle";
import List from "./MainConcepts/ListAndKeys";
import SimpleForm from "./MainConcepts/Forms01";

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: "Pawel",
  lastName: "Gruba",
};
const secondUser = { age: 40 };

// const element = (
//   <div>
//     <h1>
//       Learning React by {formatName(user)} from element. Btw, secondUser age is {this.props.secondUser.age}
//     </h1>
//   </div>
// );

class App extends React.Component {
  render() {
    return (
      <div>
        <WelcomeHeader secondUser={secondUser} />
        <Welcome name="Tadzio" />
        <Clock />
        <hr />
        <Toggle></Toggle>
        <hr />
        <List />
        <hr />
        <SimpleForm></SimpleForm>
      </div>
    );
  }
}

class WelcomeHeader extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          Learning React by {formatName(user)} from element. Btw, secondUser age is {this.props.secondUser.age}
        </h1>
      </div>
    );
  }
}

export default App;

//function  component practice:
function Welcome(props) {
  return <h3>Hello my dear {props.name}</h3>;
}
