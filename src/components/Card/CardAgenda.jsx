import React from 'react';

const AgendaCard = ({ title, date, time, location, description }) => {
    return (
        <div className="card shadow-sm border-light p-4 mb-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{date} - {time}</p>
            <p className="text-gray-600">{location}</p>
            <p className="mt-2">{description}</p>
        </div>
    );
}

export default AgendaCard;
