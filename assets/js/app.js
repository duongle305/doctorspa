$(document).ready(() => {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.sidebar').toggleClass('show');
    });
    $('.overlay').click(() => {
        $('.hamburger').removeClass('is-active');
        $('.sidebar').removeClass('show');
    })
});