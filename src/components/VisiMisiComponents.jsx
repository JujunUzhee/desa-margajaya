import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const VisiMisiComponents = () => {
    return (
        <div className="min-h-screen p-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h5 className="text-3xl font-semibold mb-4 text-center text-greenPrimary">
                        <ReactTypingEffect text="Visi dan Misi Desa Margajaya" />
                    </h5>

                </div>
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="bg-greenPrimary p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
                        <h2 className="text-2xl font-semibold text-white mb-4">Visi</h2>
                        <p className="text-white">
                            TERBANGUNNNYA TATA KELOLA PEMERINTAHAN DESA YANG BAIK DAN BERSIH GUNA MEWUJUDKAN KEHIDUPAN MASYARAKAT DESA MARGAJAYA YANG "SAMMA" SEJAHTERA, ADIL, MAKMUR, MANDIRI DAN AGAMIS
                        </p>
                    </div>
                    <div className="bg-greenPrimary p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
                        <h2 className="text-2xl font-semibold text-white mb-4">Misi</h2>
                        <ul className="list-disc list-inside text-white space-y-2">
                            <li>Meningkatkan ekonomi kerakyatan yang berbasis agribisnis.</li>
                            <li>Meningkatkan kualitas pendidikan dan kesehatan yang merata dan terjangkau.</li>
                            <li>Meningkatkan pelayanan aparatur desa bagi pemenuhan pelayanan publik.</li>
                            <li>Optimalisasi Otonomi Desa melalui Pemberdayaan masyarakat.</li>
                            <li>Meningkatkan Pembangunan Infrastruktur yang Proporsional, berkualitas dan berkelanjutan.</li>
                            <li>Meningkatkan kualitas kehidupan beragama dalam mewujudkan masyarakat Margajaya beriman dan bertaqwa.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisiMisiComponents;
