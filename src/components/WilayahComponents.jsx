import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const WilayahComponents = () => {
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31680.96419749617!2d108.17699218979148!3d-6.995083955644441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f372ede6e357b%3A0x42e45af35621b778!2sMargajaya%2C%20Kec.%20Lemahsugih%2C%20Kabupaten%20Majalengka%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1721749742553!5m2!1sid!2sid';

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h5 className="text-3xl font-semibold mb-4 text-center">
                        <ReactTypingEffect text="Wilayah Desa" />
                    </h5>
                    <p className="text-lg md:text-lg text-gray-600">
                        Informasi mengenai wilayah dan kondisi geografis desa kami
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Peta Wilayah Desa</h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="w-full h-80">
                            <iframe
                                src={mapUrl}
                                title="Peta Wilayah Desa"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Deskripsi Geografis</h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600">
                            Desa kami terletak di koordinat -6.995084, 108.176992 dengan batas-batas wilayah sebagai berikut:
                            <br />
                            <strong>Utara:</strong> Batas utara desa
                            <br />
                            <strong>Selatan:</strong> Batas selatan desa
                            <br />
                            <strong>Timur:</strong> Batas timur desa
                            <br />
                            <strong>Barat:</strong> Batas barat desa
                            <br />
                            Luas wilayah desa adalah ... hektar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WilayahComponents;
