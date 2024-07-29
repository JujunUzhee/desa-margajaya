import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const VisiMisiComponents = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h5 className="text-3xl font-semibold mb-4 text-center">
                        <ReactTypingEffect text="Visi dan Misi" />
                    </h5>
                    <p className="text-lg md:text-xl text-gray-600">
                        Menyongsong masa depan dengan semangat dan komitmen
                    </p>
                </div>
                <div className="grid gap-12 md:grid-cols-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visi</h2>
                        <p className="text-gray-600">
                            Mewujudkan desa yang mandiri, sejahtera, dan berdaya saing dengan mengedepankan nilai-nilai kebersamaan, gotong royong, dan kearifan lokal.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Misi</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Meningkatkan kualitas pendidikan dan kesehatan masyarakat.</li>
                            <li>Mendorong pertumbuhan ekonomi melalui pemberdayaan UMKM dan pertanian.</li>
                            <li>Melestarikan budaya dan tradisi lokal sebagai aset pariwisata.</li>
                            <li>Membangun infrastruktur yang mendukung kesejahteraan masyarakat.</li>
                            <li>Meningkatkan partisipasi masyarakat dalam pembangunan desa.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisiMisiComponents;
