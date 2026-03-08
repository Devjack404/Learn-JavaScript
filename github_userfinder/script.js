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
  

async function jalankan(user){
  // const user = await ambilData();
  console.log(user.login);
  console.log(user.followers);
}


// function click button
findBtn.addEventListener('click', async ()=> {
  const user = await ambilData();
  let inputValue = input.value;
  
  if(inputValue === user.login || inputValue === user.id) { 
    console.log(`User : ${user.login}`);
    console.log(`Id : ${user.id}`);
  }
  else{
    console.log("Data Tidak Ketemu");
  }
});


// function checkInput(user){
//   console.log(user.login.value);
//   // if(input.value !== user.login.value) {
//   //   console.log("Tidak ada data")
//   // }
//   // else{
//   //   jalankan()
//   // }
// }
