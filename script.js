document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Adaugăm efect de scroll smooth pentru linkurile de navigare
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Adăugăm un efect de schimbare a culorii de fundal pentru fiecare secțiune la hover
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#ccc';
        });
        section.addEventListener('mouseleave', function () {
            this.style.backgroundColor = '#fff';
        });
    });
});
