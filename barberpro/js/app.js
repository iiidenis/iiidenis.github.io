'use strict';
$(function(){
  // Slider 
  $('.barbers__content').slick({
    dots: false,
  infinite: true,
  slidesToShow: 4,

  arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 515,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           arrows: false,
          dots: true,
          speed: 750,
          fade: true,
          cssEase: 'linear',
          autoplay: true,
          autoplaySpeed: 2500,


        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.cosmetics_content').slick({
    dots: false,
  infinite: true,
  slidesToShow: 5,

  arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           arrows: false,
          speed: 750,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
	

 });/*documen.ready*/  





  document.addEventListener('DOMContentLoaded', function() {

    // Burger-menu |||||||||||||||||

    document.getElementById('burger-menu').onclick = function() {
      let nav = document.getElementById('header-nav');

      clickBurger()

     document.body.onclick = function(e) {
       let navUl = document.querySelector('.header_nav ul');

       if (!e.target.closest('.burger_menu') && e.target !== navUl &&
            nav.classList.contains('active')) {

           clickBurger()
          }
     }

     window.addEventListener('resize', () => {
       
       if (window.innerWidth >= 950) {
          nav.classList.remove('active');
          nav.style.height = '';
       }

     });

    } // burger-menu.onclick

    function clickBurger() {
      let nav = document.getElementById('header-nav');
      let burger = document.getElementById('burger');
    
          if (nav.classList.contains('active')) {
              nav.style.height = 0;
              setTimeout(() => nav.classList.remove('active'),500);
              burger.classList.remove('open-burger')

    
          } else {
              nav.classList.add('active');
              burger.classList.add('open-burger')
              nav.style.height = nav.scrollHeight + 'px';
          }
    }


// ScrollPageToElement|||||||||||||||||||||

document.querySelectorAll('.header_nav a').forEach( function(navLink) {
  navLink.onclick = function(e) {
    e.preventDefault();

    let blockId = this.getAttribute('href');

    let blockPos = document.querySelector(blockId).getBoundingClientRect().top;

    window.scrollBy({
      top: blockPos,
      behavior: 'smooth'
    });

  }
});

// introReturn

window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop;
  let innerH = document.getElementById('intro').offsetHeight;

  if (scrollTop > (innerH - 50)) {
    document.getElementById('intro-back').classList.add('active');

  } else document.getElementById('intro-back').classList.remove('active');

});

document.getElementById('intro-back').onclick = () => {
  let pageScroll = -document.documentElement.scrollTop;
  window.scrollBy({top: pageScroll, behavior: 'smooth'})
  
}

  



   















  }); //document.Loaded


 





    

    
   

 


    