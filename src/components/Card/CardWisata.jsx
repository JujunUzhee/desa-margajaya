import React from 'react';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
};

const CardWisata = ({ wisata }) => {
    return (
        <div className="card card-compact bg-base-100 w-35 shadow-xl dark:bg-base-100">
            <figure>
                <img
                    src={wisata.imageUrl}
                    alt={wisata.name}
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body flex flex-col items-center justify-center">
                <h2 className="card-title text-center">{wisata.name}</h2>
                <p className='text-center'>{truncateText(wisata.description, 100)}</p>
                <div className="card-actions w-full flex justify-center mt-4">
                    <button
                        className="btn btn-success mt-3 text-slate-50 hover:text-green-500 hover:bg-white hover:border hover:border-green-500 w-1/2"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/wisata/detail/${wisata.id}`;
                        }}
                    >
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardWisata;