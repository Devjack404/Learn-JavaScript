//variabel nilai 
let count = 0;


//function update nilai  
function updateCount(){
    document.getElementById('counter').innerHTML = count;
}


//function tambah nilai
function tambah() {
    count++;
    updateCount();
}

//function pengurangan nilai
function kurang(){
    count--;
    updateCount();
}

//function reset nilai
function reset(){
    count = count * 0;
    updateCount();
}

//function simpan nilai
function saveCount(){
    localStorage.setItem("count", count);
}

//function load nilai
function loadCount(){
    let simpan = localStorage.getItem("count");
    if(simpan !== null){
        count = Number(simpan);
    }
    updateCount()
}