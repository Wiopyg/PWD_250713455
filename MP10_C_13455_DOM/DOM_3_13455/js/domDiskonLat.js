var totalNode;
var totalSpan;
var hematNode;

function init() {
    totalSpan = document.getElementById("totalBayar");
    totalNode = totalSpan.firstChild;
    hematNode = document.getElementById("infoHemat").firstChild;
    hitungTotal();
}

function hitungTotal() {
    var harga = parseFloat(document.getElementById("harga").value);
    var diskonInput = document.getElementById("diskon").value;
    var diskon = parseFloat(diskonInput);

    if (isNaN(diskon) || diskon < 0 || diskon > 100) {
        totalSpan.style.color = "red";
        totalNode.data = "Diskon tidak valid!";
        hematNode.data = "Anda hemat: Rp0";
    } else {
        var potongan = harga * (diskon / 100);
        var akhir = harga - potongan;

        totalSpan.style.color = "green";
        totalNode.data = akhir;
        hematNode.data = "Anda hemat: Rp" + potongan;
    }
}
