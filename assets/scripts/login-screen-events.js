'use strict';

const addHandlers = () => {
//initial screen
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#board').hide();
  $('.banner').hide();
  $('#game-search').hide();
  $('#reset').hide();
  $('#begin').hide();
//on signing out, goes back to original sign in page
  $('#sign-out').on('submit', () => {
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-out').hide();
    $('#change-password').hide();
    $('#board').hide();
    $('.banner').hide();
    $('#game-search').hide();
    $('#reset').hide();
    $('#begin').hide();
  });
};

module.exports = {
  addHandlers,
};
