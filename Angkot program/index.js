let penumpang  = ['juan', undefined, 'kamui']

function tambahPenumpang(nama, penumpang) {

    if (penumpang.length === 0) {
        penumpang.push(nama)
        return penumpang
    }

    for (let i = 0; i < penumpang.length; i++) {

        if (penumpang[i] === nama) {
            console.log(nama, "sudah ada di dalam angkot")
            return penumpang
        }

        if (penumpang[i] === undefined) {
            penumpang[i] = nama
            return penumpang
        }

        if (i === penumpang.length - 1) {
            penumpang.push(nama)
            return penumpang
        }
    }
}

function hapusPenumpang(){

}



console.log("======SELAMAT DATANG DI ANGKOT JAGO=====")

