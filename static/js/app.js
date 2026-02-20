"use strict";

jQuery(document).ready(function ($) {
    if ($(window).width() >= 767) {
        $('.navbar-nav > li.menu-item > a').click(function () {
            window.location = $(this).attr('href');
        });
    }

    $('.mobile-toggle').on('click', function () {
        var expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
        $('.collapse').toggleClass('open');
    });
});
