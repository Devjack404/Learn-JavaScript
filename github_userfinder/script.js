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
  const user = await ambilData(inputValue);

  if (user) {
    photo.src = user.avatar_url;
    username.textContent = user.login;
    nameTag.textContent = `@${user.name || user.login}`;
    bio.textContent = user.bio || 'No bio provided.';
    followersValue.textContent = formatNumber(user.followers);
    followingValue.textContent = formatNumber(user.following);
    reposValue.textContent = user.public_repos;
    location_user.textContent = `${user.location}`;
    joined.textContent = `Joined ${formatDate(user.created_at)}`;
    findBtn.textContent = 'Find Now';
  } else {
    alert(`User "${inputValue}" tidak ditemukan.`);
    findBtn.textContent = 'Find Now';
  }
});