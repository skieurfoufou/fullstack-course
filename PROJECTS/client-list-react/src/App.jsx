import { useState } from "react";
import "./App.css";
import Client from "./components/Client/Client";
import ClientForm from "./components/ClientForm/ClientForm";

function App() {
  const [clients, setClients] = useState([
    { id: 1, nom: "Lior Chamla" },
    { id: 2, nom: "Magali Pernin" },
    { id: 3, nom: "Joseph Durand" },
  ]);

  const handleDelete = (id) => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex((client) => client.id === id);

    updatedClients.splice(index, 1);

    setClients(updatedClients);
  };

  const handleAdd = (client) => {
    const updatedClients = [...clients];
    updatedClients.push(client);

    setClients(updatedClients);
  };

  const title = "Liste des clients";

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {clients.map((client) => (
          <Client key={client.id} details={client} onDelete={handleDelete} />
        ))}
      </ul>
      <ClientForm onClientAdd={handleAdd} />
    </div>
  );
}

export default App;
