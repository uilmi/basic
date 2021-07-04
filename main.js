let pesan = "hello world";
console.log(pesan);

let nama = "Ulul",
    umur = 23,
    jenisKelamin = "perempuan";

let pandemi;
let keluarRumah = false;

console.log(pandemi);

console.log(`Halo, nama saya ${nama}, umur saya ${umur}`);
console.log('ini bisa kaya gini", tuhkan');
console.log(nama);
console.log(umur);
console.log(jenisKelamin);

let $ = "this is dolar var"
let _ = "this is underscore"

console.log($);
console.log(_);

const bumi = "bulat";

console.log(bumi);

const WARNA_MERAH = "#F00";
const WARNA_BIRU = "#00F";
const WARNA_HIJAU = "#0F0";

let warnaBaju = WARNA_MERAH;
console.log(warnaBaju);

// Object 
/* const ktp = {
    nama = "Sabrina",
    tempatTanggalLahir = "11 Januari 1990",
    jenisKelamin = "perempuan",
    alamat: {
        jalan: "Jl. Kabupaten",
        rtrw: "05010",
        keldesa: "Pekalongan",
        kecamatan: "Gamping"
    },
    statusPerkawinan: " BELUM KAWIN",
    pekerjaan: " SWASTA",
    kewarganegaraan: " WNI",
    berlakuHIngga: " SEUMUR HIDUP",
} */

let hasil = false || 10;
console.log(hasil);

let hujan = false;
if (!hujan) {
    console.log("gausah pake payung");
}

/* let no1, no2, no3;

no1 = prompt("Nomor pertama?");
no2 = prompt("Nomor kedua?");
hasil = Number(no1) + Number(no2);
console.log(hasil);

alert("Hasil = " + hasil);

let tahun = prompt('Tahun berapa Indonesia merdeka');

if (tahun == 1945) {
    alert('Kamu benar!');
    alert('Mantap');
}
 */

/* let akses;
let umur1 = 2 + 3;

switch (umur1) {
    case 4:
        alert('You are 18!');
        break;
    case 5:
        alert('You are 19!');
        break;
    default:
        break;
}
 */

/* for (let i = 1; i < 5; i++) {
    alert(i);
} */

/* let xx = 1
while (xx < 5) {
    alert(xx);
    xx++;
} */

/* const lantaiBersih = true;
let lantaiGedung = 5;

while (lantaiBersih) {
    alert(`Sya sudah mengepel lantai ${lantaiGedung}.`);
    lantaiGedung--;
    if (lantaiGedung == 0) {
        alert("Semua lantai sudah bersih");
        break;
    }
} */

let ii = 1;

do {
    alert(ii);
    ii++;
} while (ii <= 5);