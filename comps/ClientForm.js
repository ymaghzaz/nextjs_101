import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    newName: "",
    newNum: ""
  };

  handleNameChange = event => {
    this.setState({ newName: event.currentTarget.value });
  };

  handleNumChange = event => {
    this.setState({ newNum: event.currentTarget.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const name = this.state.newName;
    const number = this.state.newNum;

    this.props.onClientAdd({ id, name, number });

    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.newName}
          onChange={this.handleNameChange}
          type="text"
          placeholder="Ajouter un nom"
        />
        <input
          value={this.state.newNum}
          onChange={this.handleNumChange}
          type="text"
          placeholder="Ajouter un numero"
        />
        <button>Confirmer</button>
      </form>
    );
  }
}

export default ClientForm;
