import React from 'react';
import AdministrasiComponents from '../components/AdministrasiComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Administrasi = () => {
    return (
        <div className='bg-white dark:text-white dark:bg-gray-900'>
            <Header />
            <div className="p-4">
                <AdministrasiComponents />
            </div>
            <Footer />
        </div>
    )
}

export default Administrasi;
