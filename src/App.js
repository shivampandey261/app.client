import React from 'react';
import './ClientList.css'; // Assuming you'll be using an external CSS file

const clients = [
    {
        id: 1,
        name: "Client 1",
        description: "Description about client 1.",
        image: "logo192.png"
    },
    {
        id: 2,
        name: "Client 2",
        description: "Description about client 2.",
        image: "logo512.png"
    },
    // Add more clients as needed
];

const Clients = () => {
    return (
        <div>
            <h1>Valuable Clients</h1>
            <div className="clients-container">
                {clients.map(client => (
                    <div key={client.id} className="client-card">
                        <img src={client.image} alt={client.name} />
                        <div className="client-info">
                            <h2>{client.name}</h2>
                            <p>{client.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clients;
