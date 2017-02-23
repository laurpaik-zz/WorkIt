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
  $('#my-logs').hide();
  $('#view-logs').css('display', 'none');
  $('#view-my-logs').css('display', 'none');
  $('#view-workouts').css('display', 'none');
  $('.panel').hide();

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
    $('#view-my-logs').css('display', 'none');
    $('#view-workouts').css('display', 'none');
    $('.panel').hide();
    $('.table').html();
    $('#my-logs').hide();
    $('#athleteDOB').val("2000-01-01");
    $('#changepw').val('Change');
    $('#changePwSuccess').text('');
    $('.warning').text('');
    $('.collapsed').attr('data-toggle').modal('collapse');
  });
};

module.exports = {
  addHandlers,
};
