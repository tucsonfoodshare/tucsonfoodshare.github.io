"use strict";

const post_announcements = ($) => {
    const header = "Special header value leave me here";
    const footer = "Special footer value leave me here";
    const url = "https://docs.google.com/document/d/1oua98OaFsRKr2h1O6xs-y2wMqJDusQmetHB-0A7YIU8/edit?overridemobile=true";

    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const lines = text.replace(/\r\n?/g, "\n").split("\n");
        console.log(lines);

        let collecting_lines = false;
        const result = [];

        for (const line of lines) {
          const trimmed = line.trim();
          // if we see a header, start collecting lines
          if (trimmed === header) {
            collecting_lines = true;
            continue;
          }

          // stop collecting lines at the first footer
          if (trimmed === footer && collecting_lines) {
            break;
          }

          // append every line in between to our array
          if (collecting_lines) {
            result.push(line);
          }
        }
        console.log(result)
        return result.join("\n").trim();
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
