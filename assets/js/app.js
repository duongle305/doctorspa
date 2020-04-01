$(document).ready(() => {
    let btnToggle = $('.hamburger'), sideBar = $('.sidebar'), overlaySideBar = $('.overlay');
    btnToggle.click(() => {
        btnToggle.toggleClass('is-active');
        sideBar.toggleClass('show');
    });
    overlaySideBar.click(() => {
        btnToggle.removeClass('is-active');
        sideBar.removeClass('show');
    });
    $(window).resize(function () {
        if ($(this).width() >= 991) {
            sideBar.removeClass('show');
            btnToggle.removeClass('is-active')
        }
    });
});