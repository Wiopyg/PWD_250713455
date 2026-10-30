var iHari;
var sAnggota;

iHari = prompt ("Masukkan Hari Keterlambatan.", 1);
sAnggota = prompt ("Masukkan Anggota Perpustakaan? Ya atau Tidak (Y/N)", "Y");

if (iHari > 7 ) {
    if (sAnggota == "Y" || sAnggota == "y") {
        alert ("Anda dikenakan denda sebesar Rp. 10.000","Peminjaman dibekukan");
    } else {
        alert ("Anda dikenakan denda sebesar Rp. 20.000","Peminjaman dibekukan");
    }
} else {
    if (sAnggota == "Y" || sAnggota == "y") {
        alert ("Denda Rp. 2.000");
    }else {
        alert ("Denda Rp. 5.000");
    }
}