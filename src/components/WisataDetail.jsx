import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { wisataData } from '../data/wisataData';
import Carousel from 'react-multi-carousel';
import ReactPlayer from 'react-player';
import 'react-multi-carousel/lib/styles.css';

// Pengaturan responsif untuk carousel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const WisataDetail = () => {
    const { id } = useParams();
    const wisata = wisataData.find((w) => w.id === parseInt(id));
    const [isPlaying, setIsPlaying] = useState(false);

    if (!wisata) {
        return <div className="text-center mt-10">Wisata tidak ditemukan</div>;
    }

    return (
        <>
            <Header />
            <div className="container mx-auto p-4 bg-white dark:bg-gray-900">
                <div className="bg-cover bg-center h-96" style={{ backgroundImage: `url(${wisata.imageUrl})` }}>
                    <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                        <h1 className="text-white md:text-5xl text-2xl text-center font-bold">{wisata.name}</h1>
                    </div>
                </div>
                <div className="mt-8 flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-4 flex flex-col gap-4">
                        <img src={wisata.imageUrl} alt={wisata.name} className="w-full h-48 object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-2/3 p-4">
                        <h2 className="text-2xl font-semibold mb-4">{wisata.name}</h2>
                        <p className="text-gray-700 mb-4">{wisata.description}</p>
                    </div>
                </div>

                {/* Card scrollable untuk foto menggunakan react-multi-carousel */}
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4 text-black">Photo Gallery</h2> {/* Text color changed to black */}
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2500}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        itemClass="carousel-item"
                        centerMode={false} // Tidak menggunakan center mode
                    >
                        {wisata.imageUrls.map((url, index) => (
                            <div key={index} className="flex-shrink-0 md:w-64 w-80 bg-white"> {/* Background color changed to white */}
                                <img src={url} alt={`${wisata.name} ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-lg" />
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Location Map</h2>
                    <div className="w-full h-72">
                        <iframe
                            src={wisata.mapUrl}
                            title={`Map of ${wisata.name}`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Video Vlog</h2>
                    <div className="flex justify-center">
                        <div className="w-full h-64">
                            <ReactPlayer
                                url={wisata.videoUrl}
                                playing={isPlaying}
                                controls={true}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                width="100%"
                                height="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WisataDetail;
