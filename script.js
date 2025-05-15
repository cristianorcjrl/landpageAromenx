document.addEventListener('DOMContentLoaded', () => {
  console.log('Carrusel inicializado');
  new bootstrap.Carousel('#carouselPerfumes', {
    interval: 4000,
    pause: 'hover',
    ride: true
  });
});
