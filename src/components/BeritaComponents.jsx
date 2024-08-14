import React from 'react'
import { RiBookmark2Fill } from "react-icons/ri";
import CardBerita from './Card/CardBerita';
import { beritaData } from '../data/beritaData'

const BeritaComponents = ({ isHomePage }) => {
    return (
        <div>
            <div className="container mx-auto">
                <h2 className={`text-3xl font-bold flex items-center gap-2 ${isHomePage ? 'text-white' : 'text-black'}`}>
                    <RiBookmark2Fill />
                    Berita Terbaru
                </h2>
                <p className={`mb-5 ${isHomePage ? 'text-white' : 'text-gray-800'}`}>
                    Dapatkan informasi terbaru di desa kami
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {beritaData.map((berita, index) => (
                        <CardBerita
                            key={index}
                            title={berita.title}
                            author={berita.author}
                            date={berita.date}
                            description={berita.description}
                            imgSrc={berita.imgSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BeritaComponents;
