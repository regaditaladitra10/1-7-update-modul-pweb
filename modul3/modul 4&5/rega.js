function hitung() {
    var kode = document.getElementById("kode").value;
    var jumlah = document.getElementById("jumlah").value;
    var nama, harga;

    switch(kode) {
        case "B001":
            nama = "Buku";
            harga = 20000;
            break;
        case "B002":
            nama = "Penggaris";
            harga = 5000;
            break;
        case "B003":
            nama = "Pulpen";
            harga = 3000;
            break;
        default:
            nama = "";
            harga = 0;
    }

    document.getElementById("nama").value = nama;
    document.getElementById("harga").value = harga;

    var jumlahBayar = jumlah * harga;
    document.getElementById("jumlah_bayar").value = jumlahBayar;

    var potongan = jumlahBayar > 50000 ? jumlahBayar * 0.1 : 0;
    document.getElementById("potongan").value = potongan;

    var total = jumlahBayar - potongan;
    document.getElementById("total").value = total;
}

function tampilkanNota() {
    var kode = document.getElementById("kode").value;
    var jumlah = document.getElementById("jumlah").value;
    var nama = document.getElementById("nama").value;
    var harga = document.getElementById("harga").value;
    var jumlahBayar = document.getElementById("jumlah_bayar").value;
    var potongan = document.getElementById("potongan").value;
    var total = document.getElementById("total").value;

    var nota = "<h3>Nota Penjualan</h3>" +
               "<p>Kode Barang: " + kode + "</p>" +
               "<p>Nama Barang: " + nama + "</p>" +
               "<p>Jumlah Beli: " + jumlah + "</p>" +
               "<p>Harga: " + harga + "</p>" +
               "<p>Jumlah Bayar: " + jumlahBayar + "</p>" +
               "<p>Potongan: " + potongan + "</p>" +
               "<p>Total Bayar: " + total + "</p>";

    document.getElementById("nota").innerHTML = nota;
}
