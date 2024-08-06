import React from 'react';
import { RiBookmark2Fill } from 'react-icons/ri';
import ReactTypingEffect from 'react-typing-effect';

const WilayahComponents = () => {

    return (
        <div className="min-h-screen  p-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h5 className="text-3xl font-semibold mb-4 text-center">
                        <ReactTypingEffect text="Wilayah Desa" />
                    </h5>
                    <p className="text-lg md:text-lg text-gray-600">
                        Informasi mengenai wilayah dan kondisi geografis desa kami
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold flex items-center gap-2 my-4">
                        <RiBookmark2Fill />
                        Peta Wilayah Desa
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="w-full">
                            <img src="/static/img/wilayah.jpeg" alt="" className='w-full' />
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold flex items-center gap-2 my-4">
                        <RiBookmark2Fill />
                        Batas Wilayah Desa
                    </h2>
                    <div id="item2" className="accordion-content  p-4 bg-white border rounded-b-lg">
                        <p>
                            Batas-batas Desa Margajaya adalah sebagai berikut:
                            <ul className="list-disc  mt-2">
                                <li>Sebelah Utara berbatasan dengan Desa Sukajadi</li>
                                <li>Sebelah Timur berbatasan dengan Desa Padarek/Sukamaju</li>
                                <li>Sebelah Selatan berbatasan dengan Desa Cibulan/Lemahputih</li>
                                <li>Sebelah Barat berbatasan dengan Desa Sadawangi/Kali Cilengkrang</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WilayahComponents;
