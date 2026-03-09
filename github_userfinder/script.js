// Variabel in HTML
const findBtn = document.getElementById('findBtn');
const name = document.getElementById('name'); 
let input = document.getElementById('input');

// Function fetching api
async function ambilData() {
  try {
    const response = await fetch('https://api.github.com/users/kamranahmedse');
    const data = await response.json();
    return data; 
  }
  catch(error){
    console.log('Terjadi Kesalahan', error);
  }
}
  

// function click button
findBtn.addEventListener('click', async ()=> {
  let inputValue = input.value.trim();
  
  if(!inputValue) { 
    alert('Input Tidak Boleh Kosong !');
    return;
  }

  const user = await ambilData();
  findBtn.textContent = "Mencari... ";

  if(user){
    if(inputValue === user.login || Number(inputValue) === user.id){
      console.log(`User : ${user.login}`); 
      console.log(`Id : ${user.id}`);
      console.log(`Repos : ${user.repos_url}`);
    }
      findBtn.textContent = "selesai";  
    }
  else{
    console.log('Data Tidak ditemukan...');
    findBtn.textContent = "Data Tidak Ditemukan"
  }
});

