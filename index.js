// Program Pengelolaan Angkot 

let namaPenumpang = ['Juan', undefined, 'udin']

function tambahPenumpang(penumpang, nama) {
for(let i = 0; i < namaPenumpang.length ; i++){
    if(namaPenumpang[i] === 0){
        console.log('Penumpang Kosong')
    }
    else{
        console.log("Penumpang Ada")
    }
} 

} 

function hapusPenumpang(){

}



console.log("======SELAMAT DATANG DI ANGKOT JAGO=====")

console.log(tambahPenumpang(namaPenumpang))
