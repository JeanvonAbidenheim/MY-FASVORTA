
CREATE DATABASE forum_fasilkom;

USE forum_fasilkom;

CREATE TABLE forum_mahasiswa(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    isi_pesan TEXT
);
