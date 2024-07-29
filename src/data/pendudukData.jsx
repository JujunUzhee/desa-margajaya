export const profilPenduduk = {
    jumlahPenduduk: 1200,
    distribusiUmur: [
        { usia: "0-5", jumlah: 100 },
        { usia: "6-12", jumlah: 150 },
        { usia: "13-17", jumlah: 100 },
        { usia: "18-45", jumlah: 500 },
        { usia: "46-60", jumlah: 200 },
        { usia: "60+", jumlah: 150 },
    ],
    jenisKelamin: { lakiLaki: 600, perempuan: 600 },
    pekerjaan: [
        { jenis: "Petani", jumlah: 300 },
        { jenis: "Pedagang", jumlah: 150 },
        { jenis: "PNS", jumlah: 100 },
        { jenis: "Wiraswasta", jumlah: 200 },
        { jenis: "Lainnya", jumlah: 450 },
    ]
};

export const layananKependudukan = [
    {
        title: "Pembuatan KTP",
        description: "Prosedur dan persyaratan untuk pembuatan Kartu Tanda Penduduk (KTP).",
        procedures: [
            "Mengisi formulir pembuatan KTP",
            "Melampirkan fotokopi KK",
            "Melampirkan pas foto ukuran 3x4"
        ]
    },
    {
        title: "Pembuatan Kartu Keluarga",
        description: "Prosedur dan persyaratan untuk pembuatan Kartu Keluarga (KK).",
        procedures: [
            "Mengisi formulir pembuatan KK",
            "Melampirkan surat nikah atau akta cerai",
            "Melampirkan akta kelahiran anak"
        ]
    },
    // Tambahkan layanan lainnya di sini
];

export const kontakPentingPenduduk = [
    {
        name: "Kantor Desa",
        phone: "(123) 456-7890",
        email: "kantor@desa.id"
    },
    {
        name: "Kepala Desa",
        phone: "(098) 765-4321",
        email: "kepala@desa.id"
    },
    // Tambahkan kontak lainnya di sini
];
