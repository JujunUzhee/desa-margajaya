import { RiBriefcase2Fill, RiCommunityLine } from "react-icons/ri";
import { FaBookMedical, FaMosque } from "react-icons/fa";
import BeritaComponents from '../components/BeritaComponents';
import Header from '../components/Header';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Beranda() {
    return (
        <div className="bg-base-100 dark:bg-gray-900">
            <Header />
            <div className="container mx-auto py-4 px-4">
                <div className="flex flex-col md:flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-3xl p-2 md:p-5">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/static/desa.jpg" className="w-full md:w-full h-auto object-contain rounded-md" alt="Desa Margajaya" />
                    </div>
                    <div className="w-full md:w-1/2 p-1 md:p-4 text-center md:text-left md:ml-4">
                        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100  md:mb-4 mt-1 md:ml-4'>
                            Selamat Datang Di Desa Margajaya
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">Margajaya merupakan sebuah desa yang terletak dalam (daerah) kecamatan Lemahsugih, Kabupaten Majalengka, Provinsi Jawa Barat, Indonesia.</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">Kode Pos yang digunakan di Margajaya adalah 45465. Terdapat buah desa di dalam daerah kecamatan Lemahsugih.</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">Desa Margajaya memiliki potensi ekonomi dan wisata yang besar dimana desa ini terkenal sebagai desa dengan produktifitas pertanian yang baik. Salah satu komitas unggulannya adalah padi dan sayuran.</p>
                        <Link to="/sejarah" className="btn btn-success mt-3 text-white">
                            Selengkapnya
                        </Link>
                    </div>
                </div>
            </div>

            {/* card title */}
            <div className="container mx-auto mt-5 px-4">
                <div className="flex justify-center">
                    <div className="bg-transparent border-0 p-2">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="flex justify-center items-center md:w-1/3 mb-4 md:mb-0">
                                <img src="/static/img/logo_majalengka.jpeg" className="w-2/4  h-auto mx-auto rounded-lg" alt="Logo Bangkalan" />
                            </div>
                            <div className="md:w-2/3">
                                <div className="p-4 text-left">
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Website resmi desa, kec tanah merah kab bangkalan jawa timur. Media komunikasi dan transparansi pemerintah untuk seluruh masyarakat desa rongdurin. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid autem commodi dignissimos distinctio ducimus facilis fuga fugiat, incidunt labore minus mollitia nihil numquam obcaecati odio provident quisquam sit unde!
                                    </p>
                                    <Link to="/sejarah"><button className='btn btn-success text-white rounded-3'>Profil desa</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Statistic Desa */}
            <div className='container mx-auto text-center mt-10'>
                <h2 className='text-2xl font-bold'>Statistic Desa</h2>
                <p className="text-lg text-gray-600">Berikut adalah statistic demografi desa kami</p>

                <div className="flex flex-wrap justify-center mt-5">
                    <div className="p-4 md:w-1/4 w-full">
                        <div className="bg-red-100 text-red-700 rounded-3xl p-6 flex flex-col items-center">
                            <RiBriefcase2Fill className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Pekerjaan</h1>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 w-full">
                        <div className="bg-blue-100 text-blue-700 rounded-3xl p-6 flex flex-col items-center">
                            <RiCommunityLine className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Pendidikan</h1>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 w-full">
                        <div className="bg-yellow-100 text-yellow-700 rounded-3xl p-6 flex flex-col items-center">
                            <FaMosque className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Agama</h1>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 w-full">
                        <div className="bg-green-100 text-green-700 rounded-3xl p-6 flex flex-col items-center">
                            <FaBookMedical className="text-5xl mb-3" />
                            <h1 className="text-xl font-semibold">Usia Penduduk</h1>
                        </div>
                    </div>
                </div>
            </div>


            {/* Berita */}
            <BeritaComponents />
            <Footer />
        </div>
    );
}
