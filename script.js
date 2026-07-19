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