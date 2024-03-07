
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,  
    dots:true,
    autoplay: true,
    autoplayHoverPause: true,    
    smartSpeed: 500,
    autoplayTimeout: 7000,
    navText: [
        "<i class='fa-solid fa-chevron-left carousel_icon carousel_icon_left'></i>",
        "<i class='fa-solid fa-chevron-right carousel_icon carousel_icon_right'></i>"
      ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })