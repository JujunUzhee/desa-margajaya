import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-greenPrimary text-white py-8 shadow-t mt-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tentang Kami */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Tentang Kami</h5>
                        <p className="text-white">
                            Desa Margajaya adalah desa yang berlokasi di Kabupaten Majalengka, dengan komunitas yang erat dan beragam budaya.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Navigasi</h5>
                        <ul>
                            <li>
                                <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                            </li>
                            <li>
                                <Link to="/sejarah" className="text-white hover:text-gray-200">Sejarah</Link>
                            </li>
                            <li>
                                <Link to="/visi-misi" className="text-white hover:text-gray-200">Visi & Misi</Link>
                            </li>
                            <li>
                                <Link to="/wilayah" className="text-white hover:text-gray-200">Wilayah</Link>
                            </li>
                            <li>
                                <Link to="/wisata" className="text-white hover:text-gray-200">Gallery Wisata</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak Kami */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Kontak Kami</h5>
                        <p className="text-white">
                            Alamat: Desa Margajaya, Kec. LemahSugih, Majalengka, Jawa Barat 45465
                        </p>
                        <p className="text-white">
                            Telepon: (0233) 123456
                        </p>
                        <p className="text-white">
                            Email: info@margajaya.desa.id
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-300 pt-4 text-center">
                    <p className="text-white">&copy; 2024 Desa Margajaya. All rights reserved.  </p>
                </div>
            </div>
        </footer>
    );
}
