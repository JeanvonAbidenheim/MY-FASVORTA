
// Fungsi ganti halaman
function tampilHalaman(idHalaman){

    let kabehHalaman = document.querySelectorAll('.halaman');

    kabehHalaman.forEach(function(halaman){
        halaman.classList.remove('aktif');
    });

    document.getElementById(idHalaman).classList.add('aktif');
}


// Fungsi kirim forum
function kirimForum(){

    let jeneng = document.getElementById('jenengMahasiswa').value;
    let pesen = document.getElementById('pesenForum').value;

    if(jeneng === '' || pesen === ''){
        alert('Data isih kosong rek!');
        return;
    }

    let wadah = document.getElementById('hasilForum');

    let divBaru = document.createElement('div');
    divBaru.classList.add('pesan');

    divBaru.innerHTML = '<b>' + jeneng + '</b><p>' + pesen + '</p>';

    wadah.prepend(divBaru);

    // Simpan ke localStorage
    let dataLawas = localStorage.getItem('forumData');

    let dataForum = [];

    if(dataLawas){
        dataForum = JSON.parse(dataLawas);
    }

    dataForum.push({
        nama: jeneng,
        isi: pesen
    });

    localStorage.setItem('forumData', JSON.stringify(dataForum));

    document.getElementById('jenengMahasiswa').value = '';
    document.getElementById('pesenForum').value = '';
}


// Tampilkan data lama
window.onload = function(){

    let dataLawas = localStorage.getItem('forumData');

    if(dataLawas){

        let dataForum = JSON.parse(dataLawas);

        dataForum.forEach(function(item){

            let wadah = document.getElementById('hasilForum');

            let divBaru = document.createElement('div');
            divBaru.classList.add('pesan');

            divBaru.innerHTML = '<b>' + item.nama + '</b><p>' + item.isi + '</p>';

            wadah.prepend(divBaru);
        });
    }
}
