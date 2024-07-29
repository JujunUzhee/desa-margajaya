import React from 'react'
import Header from '../components/Header'
import SejarahComponents from '../components/SejarahComponents'
import Footer from '../components/Footer'

const Sejarah = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Header />
            <SejarahComponents />
            <Footer />
        </div>
    )
}

export default Sejarah
