window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if(window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Navbar scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Filtros del portafolio
const filtros = document.querySelectorAll('.filtro-btn');
const cards = document.querySelectorAll('.proyecto-card');

filtros.forEach(btn => {
    btn.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');

        const filtro = btn.dataset.filtro;

        cards.forEach(card => {
            if (filtro === 'todos' || card.dataset.categoria === filtro) {
                card.classList.remove('oculto');
            } else {
                card.classList.add('oculto');
            }
        });
    });
});

// Formulario de contacto
const form = document.getElementById('contacto-form');
const exito = document.getElementById('form-exito');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            form.reset();
            exito.style.display = 'block';
        }
    });
}

// Carruseles
document.querySelectorAll('.carrusel').forEach(carrusel => {
    const track = carrusel.querySelector('.carrusel-track');
    const slides = carrusel.querySelectorAll('.carrusel-slide');
    const puntos = carrusel.querySelectorAll('.carrusel-punto');
    const btnPrev = carrusel.querySelector('.prev');
    const btnNext = carrusel.querySelector('.next');
    let indice = 0;

    function irA(n) {
        indice = (n + slides.length) % slides.length;
        track.style.transform = `translateX(-${indice * 100}%)`;
        puntos.forEach(p => p.classList.remove('activo'));
        if (puntos[indice]) puntos[indice].classList.add('activo');
    }

    if (btnPrev) btnPrev.addEventListener('click', () => irA(indice - 1));
    if (btnNext) btnNext.addEventListener('click', () => irA(indice + 1));

    puntos.forEach((punto, i) => {
        punto.addEventListener('click', () => irA(i));
    });

    // Ocultar flechas si hay un solo slide
    if (slides.length <= 1) {
        if (btnPrev) btnPrev.style.display = 'none';
        if (btnNext) btnNext.style.display = 'none';
    }
});



