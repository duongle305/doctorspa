

(function ($) {
    // Color Changer
    $('.color-changer li a').on('click', function(e){
        var color = $(this).data('bgcolor');
        $('.dc-menu .dc-list').css({'background-color': color});
        e.preventDefault();
    });
    $(document).ready(function() {
        $('.ac-list > li.expanded > a').on('click', function(e) {
            e.preventDefault();
            if($(this).next('ul.sub-menu').is(':visible')) {
                $(this).removeClass('open');
                $(this).next('ul.sub-menu').slideUp();
            } else {
                $('.ac-list > li.expanded > a').removeClass('open');
                $(this).addClass('open');
                $('.ac-list > li.expanded > a').next('ul.sub-menu').slideUp();
                $(this).next('ul.sub-menu').slideToggle();
            }
        });

        var $menu = $('.bc-list');
        $menu.find('li.expanded > a').on('click', function(e) {
            e.preventDefault();
            if($(this).next('ul.sub-menu').is(':visible')) {
                $(this).removeClass('open');
                $(this).next('ul.sub-menu').slideUp();
            } else {
                $menu.find('li.expanded > a').removeClass('open');
                $(this).addClass('open');
                $menu.find('li.expanded > a').next('ul.sub-menu').slideUp();
                $(this).next('ul.sub-menu').slideToggle();
            }
        });

        var $cmenu = $('.cc-list');
        $cmenu.find('li.expanded > a').on('click', function(e) {
            e.preventDefault();
            if($(this).next('ul.sub-menu').is(':visible')) {
                $(this).removeClass('open');
                $(this).next('ul.sub-menu').slideUp();
            } else {
                $cmenu.find('li.expanded > a').removeClass('open');
                $(this).addClass('open');
                $cmenu.find('li.expanded > a').next('ul.sub-menu').slideUp();
                $(this).next('ul.sub-menu').slideToggle();
            }
        });

        var $dmenu = $('.dc-list');
        $dmenu.find('li.expanded > a').on('click', function(e) {
            e.preventDefault();
            if($(this).next('ul.sub-menu').is(':visible')) {
                $(this).removeClass('open');
                $(this).next('ul.sub-menu').slideUp();
            } else {
                $dmenu.find('li.expanded > a').removeClass('open');
                $(this).addClass('open');
                $dmenu.find('li.expanded > a').next('ul.sub-menu').slideUp();
                $(this).next('ul.sub-menu').slideToggle();
            }
        });

        var $emenu = $('#three-one');
        $emenu.find('li.expanded > a').on('click', function(e) {
            e.preventDefault();
            if($(this).next('ul.sub-menu').is(':visible')) {
                $(this).parent().removeClass('open');
                $(this).next('ul.sub-menu').slideUp();
            } else {
                $emenu.find('li.expanded').removeClass('open');
                $(this).parent().addClass('open');
                $emenu.find('li.expanded').children('ul.sub-menu').slideUp();
                $(this).next('ul.sub-menu').slideToggle();
            }
        });

        $(".sidebar .ec-list > .expanded > a").click(function() {
            var e = $(this).next(".sub-menu")
                , a = ".sidebar .ec-list > li.expanded > .sub-menu";
            0 === $(".page-sidebar-minified").length && ($(a).not(e).slideUp(function() {
                $(this).closest("li").removeClass("open")
            }),
                $(e).slideToggle(function() {
                    var e = $(this).closest("li");
                    $(e).hasClass("open") ? $(e).removeClass("open") : $(e).addClass("open")
                }))
        }),
            $(".sidebar .ec-list > .expanded .sub-menu li.expanded > a").click(function() {
                if (0 === $(".page-sidebar-minified").length) {
                    var e = $(this).next(".sub-menu");
                    $(e).slideToggle()
                }
            });
    });
})(jQuery);