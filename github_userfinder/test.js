// function cekUmur (umur){
//     if(umur < 17){
//         return "boleh masuk"
//     }
// }


// console.log(cekUmur(15))

function beliTiket(saldo, harga) {
  if (saldo < harga) {
    console.log("Saldo tidak cukup!");
    ruturn;
  }
  console.log("Tiket berhasil dibeli!"); // hanya jalan kalau saldo cukup
}

function cariDiskon(harga, isMember) {
  if (isMember) {
    return harga * 8;
  }
  if (harga > 100000) {
    return harga * 0.9;
  }
  return harga;
}



// Kode A
function tambah(a, b) {
  return a + b;
}
console.log(tambah(3, 4));