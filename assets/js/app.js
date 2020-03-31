$(document).ready(() => {
    $(".main-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
    });
    $(".about-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
    });
});