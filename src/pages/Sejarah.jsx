import React from 'react'
import Header from '../components/Header'
import SejarahComponents from '../components/SejarahComponents'
import Footer from '../components/Footer'

const Sejarah = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Header />
            <main className="flex-grow mt-16"> {/* Tambahkan margin-top yang cukup besar */}
                <SejarahComponents />
            </main>

            <Footer />
        </div>
    )
}

export default Sejarah
