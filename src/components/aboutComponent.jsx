import React from 'react';
import { Link } from 'react-router-dom';

const AboutComponent = () => {
    return (
        <div>
            <div className="container mx-auto mt-5 px-4 bg-greenPrimary  py-5">
                <div className="flex justify-center">
                    <div className="bg-transparent border-0 p-2">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="flex justify-center items-center md:w-1/3 mb-4 md:mb-0">
                                <img src="/static/img/logo_majalengka.png" className="w-2/4 h-auto mx-auto rounded-lg" alt="Logo Bangkalan" />
                            </div>
                            <div className="md:w-2/3">
                                <div className="p-4 text-left">
                                    <p className="text-slate-50 mb-4 ">
                                        Website resmi Desa Margajaya, Kec. LemahSugih, Kab. Majalengka, Jawa Barat 45465. Sebagai media komunikasi dan transparansi pemerintah, situs ini bertujuan untuk menyediakan informasi penting, layanan, dan pengumuman kepada seluruh masyarakat Desa Margajaya. Di sini, Anda dapat menemukan berita terkini, program pemerintah, dan berbagai layanan administrasi yang diperlukan untuk memudahkan interaksi antara warga dan pemerintah desa. Kami berkomitmen untuk memberikan informasi yang akurat dan terkini demi kemajuan dan kesejahteraan masyarakat.
                                    </p>
                                    <Link
                                        to="/visi-misi"
                                        className="btn bg-white text-green-500 hover:!bg-greenPrimary hover:!text-white hover:!border hover:!border-white mt-3 px-4"
                                    >
                                        Visi & Misi
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent;
