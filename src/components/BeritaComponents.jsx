import React from 'react'
import { RiBookmark2Fill } from "react-icons/ri";
import CardBerita from './Card/CardBerita';
import { beritaData } from '../data/beritaData'

const BeritaComponents = () => {
    return (
        <div>
            <div className="container mx-auto ">
                <h2 className="text-3xl font-bold flex items-center gap-2 ">
                    <RiBookmark2Fill />
                    Berita Terbaru
                </h2>
                <p className='text-gray-600 mb-5'>Dapatkan informasi terbaru di desa kami</p>

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
