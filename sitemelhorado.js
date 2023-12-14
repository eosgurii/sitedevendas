const navbar = document.querySelector('.navbar');

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});