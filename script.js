const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
const label = themeToggle.querySelector('span');

themeToggle.addEventListener('click', () => {
body.classList.toggle('dark-mode');

if (body.classList.contains('dark-mode')) {
icon.classList.replace('fa-moon', 'fa-sun');
label.textContent = 'Light Mode';
} else {
icon.classList.replace('fa-sun', 'fa-moon');
label.textContent = 'Dark Mode';
}
});

// Подсветка активного пункта меню при клике
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
link.addEventListener('click', () => {
navLinks.forEach(item => item.classList.remove('active'));
link.classList.add('active');
});
});