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
const profileCard = document.querySelector('.profile-card');
let currentUser = null;

profileCard.style.display = "none";

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
  const inputValue = input.value.trim();
  
  if (!inputValue) {
    alert('Input Tidak Boleh Kosong!');
    return;
  }
  
  findBtn.textContent = 'Mencari...';
  const user = await ambilData(inputValue);

  if (user) {
    profileCard.style.display = "flex";
    currentUser = user;
    photo.src = user.avatar_url;
    username.textContent = user.login;
    nameTag.textContent = `@${user.name || user.login}`;
    bio.textContent = user.bio || 'No bio provided.';
    followersValue.textContent = formatNumber(user.followers);
    followingValue.textContent = formatNumber(user.following);
    reposValue.textContent = user.public_repos;
    location_user.textContent = user.location || 'location is not available';
    joined.textContent = `Joined ${formatDate(user.created_at)}`;

    const graphUrl = `https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&count_private=true&include_all_commits=true&bg_color=08091a&title_color=c760b0&text_color=f0e6ff&icon_color=e491c9&hide_border=true`;
    contributionGraph.src = graphUrl;
  
  } else {
    alert(`User "${inputValue}" tidak ditemukan.`);
    findBtn.textContent = 'Find Now';
  }
  
  findBtn.textContent = 'Find Now';
});


link_account.addEventListener('click', () => {
  if(currentUser){
    window.open(`${currentUser.html_url}`, "_blank")
  }
  else{
    alert('tidak dapat membuka link...')
  }

});


input.addEventListener('keydown', async(enter) =>{
  if(enter.key === "Enter"){
    findBtn.click()
  }
});