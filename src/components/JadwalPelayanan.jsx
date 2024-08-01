import React from 'react';

const JadwalPelayanan = ({ day, time, description }) => {
    return (
        <div className="card shadow-sm border-2 border-green-500 p-4 mb-4">
            <h3 className="text-xl font-bold">{day}</h3>
            <p className="mt-2 text-gray-600">{time}</p>
            <p className="mt-2">{description}</p>
        </div>
    );
}

export default JadwalPelayanan;
