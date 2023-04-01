"use strict";

const post_announcements = ($) => {
    const header = "Special header value leave me here";
    const footer = "Special footer value leave me here";
    const regex = new RegExp(`${header}(\\\\n)+(?<announcements>[a-zA-Z0-9].*[a-zA-Z0-9])(\\\\n)+${footer}`);

    fetch('https://docs.google.com/document/d/1oua98OaFsRKr2h1O6xs-y2wMqJDusQmetHB-0A7YIU8/edit?usp=sharing')
      .then((response) => response.text())
      .then((text) => {
        const match = text.match(regex);
        if (match) {
            return match.groups['announcements'].trim();
        } else {
            return "";
        }
        //return text.match(regex).groups['announcements'].trim();
      })
      .then((announcements) => {
        if (announcements) {
          console.log(announcements);
          $('#announcement_box').html(`
              <hr class='wp-block-separator has-css-opacity'>
              <h2>Announcements / Anuncios</h4>
              <h4>${announcements.replaceAll('\\n', '<br>')}</h4>
              <hr class='wp-block-separator has-css-opacity'>
          `);
        } else {
          console.log("No announcements!");
        }
      });
};

jQuery(document).ready(($) => {
  post_announcements($);
});