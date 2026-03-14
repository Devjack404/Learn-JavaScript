// Variabel in HTML
const findBtn = document.getElementById('findBtn');
const name = document.getElementById('name'); 
const input = document.getElementById('input');
const username = document.querySelector('.username');
const photo = document.querySelector('.photo');

// Function fetching api
async function ambilData() {
  try {
    const response = await fetch(`https://api.github.com/users/${input.value}`);
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
  // findBtn.textContent = "Mencari... ";

  if(user){
    if(inputValue === user.login || Number(inputValue) === user.id){
      username.textContent = `${user.login}`;
      photo.src = `${user.avatar_url}`
      console.log(`Repos : ${user.repos_url}`);
      findBtn.textContent = "selesai";  
    }
    else {
      console.log('Data Tidak ditemukan...');
      findBtn.textContent = "Data Tidak Ditemukan"
    }
  }
});



