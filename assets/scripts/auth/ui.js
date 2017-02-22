'use strict';

const success = (data) => {
  if (data) {
  }
};

const signInSuccess = (data) => {
  if (data) {
  }
  $('#enter-password').val('sign in');
  $('#sign-up-button').val('sign up');
  $('.inputs').val('');
  $('#sign-in').hide();
  $('#sign-up').hide();
  $('#change-password').show();
  $('#sign-out').show();
  $('#post-log').show();
  // $('#log-search').show();
  $('#edit-log').show();
  $('#log-destroy').show();
  $('#edit-athlete').show();
  $('#my-logs').show();
};

const changePwFailure = (error) => {
  console.error(error);
  $('#changepw').val('please try again.');
};

const signInFailure = (error) => {
  console.error(error);
  $('#enter-password').val('please try again.');
};

const signUpSuccess = (data) => {
  if (data) {
  }
  $('#sign-up').hide();
};

const emailFailure = (error) => {
  console.error(error);
  $('#sign-up-button').val('try a different email or check your password');
};



module.exports = {
  changePwFailure,
  success,
  signInFailure,
  signInSuccess,
  signUpSuccess,
  emailFailure,
};
