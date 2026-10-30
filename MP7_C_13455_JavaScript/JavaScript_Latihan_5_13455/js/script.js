function fn_Valform() {
    var nama = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var umurInput = document.getElementById("umur").value.trim();
    var koleksi = document.getElementById("koleksi");
    var sMsg = "";
    var emailPattern = /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*\.[a-z]{2,}$/i;

    if (nama === "") {
        sMsg += "Anda belum mengisi nama!\n";
    }
    if (email === "") {
        sMsg += "Anda belum mengisi email!\n";
    } else if (!emailPattern.test(email)) {
        sMsg += "Format email tidak valid!\n";
    }
    if (umurInput === "") {
        sMsg += "Anda belum mengisi umur!\n";
    } else if (!/^\d+$/.test(umurInput) || parseInt(umurInput, 10) < 1) {
        sMsg += "Umur harus berupa angka positif!\n";
    }
    if (koleksi.value === "") {
        sMsg += "Anda belum memilih koleksi!\n";
    }

    if (sMsg !== "") {
        alert("Peringatan\n" + sMsg);
        return false;
    }

    var umur = parseInt(umurInput, 10);
    var info = umur <= 17 ? "Anggota Pelajar" : "Anggota Umum";
    var namaKoleksi = koleksi.options[koleksi.selectedIndex].text;

    alert(info);
    alert("Terima kasih " + nama + "! Anda terdaftar di koleksi " + namaKoleksi + " (" + info + ").");
    return true;
}
