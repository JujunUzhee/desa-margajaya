import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const SejarahComponents = () => {
    return (
        <div className="p-6 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <h5 className="text-3xl font-semibold mb-4 text-center">
                    <ReactTypingEffect text="Sejarah Desa Margajaya" />
                </h5>

                {/* Main Image and Description */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ">
                    <div>
                        <img
                            src="static/img/desa.jpeg"
                            alt="Sejarah Desa Margajaya"
                            className="w-full rounded-lg shadow-lg "
                        />
                    </div>
                    <div>
                        <p className="mb-4">
                            Dengan memohon Rahmat dan Ridho Allah SWT, penulis bermaksud menghimpun data dari semua pihak, untuk menulis sejarah singkat Desa Margajaya.
                        </p>
                        <p>
                            Pada tahun 1981, Desa Padarek yang wilayahnya sudah cukup luas dipandang perlu ada pemekaran. Maka, Pemerintah Kabupaten Majalengka memecah Desa Padarek menjadi tiga desa, yaitu Desa Padarek, Desa Sukajadi, dan Desa Margajaya.
                        </p>
                        <p>
                            Desa Margajaya terdiri dari Blok Pasirhanja, Kampung Cibulakan, Kampung Mananti, dan Kampung Cipedang yang berasal dari pemekaran Desa Sadawangi.
                        </p>
                    </div>
                </div>

                {/* Key Events Accordion */}
                <div className="accordion">
                    <div className="accordion-item mb-4">
                        <button
                            className="accordion-header text-left w-full bg-gray-200 p-4 rounded-t-lg focus:outline-none"
                            onClick={() => document.getElementById('item1').classList.toggle('hidden')}
                        >
                            Pemberian Nama Desa
                        </button>
                        <div id="item1" className="accordion-content hidden p-4 bg-white border rounded-b-lg">
                            <p>
                                Pada tanggal 10 Maret 1981, para tokoh masyarakat mengadakan musyawarah dengan agenda pemberian nama Desa yaitu Desa Margajaya. Kata Margajaya diambil dari kata "Marga" yang berarti kelompok keluarga atau wilayah, dan "Jaya" yang berarti kemakmuran atau kejayaan.
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4">
                        <button
                            className="accordion-header text-left w-full bg-gray-200 p-4 rounded-t-lg focus:outline-none"
                            onClick={() => document.getElementById('item2').classList.toggle('hidden')}
                        >
                            Batas Wilayah Desa
                        </button>
                        <div id="item2" className="accordion-content hidden p-4 bg-white border rounded-b-lg">
                            <p>
                                Batas-batas Desa Margajaya adalah sebagai berikut:
                                <ul className="list-disc ml-6 mt-2">
                                    <li>Sebelah Utara berbatasan dengan Desa Sukajadi</li>
                                    <li>Sebelah Timur berbatasan dengan Desa Padarek/Sukamaju</li>
                                    <li>Sebelah Selatan berbatasan dengan Desa Cibulan/Lemahputih</li>
                                    <li>Sebelah Barat berbatasan dengan Desa Sadawangi/Kali Cilengkrang</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4">
                        <button
                            className="accordion-header text-left w-full bg-gray-200 p-4 rounded-t-lg focus:outline-none"
                            onClick={() => document.getElementById('item3').classList.toggle('hidden')}
                        >
                            Pusat Pemerintahan Desa
                        </button>
                        <div id="item3" className="accordion-content hidden p-4 bg-white border rounded-b-lg">
                            <p>
                                Pusat Pemerintahan Desa Margajaya:
                                <ul className="list-disc ml-6 mt-2">
                                    <li>Pada tahun 1981 hingga 1986, tempat pemerintahan di Blok Pasirhanja</li>
                                    <li>Pada tahun 1986 hingga 1997, pindah ke Blok Cibulakan</li>
                                    <li>Pada tahun 1997 hingga sekarang, kembali lagi ke Blok Pasirhanja</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="accordion-item mb-4">
                        <button
                            className="accordion-header text-left w-full bg-gray-200 p-4 rounded-t-lg focus:outline-none"
                            onClick={() => document.getElementById('item4').classList.toggle('hidden')}
                        >
                            Kepemimpinan Desa
                        </button>
                        <div id="item4" className="accordion-content hidden p-4 bg-white border rounded-b-lg">
                            <p>
                                Daftar Kepala Desa Margajaya:
                                <ul className="list-disc ml-6 mt-2">
                                    <li>Dari tahun 1981 hingga 1982, Bapak M. Salikin (PJS)</li>
                                    <li>Dari tahun 1982 hingga 1993, Bapak U. Muhidin</li>
                                    <li>Dari tahun 1993 hingga 2002, Bapak Rochman Suherman</li>
                                    <li>Dari tahun 2002 hingga 2012, Bapak Kalsa Ruswanda</li>
                                    <li>Dari tahun 2012 hingga 2018, Bapak Baban Sutisman</li>
                                    <li>Dari tahun 2018 hingga 2019, dijabat dari Kecamatan oleh Bapak Dodo Herwana, A.Md. Kep.</li>
                                    <li>Dari tahun 2019 sampai sekarang, Bapak Jeje Sudrajat</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SejarahComponents;
