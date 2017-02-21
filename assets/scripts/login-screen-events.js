'use strict';

const addHandlers = () => {
//initial screen
  $('#sign-out').hide();
  $('#change-password').hide();

//on signing out, goes back to original sign in page
  $('#sign-out').on('submit', () => {
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-out').hide();
    $('#change-password').hide();
  });
};

module.exports = {
  addHandlers,
};
