import { motion } from "framer-motion";

import BeritaComponents from '../components/BeritaComponents';
import Header from '../components/Header';
import Footer from "../components/Footer";
import InformasiComponents from "../components/InformasiComponents";
import AboutComponent from "../components/aboutComponent";
import ReactTypingEffect from "react-typing-effect";

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
        <div className="bg-white ">
            <Header />
            <div className="container mx-auto py-4 px-4">
                <div className="text-center mt-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-5">
                        <ReactTypingEffect text="SELAMAT DATANG DI DESA MARGAJAYA" />

                    </h1>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        {/* Gambar Kiri */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                        >
                            <img src="/static/img/desa2.jpeg" className="w-full h-auto object-cover rounded-lg shadow-lg" alt="Desa Margajaya" />
                        </motion.div>

                        {/* Gambar Kanan */}
                        <motion.div
                            className="w-full md:w-1/2"
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                        >
                            <img src="/static/img/desa.jpeg" className="w-full h-auto object-cover rounded-lg shadow-lg mb-4" alt="Desa Margajaya" />
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-6"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <p className="text-gray-700 leading-relaxed text-lg md:text-lg mt-6">
                            Margajaya merupakan sebuah desa yang terletak dalam daerah kecamatan Lemahsugih, Kabupaten Majalengka, Provinsi Jawa Barat, Indonesia. Kode Pos yang digunakan di Margajaya adalah 45465. Terdapat buah desa di dalam daerah kecamatan Lemahsugih. Desa Margajaya memiliki potensi ekonomi dan wisata yang besar dimana desa ini terkenal sebagai desa dengan produktivitas pertanian yang baik. Salah satu komoditas unggulannya adalah padi dan sayuran.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* card title */}
            <AboutComponent />
            {/* Fasilitas Desa */}
            <InformasiComponents />

            {/* Berita */}
            <div className="bg-greenPrimary py-5 shadow-lg">
                <BeritaComponents isHomePage={true} />
            </div>

            <div className="pt-5">
                <Footer />
            </div>

        </div>
    );
}

export default Beranda;
