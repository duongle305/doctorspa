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
    $('.sidebar i').click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).parent().parent().toggleClass('active');
        if ($(this).parent().parent().hasClass('active')) {
            $(this).parent().next('.sub-nav').slideDown(200);
        } else {
            $(this).parent().next('.sub-nav').slideUp(200);
            $(this).parent().next('.sub-nav').find('.nav-item.active').each((i, item) => {
                $($(item).children('.sub-nav')[0]).slideUp();
                $(item).removeClass('active');
            });
        }
    });
});