const findBtn = document.getElementById('findBtn');
const input = document.getElementById('input');
const photo = document.querySelector('.photo');
const username = document.querySelector('.username');
const nameTag = document.querySelector('.nameTag');
const bio = document.querySelector('.bio');
const followersValue = document.querySelector('.followers-value');
const followingValue = document.querySelector('.following-value');
const reposValue = document.querySelector('.repos-value');
const location_user = document.querySelector('.location-user');
const joined = document.querySelector('.joined');
const link_account = document.querySelector('.link-account');
const contributionGraph = document.getElementById('contributionGraph');

function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });
}

async function ambilData(inputValue) {
  try {
    const response = await fetch(`https://api.github.com/users/${inputValue}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Terjadi Kesalahan', error);
    return null;
  }
}

findBtn.addEventListener('click', async () => {
  let inputValue = input.value.trim();

  if (!inputValue) {
    alert('Input Tidak Boleh Kosong!');
    return;
  }

  findBtn.textContent = 'Mencari...';
  let user = await ambilData(inputValue);

  if (user) {
    photo.src = user.avatar_url;
    username.textContent = user.login;
    nameTag.textContent = `@${user.name || user.login}`;
    bio.textContent = user.bio || 'No bio provided.';
    followersValue.textContent = formatNumber(user.followers);
    followingValue.textContent = formatNumber(user.following);
    reposValue.textContent = user.public_repos;
    location_user.textContent = user.location || 'location is not available';
    joined.textContent = `Joined ${formatDate(user.created_at)}`;

    const graphUrl = `https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&theme=default&count_private=true&include_all_commits=true&bg_color=24292e&color=ffffff&icon_color=0366d6`;
    contributionGraph.src = graphUrl;
    contributionGraph.style.display = 'block';


  } else {
    alert(`User "${inputValue}" tidak ditemukan.`);
    findBtn.textContent = 'Find Now';
  }
  


  findBtn.textContent = 'Find Now';
});


link_account.addEventListener('click', async () => {
  let inputValue = input.value.trim();
  let user = await ambilData(inputValue);

  if(user){
    window.open(`${user.html_url}`, "_blank")
  }
  else{
    alert('tidak dapat membuka link...')
  }

})



// // 1. Tangkap semua elemen DOM
// const findBtn = document.getElementById('findBtn');
// const input = document.getElementById('input');
// const photo = document.querySelector('.photo');
// const username = document.querySelector('.username');
// const nameTag = document.querySelector('.nameTag');
// const bio = document.querySelector('.bio');
// const followersValue = document.querySelector('.followers-value');
// const followingValue = document.querySelector('.following-value');
// const reposValue = document.querySelector('.repos-value');
// const location_user = document.querySelector('.location-user');
// const joined = document.querySelector('.joined');
// const link_account = document.querySelector('.link-account');
// const contributionGraph = document.getElementById('contributionGraph');

// // 2. Fungsi Bantuan (Helper Functions)
// function formatNumber(n) {
//   if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
//   return n;
// }

// function formatDate(dateStr) {
//   return new Date(dateStr).toLocaleDateString('en-US', {
//     month: 'short', day: 'numeric', year: 'numeric'
//   });
// }

// // 3. Fungsi Utama Pengambil Data API
// async function ambilData(inputValue) {
//   try {
//     const response = await fetch(`https://api.github.com/users/${inputValue}`);
//     if (!response.ok) return null;
//     return await response.json();
//   } catch (error) {
//     console.error('Terjadi Kesalahan API:', error);
//     return null;
//   }
// }

// // 4. Eksekusi saat tombol diklik
// findBtn.addEventListener('click', async () => {
//   const inputValue = input.value.trim();

//   // Validasi input
//   if (!inputValue) {
//     alert('Input Tidak Boleh Kosong!');
//     return;
//   }

//   // State loading
//   findBtn.textContent = 'Mencari...';
  
//   // Ambil data
//   const user = await ambilData(inputValue);

//   if (user) {
//     // Render UI Profil
//     photo.src = user.avatar_url;
//     username.textContent = user.login;
//     nameTag.textContent = `@${user.name || user.login}`;
//     bio.textContent = user.bio || 'No bio provided.';
//     followersValue.textContent = formatNumber(user.followers);
//     followingValue.textContent = formatNumber(user.following);
//     reposValue.textContent = user.public_repos;
//     location_user.textContent = user.location || 'Location not available';
//     joined.textContent = `Joined ${formatDate(user.created_at)}`;
    
//     // Set Link Profil
//     link_account.href = user.html_url;
//     link_account.target = "_blank";

//     // Render Grafik Kontribusi
//     // Konfigurasi tema: bg_color=24292e (gelap) menyesuaikan gambar GitHub
//     const graphUrl = `https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&theme=default&count_private=true&include_all_commits=true&bg_color=24292e&color=ffffff&icon_color=0366d6`;
//     contributionGraph.src = graphUrl;
//     contributionGraph.style.display = 'block'; // Pastikan gambar muncul

//   } else {
//     // Handling jika user tidak ditemukan
//     alert(`User "${inputValue}" tidak ditemukan.`);
//     link_account.removeAttribute('href');
//     contributionGraph.src = ''; 
//     contributionGraph.style.display = 'none'; // Sembunyikan gambar rusak
//   }
  
//   // Kembalikan tombol ke state awal
//   findBtn.textContent = 'Find Now';
// });