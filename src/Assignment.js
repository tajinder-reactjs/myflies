import React from "react";

class Assignmnent extends React.Component {
  state = {
    items: [
      {
        name: "Tajinder",
        email: "Singh@gmail.com",
      },
    ],
    name: "",
    email: "",
    activeIndex: null,
  };

  updateInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { items, name, email, activeIndex } = this.state;
    const newItem = { name, email };

    if (activeIndex == null) items.push(newItem);
    if (activeIndex != null) items[activeIndex] = newItem;

    this.setState({
      items: [...items],
      name: "",
      email: "",
      activeIndex: null,
    });
  };

  deleteRecord = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items: [...items] });
  };
  editRecord = (index) => {
    const { items } = this.state;

    const { name, email } = items[index];
    this.setState({ name, email, activeIndex: index });
  };

  render() {
    const { items, name, email } = this.state;

    return (
      <>
        <h1>hello</h1>
        <div style={{ margin: "50px" }}>
          <form onSubmit={this.handleSubmit}>
            Enter Name
            <input
              type="text"
              value={name}
              name="name"
              onChange={this.updateInput}
            />
            Enter Email
            <input
              type="text"
              value={email}
              name="email"
              onChange={this.updateInput}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <table border="2" width="90%">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            {items.map((result, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{result.name}</td>
                    <td>{result.email}</td>
                    <td>
                      <button onClick={() => this.deleteRecord(index)}>
                        Delete
                      </button>
                      <button onClick={() => this.editRecord(index)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </>
    );
  }
}
export default Assignmnent;
