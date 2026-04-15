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
const selectPageProfile = document.getElementById('chs');
const selectPageRepo = document.getElementById('chs-repo');
const repoCard = document.querySelector('.repository-card');

// Variables for DOM Repo Page - Identity
const usernameRepo = document.querySelector('.username-repo');
const nameTagRepo = document.querySelector('.nameTag-repo');
const bioRepo = document.querySelector('.bio-repo');
const linkAccountRepo = document.querySelector('.link-account-repo');

// Stats & Meta scoped ke repoCard
const followersValueRepo = repoCard?.querySelector('.followers-value');
const followingValueRepo = repoCard?.querySelector('.following-value');
const reposValueRepo = repoCard?.querySelector('.repos-value');
const locationUserRepo = repoCard?.querySelector('.location-user');
const joinedRepo = repoCard?.querySelector('.joined');

// Repo list container
const repoList = document.querySelector('.repo-list');

// initial hide page cards
if (profileCard) profileCard.style.display = 'none';
if (repoCard) repoCard.style.display = 'none';

// function format number > 1000 == K
function formatNumber(nums) {
  if (typeof nums !== 'number') return '0';
  if (nums >= 1000) return (nums / 1000).toFixed(1) + 'K';
  return String(nums);
}

// function format Date
function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return 'Unknown date';
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function setLoading(isLoading) {
  if (!findBtn) return;
  findBtn.textContent = isLoading ? 'Mencari...' : 'Find Now';
  findBtn.disabled = isLoading;
}

function setText(el, value) {
  if (el) el.textContent = value;
}

// function fetch user data
async function ambilData(inputValue) {
  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(inputValue)}`);

    if (response.status === 404) return { data: null, error: 'NOT_FOUND' };
    if (response.status === 403) return { data: null, error: 'RATE_LIMIT' };
    if (!response.ok) return { data: null, error: 'HTTP_ERROR' };

    return { data: await response.json(), error: null };
  } catch (error) {
    console.log('Terjadi Kesalahan', error);
    return { data: null, error: 'NETWORK_ERROR' };
  }
}

// function fetch repos
async function ambilRepos(loginName) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(loginName)}/repos?sort=updated&per_page=6`
    );
    if (!response.ok) return [];
    const repos = await response.json();
    return repos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
  } catch {
    return [];
  }
}

// function render repo list
function createRepoItem(repo) {
  const item = document.createElement('div');
  item.className = 'repo-item';
  item.addEventListener('click', () => window.open(repo.html_url, '_blank'));

  const name = document.createElement('p');
  name.className = 'repo-name';
  name.textContent = repo.name || 'Untitled';

  const desc = document.createElement('p');
  desc.className = 'repo-desc';
  desc.textContent = repo.description || 'No description';

  const meta = document.createElement('div');
  meta.className = 'repo-meta';

  const stars = document.createElement('span');
  stars.textContent = `⭐ ${repo.stargazers_count ?? 0}`;

  const forks = document.createElement('span');
  forks.textContent = `🍴 ${repo.forks_count ?? 0}`;

  const lang = document.createElement('span');
  lang.textContent = repo.language || 'Unknown';

  meta.append(stars, forks, lang);
  item.append(name, desc, meta);

  return item;
}

function renderRepos(repos) {
  if (!repoList) return;
  repoList.innerHTML = '';

  if (!Array.isArray(repos) || repos.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'repo-empty';
    empty.textContent = 'Repository tidak tersedia.';
    repoList.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  repos.forEach((repo) => fragment.appendChild(createRepoItem(repo)));
  repoList.appendChild(fragment);
}

// function click findBtn
async function handleSearch() {
  const inputValue = input?.value.trim();

  if (!inputValue) {
    alert('Input Tidak Boleh Kosong!');
    return;
  }

  setLoading(true);
  const { data: user, error } = await ambilData(inputValue);

  if (!user) {
    if (error === 'NOT_FOUND') {
      alert(`User "${inputValue}" tidak ditemukan.`);
    } else if (error === 'RATE_LIMIT') {
      alert('GitHub API rate limit tercapai. Coba lagi beberapa saat.');
    } else {
      alert('Terjadi kesalahan saat mengambil data.');
    }
    setLoading(false);
    return;
  }

  currentUser = user;

  // Sync profile-card
  if (profileCard) profileCard.style.display = 'flex';
  if (repoCard) repoCard.style.display = 'none';

  if (photo) {
    photo.src = user.avatar_url;
    photo.alt = `${user.login} avatar`;
  }
  setText(username, user.login);
  setText(nameTag, `@${user.login}`);
  setText(bio, user.bio || 'No bio provided.');
  setText(followersValue, formatNumber(user.followers));
  setText(followingValue, formatNumber(user.following));
  setText(reposValue, String(user.public_repos ?? 0));
  setText(location_user, user.location || 'Location is not available');
  setText(joined, `Joined ${formatDate(user.created_at)}`);
  // contributionGraph.src = `https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&count_private=true&include_all_commits=true&bg_color=08091a&title_color=c760b0&text_color=f0e6ff&icon_color=e491c9&hide_border=true`;

  // Sync repo-card
  setText(usernameRepo, user.login);
  setText(nameTagRepo, `@${user.login}`);
  setText(bioRepo, user.bio || 'No bio provided.');
  setText(followersValueRepo, formatNumber(user.followers));
  setText(followingValueRepo, formatNumber(user.following));
  setText(reposValueRepo, String(user.public_repos ?? 0));
  setText(locationUserRepo, user.location || 'Location is not available');
  setText(joinedRepo, `Joined ${formatDate(user.created_at)}`);

  if (linkAccountRepo) {
    linkAccountRepo.onclick = () => window.open(user.html_url, '_blank');
  }

  // Fetch dan render repos
  const repos = await ambilRepos(user.login);
  renderRepos(repos);

  setLoading(false);
}

if (findBtn) {
  findBtn.addEventListener('click', handleSearch);
}

// function link_account open new tab
if (link_account) {
  link_account.addEventListener('click', () => {
    if (currentUser) {
      window.open(currentUser.html_url, '_blank');
    } else {
      alert('Tidak dapat membuka link...');
    }
  });
}

// function key "Enter" search
if (input) {
  input.addEventListener('keydown', (enter) => {
    if (enter.key === 'Enter') {
      handleSearch();
    }
  });
}

// function change page
function changePage(value) {
  if (value === 'repos') {
    if (repoCard) repoCard.style.display = 'flex';
    if (profileCard) profileCard.style.display = 'none';
  } else if (value === 'profile') {
    if (repoCard) repoCard.style.display = 'none';
    if (profileCard) profileCard.style.display = 'flex';
  }

  if (selectPageProfile) selectPageProfile.value = value;
  if (selectPageRepo) selectPageRepo.value = value;
}

if (selectPageProfile) {
  selectPageProfile.addEventListener('change', () => {
    changePage(selectPageProfile.value);
  });
}

if (selectPageRepo) {
  selectPageRepo.addEventListener('change', () => {
    changePage(selectPageRepo.value);
  });
}


