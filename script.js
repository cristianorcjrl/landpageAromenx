document.addEventListener('DOMContentLoaded', () => {
  // Inicializa el carrusel de Bootstrap
  new bootstrap.Carousel('#carouselPerfumes', {
    interval: 3000,   // 3s entre slides
    pause: 'hover',
    ride: true
  });
});
