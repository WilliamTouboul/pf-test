window.addEventListener('load', function () {
    const panel_to_slide = document.querySelector('.header_container_transition');
    const stabilo = document.querySelector('.stabilo');
    const panel_gallery = document.querySelector('.gallery_transition');

    setTimeout(() => {
        panel_to_slide.style.transition = 'all 1.6s ease-in-out';
        panel_to_slide.style.top = '100%';
    }, 600)
    setTimeout(() => {
        panel_to_slide.style.display = 'none'
    }, 2200)
    setTimeout(() => {
        stabilo.style.transition = 'all .8s';
        stabilo.style.width = '100%'
    }, 2200)
    setTimeout(() => {
        panel_gallery.style.transition = 'all 1.6s ease-in-out';
        panel_gallery.style.top = '100%';
    }, 2200)
    setTimeout(() => {
        panel_gallery.style.display = 'none';
    }, 3400)
});


const toggle = document.querySelector('.menu');
const navbar = document.querySelector('nav');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    if (navbar.classList.contains('nav_open')) {
        navbar.classList.remove('nav_open');
        body.style.overflow = 'none';
    } else {
        navbar.classList.add('nav_open');
        body.style.overflow = 'scroll';
    }
})