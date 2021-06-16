import React from "react";

const Client = ({ details, onDelete }) => (
  <li className="flex text-center space-x-4 p-1 content-evenly ...">
    <div>{details.name} : {details.number}</div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-1 rounded" onClick={() => onDelete(details.id)}>X</button>
  </li>
);

export default Client;
