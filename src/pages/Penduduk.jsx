import React from 'react';
import PendudukComponents from '../components/PendudukComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Penduduk = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Header />
            <div className="p-4">
                <PendudukComponents />
            </div>
            <Footer />
        </div>
    )
}

export default Penduduk;
