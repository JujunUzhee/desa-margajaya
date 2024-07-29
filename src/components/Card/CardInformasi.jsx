import React from 'react';

const InformasiCard = ({ title, date, description, imgSrc }) => {
    return (
        <div className="card shadow-sm border-light p-4 mb-4">
            <img src={imgSrc} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{date}</p>
            <p className="mt-2">{description}</p>
        </div>
    );
}

export default InformasiCard;
