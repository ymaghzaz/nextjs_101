import Head from 'next/head'
import Image from 'next/image'
// import 'tailwindcss/tailwind.css'
import React from "react";
import Client from "../comps/Client";
import ClientForm from "../comps/ClientForm";

class ClientList extends React.Component {
  state = {
    clients: [
      { id: 1, name: "Walid KINI", number: "0629279948" },
      { id: 2, name: "Youssef MAGHZAZ", number: "0618457629" },
      { id: 3, name: "Mohammed OMARI", number: "0635291847" }
    ]
  };

  handleDelete = id => {
    const clients = [...this.state.clients];
    const index = clients.findIndex(client => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "Liste des contacts";

    return (
      <div className="p-10 text-center bg-blue-200">
        <h1 className="text-3xl text-blue-900">{title}</h1>
        <div className="flex justify-center">
          <ul>
            {this.state.clients.map(client => (
              <Client
                key={client.id}
                details={client}
                onDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

export default ClientList