import React from 'react';
import LayananCard from './Card/CardLayanan';
import JadwalPelayanan from './JadwalPelayanan';
import KontakPenting from './KontakPenting';
import { layananData, jadwalPelayanan, kontakPenting } from '../data/administrasiData';
import ReactTypingEffect from 'react-typing-effect';
const AdministrasiComponents = () => {
    return (
        <div className="container mx-auto my-10">
            <h5 className="text-3xl font-semibold mb-4 text-center">
                <ReactTypingEffect text="Layanan Administrasi Desa" />
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {layananData.map((layanan, index) => (
                    <LayananCard
                        key={index}
                        title={layanan.title}
                        description={layanan.description}
                        procedures={layanan.procedures}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-5">Jadwal Pelayanan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {jadwalPelayanan.map((jadwal, index) => (
                    <JadwalPelayanan
                        key={index}
                        day={jadwal.day}
                        time={jadwal.time}
                        description={jadwal.description}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-5">Kontak Penting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {kontakPenting.map((kontak, index) => (
                    <KontakPenting
                        key={index}
                        name={kontak.name}
                        phone={kontak.phone}
                        email={kontak.email}
                    />
                ))}
            </div>
        </div>
    )
}

export default AdministrasiComponents;
