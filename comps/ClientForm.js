import React, { useState, useEffect } from "react";

const ClientForm = (props) => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [rendreNumber, setRendredNumber] = useState(0);

  useEffect(() => {
    console.log("init component");
  }, []);

  useEffect(() => {
    setRendredNumber((o) => o + 1);
  }, [name, num]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = new Date().getTime();
    props.onClientAdd({ id, name, number: num });
    setName("");
    setNum("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>{rendreNumber}</span>
      <br />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Ajouter un nom"
      />
      <input
        value={num}
        onChange={(e) => setNum(e.target.value)}
        type="text"
        placeholder="Ajouter un numero"
      />
      <button>Confirmer</button>
    </form>
  );
};

export default ClientForm;
