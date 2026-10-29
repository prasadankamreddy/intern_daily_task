const btn = document.getElementById('themeButton');
const wish = document.getElementById('greeting');

let time = new Date().getHours();

wish.textContent = time > 12 ? 'Good Afternoon' : 'Good Morning';

btn.addEventListener('click', function() {
    document.body.classList.toggle('dark')
})