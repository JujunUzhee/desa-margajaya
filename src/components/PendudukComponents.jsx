import React from 'react';
import ProfilPenduduk from './ProfilePenduduk';
import LayananKependudukan from './LayananKependudukan';
import KontakPentingPenduduk from './KontakPentingPenduduk';
import { profilPenduduk, layananKependudukan, kontakPentingPenduduk } from '../data/pendudukData';

const PendudukComponents = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-bold mb-5">Informasi Penduduk Desa</h2>
            <div className="mb-10">
                <ProfilPenduduk {...profilPenduduk} />
            </div>

            <h2 className="text-2xl font-bold mb-5">Layanan Kependudukan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {layananKependudukan.map((layanan, index) => (
                    <LayananKependudukan
                        key={index}
                        title={layanan.title}
                        description={layanan.description}
                        procedures={layanan.procedures}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-5">Kontak Penting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {kontakPentingPenduduk.map((kontak, index) => (
                    <KontakPentingPenduduk
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

export default PendudukComponents;
