const dropdownWrapper = document.getElementById('myDropdownWrapper');
const dropdownTrigger = document.getElementById('dropdownTrigger');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownSelectedText = document.getElementById('dropdownSelectedText');

// 1. Fungsi Toggle: Buka/Tutup menu saat tombol diklik
dropdownTrigger.addEventListener('click', function(event) {
  // Mencegah event klik merambat ke window
  event.stopPropagation(); 
  
  dropdownMenu.classList.toggle('show');
  dropdownWrapper.classList.toggle('active'); // Untuk memutar ikon panah
});
// 2. Fungsi Pilih Opsi
function selectOption(element, textValue) {
  // Ubah teks pada tombol trigger
  dropdownSelectedText.textContent = textValue;
  // Hapus kelas 'active-item' dari semua pilihan
  const items = dropdownMenu.querySelectorAll('.custom-dropdown-item');
  items.forEach(item => item.classList.remove('active-item'));
  // Tambahkan kelas 'active-item' ke pilihan yang diklik
  element.classList.add('active-item');
  // Tutup menu setelah memilih
  dropdownMenu.classList.remove('show');
  dropdownWrapper.classList.remove('active');
}
// 3. Fungsi Tutup Dropdown jika klik di luar area dropdown
window.addEventListener('click', function(event) {
  if (!dropdownWrapper.contains(event.target)) {
    dropdownMenu.classList.remove('show');
    dropdownWrapper.classList.remove('active');
  }
});