const projectsSlider = new Swiper('.projects-slider', {
    speed: 400,
    // spaceBetween: 100,
    slidePerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.projects-slider-next',
        prevEl: '.projects-slider-prev',
    }
  });