jQuery(document).ready(function ($) {
    if ($(window).width() >= 767) {
        $('.navbar-nav > li.menu-item > a').click(function () {
            window.location = $(this).attr('href');
        });
    }

    if ($(window).width() <= 991) {
        $('.mobile-toggle').on('click', function () {
            $('.collapse').toggleClass('open');
        });
    }
});