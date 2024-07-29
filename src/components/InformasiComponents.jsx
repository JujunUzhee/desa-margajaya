import React from 'react';
import InformasiCard from './Card/CardInformasi';
import { informasiData } from '../data/informasiData';

const InformasiComponents = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Informasi Publik</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {informasiData.map((info, index) => (
                    <InformasiCard
                        key={index}
                        title={info.title}
                        date={info.date}
                        description={info.description}
                        imgSrc={info.imgSrc}
                    />
                ))}
            </div>
        </div>
    )
}

export default InformasiComponents;
