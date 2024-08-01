import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BeritaComponents from '../components/BeritaComponents';
import Header from '../components/Header';
import Footer from "../components/Footer";
import InformasiComponents from "../components/InformasiComponents";

const Beranda = () => {
    const imageVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const textVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-base-100 dark:bg-gray-900">
            <Header />
            <div className="container mx-auto py-4 px-4">
                <div className="flex flex-col md:flex-row items-center bg-white dark:bg-white-bg-dark rounded-3xl p-3 md:p-5 shadow-xl">
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center"
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                    >
                        <img src="/static/img/desa.jpeg" className="w-full md:w-full h-auto object-contain rounded-md" alt="Desa Margajaya" />
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 p-1 md:p-4 text-left md:ml-4"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <h1 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 md:mb-4 mt-3 mb-2 md:ml-4'>
                            Selamat Datang Di Desa Margajaya
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 mb-2 md:ml-4">
                            Margajaya merupakan sebuah desa yang terletak dalam daerah kecamatan Lemahsugih, Kabupaten Majalengka, Provinsi Jawa Barat, Indonesia.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-2 md:ml-4">
                            Kode Pos yang digunakan di Margajaya adalah 45465. Terdapat buah desa di dalam daerah kecamatan Lemahsugih.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-2 md:ml-4">
                            Desa Margajaya memiliki potensi ekonomi dan wisata yang besar dimana desa ini terkenal sebagai desa dengan produktivitas pertanian yang baik. Salah satu komoditas unggulannya adalah padi dan sayuran.
                        </p>
                        <Link
                            to="/sejarah"
                            className="btn btn-success mt-3 text-slate-50 md:ml-4 hover:text-green-500 hover:bg-white hover:border hover:border-green-500">
                            Sejarah Desa
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* card title */}
            <div className="container mx-auto mt-5 px-4">
                <div className="flex justify-center">
                    <div className="bg-transparent border-0 p-2">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="flex justify-center items-center md:w-1/3 mb-4 md:mb-0">
                                <img src="/static/img/logo_majalengka.jpeg" className="w-2/4 h-auto mx-auto rounded-lg" alt="Logo Bangkalan" />
                            </div>
                            <div className="md:w-2/3">
                                <div className="p-4 text-left">
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Website resmi Desa Margajaya, Kec. Lemah Sugih, Kab. Majalengka, Jawa Barat 45465. Sebagai media komunikasi dan transparansi pemerintah, situs ini bertujuan untuk menyediakan informasi penting, layanan, dan pengumuman kepada seluruh masyarakat Desa Margajaya. Di sini, Anda dapat menemukan berita terkini, program pemerintah, dan berbagai layanan administrasi yang diperlukan untuk memudahkan interaksi antara warga dan pemerintah desa. Kami berkomitmen untuk memberikan informasi yang akurat dan terkini demi kemajuan dan kesejahteraan masyarakat.
                                    </p>
                                    <Link to="/visi-misi" className='btn btn-success mt-3 text-slate-50 hover:text-green-500 hover:bg-white hover:border hover:border-green-500'>Visi & Misi </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fasilitas Desa */}
            <InformasiComponents />

            {/* Berita */}
            <BeritaComponents />
            <Footer />
        </div>
    );
}

export default Beranda;
