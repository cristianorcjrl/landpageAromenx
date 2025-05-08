document.addEventListener('DOMContentLoaded', () => {
    console.log("Carrusel cargado con éxito.");
    
    // Inicialización del carrusel con Bootstrap JS
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselPerfumes'), {
        interval: 3000,  // Intervalo de 3 segundos entre las imágenes
        pause: 'hover',  // Detener el carrusel cuando el mouse pase por encima
    });

    // Función personalizada si se desea interactuar con el carrusel
    // Aquí puedes agregar funcionalidades extras si es necesario
});
