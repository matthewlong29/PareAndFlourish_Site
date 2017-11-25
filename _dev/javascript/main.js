jQuery(document).ready(() => {

  "use strict";
  
  /********************************************************
  remove image tag dragability
  ********************************************************/

  $("img").mousedown(() => {
    return false;
  });

  /********************************************************
  add email to footer
  ********************************************************/

  // Add email to footer
  const emailX = 'contact';
  const emailY = 'pareandflourish';
  $('.footerContact .email').html('Email: <a href="mailto:' + emailX + '@' + emailY + '.com">' + emailX + '@' + emailY + '.com</a>');

});