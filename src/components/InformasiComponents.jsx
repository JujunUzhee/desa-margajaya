import React from 'react';
import InformasiCard from './Card/CardInformasi';
import { informasiData } from '../data/informasiData';
import { RiBookmark2Fill } from 'react-icons/ri';

const InformasiComponents = () => {
    return (
        <div className="container mx-auto my-5">
            <h3 className="text-3xl font-bold flex items-center gap-4">
                <RiBookmark2Fill />
                Fasilitas Desa
            </h3>
            <p className='text-gray-600 mb-5'>Fasilitas yang tersedia di desa kami</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                {informasiData.map((info, index) => (
                    <InformasiCard
                        key={index}
                        title={info.title}
                        imgSrc={info.imgSrc}
                    />
                ))}
            </div>
        </div>
    );
}

export default InformasiComponents;
