import React from 'react';
import { profilPenduduk } from '../data/pendudukData';
import { RiBriefcase2Fill } from 'react-icons/ri';
import { FaBookMedical } from 'react-icons/fa';

const StatisticDesa = () => {
    const { distribusiUmur, pekerjaan } = profilPenduduk;

    return (
        <>
            <div className='container mx-auto text-center mt-10'>
                <h2 className='text-2xl font-bold'>Statistik Desa</h2>
                <p className="text-lg text-gray-600">Berikut adalah statistik demografi desa kami</p>

                <div className="flex flex-wrap justify-center mt-5">
                    <div className="p-4 md:w-1/3 w-full">
                        <div className="bg-red-100 text-red-700 rounded-3xl p-6 flex flex-col items-center">
                            <RiBriefcase2Fill className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Pekerjaan</h1>
                            <ul>
                                {pekerjaan.map((item, index) => (
                                    <li key={index}>{item.jenis}: {item.jumlah}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full">
                        <div className="bg-green-100 text-green-700 rounded-3xl p-6 flex flex-col items-center">
                            <FaBookMedical className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Usia Penduduk</h1>
                            <ul>
                                {distribusiUmur.map((item, index) => (
                                    <li key={index}>{item.usia}: {item.jumlah}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StatisticDesa;