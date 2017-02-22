'use strict';

const onError = function (response) {
  console.error(response);
  $('#update-athlete-warning').text('Something went wrong. Did you fill in the blanks?');
  $('#create-log-warning').text('');
  $('#delete-log-warning').text('');
  $('#update-log-warning').text('');
};

const onUpdateSuccess = function (data) {
  console.log(data);
  $('#update-athlete-warning').text('Athlete profile updated!');
  $('#create-log-warning').text('');
  $('#delete-log-warning').text('');
  $('#update-log-warning').text('');
};

module.exports = {
  onError,
  onUpdateSuccess,
};
