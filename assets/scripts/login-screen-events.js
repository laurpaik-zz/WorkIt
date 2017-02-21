'use strict';

const addHandlers = () => {
//initial screen
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#post-athlete').hide();
  // $('#log-search').hide();
  $('#post-log').hide();
  $('#edit-log').hide();
  $('#log-destroy').hide();
  $('#edit-athlete').hide();

//on signing out, goes back to original sign in page
  $('#sign-out').on('submit', () => {
    $('#sign-in').show();
    $('#sign-up').show();
    $('#sign-out').hide();
    $('#change-password').hide();
    $('#post-athlete').hide();
    // $('#log-search').hide();
    $('#post-log').hide();
    $('#edit-log').hide();
    $('#log-destroy').hide();
    $('#edit-athlete').hide();
    $('#view-logs').css('display', 'none');
    $('.table').html();
  });
};

module.exports = {
  addHandlers,
};
