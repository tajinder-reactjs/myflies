import React, { Component } from "react";

// class App extends Component {
//   state = {
//     username: "",
//     email: "",
//   };

//   updateInput = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   handleSubmit = () => {
//     console.log("value", this.state.username);
//     console.log("email", this.state.email);
//     //Send state to the server code
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" name="username" onChange={this.updateInput}></input>
//         <input type="text" name="email" onChange={this.updateInput}></input>
//         <input type="submit" onClick={this.handleSubmit}></input>
//       </div>
//     );
//   }
// }

// export default App;

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      storedItemName: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.afterSubmission = this.afterSubmission.bind(this);
  }
  handleNameChange(event) {
    this.setState({
      itemName: event.target.value,
    });
  }
  afterSubmission(event) {
    let name = this.state.itemName;
    this.setState({
      storedItemName: this.state.itemName,
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.afterSubmission}>
          <label>
            {" "}
            Item Name:
            <input
              type="text"
              name="itemName"
              value={this.state.itemName}
              onChange={this.handleNameChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="itemList">
          <p>Hi</p>
          {this.state.storedItemName}
        </div>
      </div>
    );
  }
}
