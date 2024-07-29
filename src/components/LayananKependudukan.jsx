import React from 'react';

const LayananKependudukan = ({ title, description, procedures }) => {
    return (
        <div className="card shadow-sm border-light p-4 mb-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2">{description}</p>
            <ul className="list-disc list-inside mt-2">
                {procedures.map((procedure, index) => (
                    <li key={index}>{procedure}</li>
                ))}
            </ul>
        </div>
    );
}

export default LayananKependudukan;
