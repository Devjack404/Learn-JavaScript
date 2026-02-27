async function ambilData() {
  try {
    const response = await fetch('https://api.github.com/users/kamranahmedse')
    const data = await response.json();
    return data; 
  }
  catch(error){
    console.log('Terjadi Kesalahan', error);
  }
}


async function jalankan(){
  const user = await ambilData();
  console.log(user.login);
  console.log(user.followers);
}


const findBtn = document.getElementById('findBtn');
const name = document.getElementById('name') 

findBtn.addEventListener('click', ()=> {
  jalankan()
})


function checkDatas(){

}
