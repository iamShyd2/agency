jQuery(document).ready(function($){
  $('#testimonial-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    items: 1,
    responsive: {
      992: {
        items: 3,
      }
    }
  })

  $('#blog-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    items: 1,
    responsive: {
      992: {
        items: 3,
      }
    }
  })

})
