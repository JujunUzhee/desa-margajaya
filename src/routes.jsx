import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Informasi from './pages/Informasi';
import Wisata from './pages/Wisata';
import WisataDetail from './components/WisataDetail';
import Berita from './pages/Berita';
import Agenda from './pages/Agenda';
import Administrasi from './pages/Administrasi';
import Sejarah from './pages/Sejarah';
import VisiMisi from './pages/VisiMisi';
import Wilayah from './pages/Wilayah';
import StatisticDesa from './pages/StatisticDesa';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="sejarah" element={<Sejarah />} />
            <Route path="informasi" element={<Informasi />} />
            <Route path="wisata" element={<Wisata />} />
            <Route path="visi-misi" element={<VisiMisi />} />
            <Route path="agenda" element={<Agenda />} />
            <Route path="wilayah" element={<Wilayah />} />
            <Route path="statistic" element={<StatisticDesa />} />
            <Route path="administrasi" element={<Administrasi />} />
            <Route path="berita" element={<Berita />} />
            <Route path="wisata/detail/:id" element={<WisataDetail />} />
        </Routes>
    );
}
