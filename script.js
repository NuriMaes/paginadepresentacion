/**
 * Script principal para Portfolio Express
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Configuración para el Intersection Observer
    const observerOptions = {
        root: null, // usa el viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% del elemento debe ser visible para disparar
    };

    // Crear el observador para las animaciones de scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento es visible en la pantalla
            if (entry.isIntersecting) {
                // Añadir la clase 'visible' que activa la transición en CSS
                entry.target.classList.add('visible');
                // Dejar de observar el elemento una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionar todos los elementos con la clase 'fade-in' y observarlos
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

});
