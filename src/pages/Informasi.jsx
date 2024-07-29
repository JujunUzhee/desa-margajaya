import React from 'react';
import InformasiComponents from '../components/InformasiComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Informasi = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Header />
            <div className="p-4">
                <InformasiComponents />
            </div>
            <Footer />
        </div>
    )
}

export default Informasi;
