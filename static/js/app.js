"use strict";

jQuery(document).ready(function ($) {
    $('.mobile-toggle').on('click', function () {
        var expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
        $('.collapse').toggleClass('open');
    });
});
