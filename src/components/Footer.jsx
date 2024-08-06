import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-50 text-gray-800 py-8 shadow-t mt-10">
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
                                <Link to="/sejarah" className="text-gray-600 hover:text-gray-800">Sejarah</Link>
                            </li>
                            <li>
                                <Link to="/visi-misi" className="text-gray-600 hover:text-gray-800">Visi & Misi</Link>
                            </li>
                            <li>
                                <Link to="/wilayah" className="text-gray-600 hover:text-gray-800">Wilayah</Link>
                            </li>
                            <li>
                                <Link to="/wisata" className="text-gray-600 hover:text-gray-800">Gallery Wisata</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak Kami */}
                    <div>
                        <h5 className="text-lg font-bold mb-4">Kontak Kami</h5>
                        <p className="text-gray-600">
                            Alamat: Desa Margajaya,Kec. LemahSugih, Majalengka, Jawa Barat 45465
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
                    <p className="text-gray-600">&copy; 2024 Desa Margajaya - Kkn 53 Uniku </p>
                </div>
            </div>
        </footer>
    );
}
