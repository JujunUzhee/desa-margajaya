import React from 'react'
import BeritaComponents from '../components/BeritaComponents'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Berita = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Header />
            <BeritaComponents />
            <Footer />
        </div>
    )
}

export default Berita
