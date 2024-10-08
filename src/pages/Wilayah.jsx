import React from 'react'
import Header from '../components/Header'
import WilayahComponents from '../components/WilayahComponents'
import Footer from '../components/Footer'

const Wilayah = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Header />
            <main className="flex-grow mt-16">
                <WilayahComponents />
            </main>
            <Footer />
        </div>
    )
}

export default Wilayah
