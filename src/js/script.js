// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector("header");
    const container = document.querySelector("header>.w-full");
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add("fixed");
        header.classList.remove("absolute");
        container.classList.remove("sm:rounded-2xl");
        container.classList.add("sm:rounded-b-2xl");
        header.classList.remove("sm:px-8");
        header.classList.add("sm:px-4");
        header.classList.remove("sm:py-6");
    } else {
        header.classList.remove("fixed");
        header.classList.add("absolute");
        container.classList.add("sm:rounded-2xl");
        header.classList.add("sm:px-8");
        header.classList.remove("sm:px-4");
        header.classList.add("sm:py-6");
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
    informasiMenu.classList.remove('scale-0');
});

informasi.addEventListener('mouseleave', () => {
    informasiMenu.addEventListener('mouseenter', function() {
        informasiMenu.classList.remove('scale-0');
    });
});

informasi.addEventListener('mouseleave', () => {
    informasiMenu.classList.add('scale-0');
});

informasiMenu.addEventListener('mouseleave', () => {
    informasiMenu.classList.add('scale-0');
});

informasi.addEventListener('click', () => {
    informasiMenu.classList.toggle('scale-0');
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