// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector("header");
    const container = document.querySelector("header>.w-full");
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        container.classList.remove("sm:rounded-2xl");
    } else {
        header.classList.remove("navbar-fixed");
        container.classList.add("sm:rounded-2xl");
    }
};

// Hamburger Aktif
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Informasi Aktif
const informasi = document.getElementById('informasi-dropdown');
const informasiMenu = document.getElementById('informasi-menu');
informasi.addEventListener('mouseenter', function() {
    informasiMenu.classList.remove('hidden');
});

informasi.addEventListener('mouseleave', () => {
    informasiMenu.addEventListener('mouseenter', function() {
        informasiMenu.classList.remove('hidden');
    });
});

informasi.addEventListener('mouseleave', () => {
    informasiMenu.classList.add('hidden');
});

informasiMenu.addEventListener('mouseleave', () => {
    informasiMenu.classList.add('hidden');
});

informasi.addEventListener('click', () => {
    informasiMenu.classList.toggle('hidden');
});

// Informasi Aktif Mobile
const informasiSm = document.getElementById('informasi-dropdown-sm');
const informasiMenuSm = document.getElementById('informasi-menu-sm');

informasiSm.addEventListener('mouseenter', function() {
    informasiMenuSm.classList.remove('hidden');
});

informasiSm.addEventListener('click', function() {
    informasiMenuSm.classList.toggle('hidden');
});