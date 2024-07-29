import React from 'react';

const ProfilPenduduk = ({ jumlahPenduduk, distribusiUmur, jenisKelamin, pekerjaan }) => {
    return (
        <div className="card shadow-sm border-light p-4 mb-4">
            <h3 className="text-xl font-bold">Profil Penduduk</h3>
            <p className="mt-2">Jumlah Penduduk: {jumlahPenduduk}</p>
            <h4 className="mt-4 font-bold">Distribusi Umur</h4>
            <ul className="list-disc list-inside mt-2">
                {distribusiUmur.map((item, index) => (
                    <li key={index}>{item.usia} tahun: {item.jumlah} orang</li>
                ))}
            </ul>
            <h4 className="mt-4 font-bold">Jenis Kelamin</h4>
            <p>Laki-laki: {jenisKelamin.lakiLaki}</p>
            <p>Perempuan: {jenisKelamin.perempuan}</p>
            <h4 className="mt-4 font-bold">Pekerjaan</h4>
            <ul className="list-disc list-inside mt-2">
                {pekerjaan.map((item, index) => (
                    <li key={index}>{item.jenis}: {item.jumlah} orang</li>
                ))}
            </ul>
        </div>
    );
}

export default ProfilPenduduk;
