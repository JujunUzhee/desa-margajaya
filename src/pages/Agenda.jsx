import React from 'react';
import AgendaComponents from '../components/AgendaComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Agenda = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <Header />
            <AgendaComponents />
            <Footer />
        </div>
    )
}

export default Agenda;
