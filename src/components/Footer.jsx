import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-base-100 text-gray-800 py-8 shadow-t">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tentang Kami */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Tentang Kami</h5>
                        <p className="text-gray-600">
                            Desa Margajaya adalah desa yang berlokasi di Kabupaten Majalengka, dengan komunitas yang erat dan beragam budaya.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Navigasi</h5>
                        <ul>
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
                            </li>
                            <li>
                                <Link to="/informasi" className="text-gray-600 hover:text-gray-800">Informasi</Link>
                            </li>
                            <li>
                                <Link to="/demografis" className="text-gray-600 hover:text-gray-800">Demografis</Link>
                            </li>
                            <li>
                                <Link to="/katalog" className="text-gray-600 hover:text-gray-800">Katalog</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak Kami */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Kontak Kami</h5>
                        <p className="text-gray-600">
                            Alamat: Jl. Raya No.123, Desa Margajaya, Majalengka, Jawa Barat
                        </p>
                        <p className="text-gray-600">
                            Telepon: (0233) 123456
                        </p>
                        <p className="text-gray-600">
                            Email: info@margajaya.desa.id
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-300 pt-4 text-center">
                    <p className="text-gray-600">&copy; 2024 Desa Margajaya. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
