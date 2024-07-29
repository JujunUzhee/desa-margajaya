import React from 'react'
import Header from '../components/Header'
import VisiMisiComponents from '../components/VisiMisiComponents'
import Footer from '../components/Footer'

const VisiMisi = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Header />
            <VisiMisiComponents />
            <Footer />
        </div>
    )
}

export default VisiMisi
