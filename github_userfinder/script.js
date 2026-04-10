// Variables for DOM in html
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
const profilePage = document.querySelector('.profile-page');
let currentUser = null;

// Variables for DOM Repo Page
const selectPageProfile = document.getElementById("chs");
const selectPageRepo = document.getElementById("chs-repo");
const repoCard = document.querySelector(".repository-card");

// Variables for DOM Repo Page - Identity
const usernameRepo = document.querySelector('.username-repo');
const nameTagRepo = document.querySelector('.nameTag-repo');
const bioRepo = document.querySelector('.bio-repo');
const linkAccountRepo = document.querySelector('.link-account-repo');

// Stats & Meta scoped ke repoCard
const followersValueRepo = repoCard.querySelector('.followers-value');
const followingValueRepo = repoCard.querySelector('.following-value');
const reposValueRepo = repoCard.querySelector('.repos-value');
const locationUserRepo = repoCard.querySelector('.location-user');
const joinedRepo = repoCard.querySelector('.joined');

// Repo list container
const repoList = document.querySelector('.repo-list');

// intial hide page cards
profileCard.style.display = "none";
repoCard.style.display = "none";


// function format number > 1000 == K
function formatNumber(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n;
}

// function format Date
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });
}

// function fetch user data
async function ambilData(inputValue) {
  try {
    const response = await fetch(`https://api.github.com/users/${inputValue}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.log('Terjadi Kesalahan', error);
    return null;
  }
}

// function fetch repos
async function ambilRepos(loginName) {
  try {
    const response = await fetch(`https://api.github.com/users/${loginName}/repos?sort=stars&per_page=6`);
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

// function render repo list
function renderRepos(repos) {
  repoList.innerHTML = '';
  repos.forEach(repo => {
    repoList.innerHTML += `
      <div class="repo-item" onclick="window.open('${repo.html_url}', '_blank')">
        <p class="repo-name">${repo.name}</p>
        <p class="repo-desc">${repo.description || 'No description'}</p>
        <div class="repo-meta">
          <span>⭐ ${repo.stargazers_count}</span>
          <span>🍴 ${repo.forks_count}</span>
          <span>${repo.language || 'Unknown'}</span>
        </div>
      </div>
    `;
  });
}


// function click findBtn
findBtn.addEventListener('click', async () => {
  const inputValue = input.value.trim();

  if (!inputValue) {
    alert('Input Tidak Boleh Kosong!');
    return;
  }

  findBtn.textContent = 'Mencari...';
  const user = await ambilData(inputValue);

  if (user) {
    currentUser = user;

    // Sync profile-card
    profileCard.style.display = "flex";
    photo.src = user.avatar_url;
    username.textContent = user.login;
    nameTag.textContent = `@${user.login}`;
    bio.textContent = user.bio || 'No bio provided.';
    followersValue.textContent = formatNumber(user.followers);
    followingValue.textContent = formatNumber(user.following);
    reposValue.textContent = user.public_repos;
    location_user.textContent = user.location || 'Location is not available';
    joined.textContent = `Joined ${formatDate(user.created_at)}`;
    // contributionGraph.src = `https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&count_private=true&include_all_commits=true&bg_color=08091a&title_color=c760b0&text_color=f0e6ff&icon_color=e491c9&hide_border=true`;

    // Sync repo-card
    usernameRepo.textContent = user.login;
    nameTagRepo.textContent = `@${user.login}`;
    bioRepo.textContent = user.bio || 'No bio provided.';
    followersValueRepo.textContent = formatNumber(user.followers);
    followingValueRepo.textContent = formatNumber(user.following);
    reposValueRepo.textContent = user.public_repos;
    locationUserRepo.textContent = user.location || 'Location is not available';
    joinedRepo.textContent = `Joined ${formatDate(user.created_at)}`;
    linkAccountRepo.onclick = () => window.open(user.html_url, '_blank');

    // Fetch dan render repos
    const repos = await ambilRepos(user.login);
    renderRepos(repos);

  } else {
    alert(`User "${inputValue}" tidak ditemukan.`);
  }

  findBtn.textContent = 'Find Now';
});


// function link_account open new tab
link_account.addEventListener('click', () => {
  if (currentUser) {
    window.open(currentUser.html_url, "_blank");
  } else {
    alert('Tidak dapat membuka link...');
  }
});

// function key "Enter" search
input.addEventListener('keydown', (enter) => {
  if (enter.key === "Enter") {
    findBtn.click();
  }
});


// function change page
function changePage(value) {
  if (value === 'repos') {
    repoCard.style.display = 'flex';
    profileCard.style.display = 'none';
  } else if (value === 'profile') {
    repoCard.style.display = 'none';
    profileCard.style.display = 'flex';
  }
  selectPageProfile.value = value;
  selectPageRepo.value = value;
}

selectPageProfile.addEventListener('change', () => {
  changePage(selectPageProfile.value);
});

selectPageRepo.addEventListener('change', () => {
  changePage(selectPageRepo.value);
});


