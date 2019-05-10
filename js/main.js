  //fixed sidebar 
  $(document).ready(function(){

    $(".click").click(function(){
        $(".menu" ).toggleClass("sidemenu" );
        $(".contet-menu" ).toggleClass("opacity" );
        $( "body").toggleClass("bg");
        $( "body").toggleClass("margin-left-menu");
        $(".x").toggleClass("hide");
        $(".y").toggleClass("show");
    })
        $("#news-slider6").owlCarousel({
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        pagination:false,
        navigationText:false
    });
    $("#news-slider7").owlCarousel({
      items : 3,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      pagination:false,
      navigationText:false
  });
    new WOW().init();
  
  });
// Swiper slider
var swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });


  
   