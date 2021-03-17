$(document).ready(function () {
    $(".slider-1").owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 15000,
        autowidth: true,
        dots: false,
        pagination: false,
        smartSpeed: 2000
    });
    $(".slider-2").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<img class='carouselArrLeft' src='../img/arl.png'>", "<img class='carouselArrRight' src='../img/arr.png'>"],
        autoplay: true,
        autoplayTimeout: 10000,
        autowidth: true,
        dots: true,
        pagination: true,
        smartSpeed: 1500
    });

    $(".slider-3").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<img class='carouselArrLeft' src='../img/arl.png'>", "<img class='carouselArrRight' src='../img/arr.png'>"],
        autoplay: true,
        autoplayTimeout: 10000,
        autowidth: true,
        dots: true,
        pagination: true,
        smartSpeed: 1500
    });
});


// $(document).ready(function () {
//     $(".slider-2").owlCarousel({
//         items: 1,
//         loop: true,
//         nav: true,
//         navText: ["<img class='carouselArrLeft' src='img/arr.png'>", "<img class='carouselArrRight' src='img/arr.png'>"],
//         autoplay: true,
//         autoplayTimeout: 5000,
//         autowidth: true,
//         dots: true,
//         pagination: true,
//         smartSpeed: 1000
//     });
// });

// $(document).ready(function () {
//     $("#owl-card").owlCarousel({
//         items: 1,
//         loop: true,
//         nav: true,
//         autoplay: true,
//         autoplayTimeout: 5000,
//         autowidth: true,
//         dots: true,
//         pagination: true,
//         smartSpeed: 1000
//     });
// });
