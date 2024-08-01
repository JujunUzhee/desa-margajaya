import React from 'react';
import AgendaCard from './Card/CardAgenda';
import { agendaData } from '../data/agendaData';
import { RiBookmark2Fill } from 'react-icons/ri';

const AgendaComponents = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold flex items-center gap-2 ml-2">
                <RiBookmark2Fill />
                Agenda
            </h2>
            <p className='text-gray-600 mb-5 ml-4'>Dapatkan informasi agenda di desa kami</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agendaData.map((agenda, index) => (
                    <AgendaCard
                        key={index}
                        title={agenda.title}
                        date={agenda.date}
                        time={agenda.time}
                        location={agenda.location}
                        description={agenda.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default AgendaComponents;
