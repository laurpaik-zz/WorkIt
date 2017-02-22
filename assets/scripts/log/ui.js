'use strict';

const indexLogsHandlebars = require('../templates/helpers/index-logs.handlebars');
const showLogsHandlebars = require('../templates/helpers/show-logs.handlebars');

const onSuccess = function (data) {
  //  debugger;
  $('#view-logs').css('display', 'initial');

  let indexLogsHtml = indexLogsHandlebars({ logs: data.logs });
  $('#world').html(indexLogsHtml);
};

const onCreateError = function (response) {
  console.error(response);
  $('#create-log-warning').text('Uh oh! Did you fill in all the blanks? Does the workout you want exist?');
};

const onDeleteSuccess = function () {
  $('#delete-log-warning').text('Delete Successful!');
  $('.inputs').val('');
  $('#create-log-warning').text('');
  $('#update-log-warning').text('');
  $('#update-athlete-warning').text('');
};

const onUpdateSuccess = function (data) {
  if (data) {
  }
  $('#update-log-warning').text('Update Successful!');
  $('.inputs').val('');
  $('#create-log-warning').text('');
  $('#delete-log-warning').text('');
  $('#update-athlete-warning').text('');
};

const onCreateSuccess =function() {
  $('#create-log-warning').text('Log created!');
  $('.inputs').val('');
  $('#delete-log-warning').text('');
  $('#update-log-warning').text('');
  $('#update-athlete-warning').text('');
};

const onDeleteError = function (response) {
  console.error(response);
  $('#delete-log-warning').text("You can't delete something you didn't make!");
};

const onUpdateError = function (response) {
  console.error(response);
  $('#update-log-warning').text("You can't update something you didn't make!");
};

const onShowSuccess = function(data){
  $('#view-my-logs').css('display', 'initial');

  let showLogsHtml = showLogsHandlebars({ logs: data.logs });
  $('#me').html(showLogsHtml);
};

module.exports = {
  onSuccess,
  onDeleteError,
  onCreateError,
  onUpdateError,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onShowSuccess,
};
