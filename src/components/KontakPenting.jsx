import React from 'react';

const KontakPenting = ({ name, phone, email }) => {
    return (
        <div className="card shadow-sm border-2 border-green-500 p-4 mb-4">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="mt-2 text-gray-600">Telepon: {phone}</p>
            <p className="mt-2 text-gray-600">Email: {email}</p>
        </div>
    );
}

export default KontakPenting;
