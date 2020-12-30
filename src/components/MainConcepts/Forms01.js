import React from "react";

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "wujo", gender: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.name);
    console.log(this.state);
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="txt_name">Name:</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} id="txt_name" />
        <label htmlFor="rb_male">Male</label>
        <input type="radio" id="rb_male" value="male" name="gender" onChange={this.handleInputChange}></input>
        <label htmlFor="rb_female">Female</label>
        <input type="radio" id="rb_female" value="female" name="gender" onChange={this.handleInputChange}></input>
        <input type="submit" value="Submit" />
        <label htmlFor="txt_area">Description</label>
        <textarea name="description" onChange={this.handleInputChange}></textarea>
      </form>
    );
  }
}

export default SimpleForm;
