import React from 'react';
import AgendaCard from './Card/CardAgenda';
import { agendaData } from '../data/agendaData';

const AgendaComponents = () => {
    return (
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Agenda Desa</h2>
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
