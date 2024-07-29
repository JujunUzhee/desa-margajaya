// Wisata.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardWisata from '../components/Card/CardWisata';
import Header from '../components/Header';
import { wisataData } from '../data/wisataData';
import ReactTypingEffect from 'react-typing-effect';

const Wisata = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/wisata/detail/${id}`);
    };

    return (
        <div className="bg-white dark:bg-gray-900">
            <Header />
            <div className="container mx-auto p-4">
                <h5 className="text-3xl font-semibold mb-4 text-center">
                    <ReactTypingEffect text="Obyek Wisata Curug" />
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {wisataData.map((wisata) => (
                        <div
                            key={wisata.id}
                            className="p-4 text-center cursor-pointer transition-transform transform hover:scale-105"
                            onClick={() => handleCardClick(wisata.id)}
                        >
                            <CardWisata wisata={wisata} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wisata;
