/********************************************************
  toggle resume, cover letter, and linkedin facts
********************************************************/

$(document).ready(() => {

  $('.resume .fact').show();
  $('.linkedIn .fact').hide();
  $('.coverLetter .fact').hide();

  $('.resume').on('click', () => {
    $('.linkedIn .fact').hide();
    $('.coverLetter .fact').hide();
    $('.resume .fact').fadeToggle();
  });

  $('.coverLetter').on('click', () => {
    $('.linkedIn .fact').hide();
    $('.coverLetter .fact').fadeToggle();
    $('.resume .fact').hide();
  });

  $('.linkedIn').on('click', () => {
    $('.linkedIn .fact').fadeToggle();
    $('.coverLetter .fact').hide();
    $('.resume .fact').hide();
  });

});