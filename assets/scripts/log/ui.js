'use strict';

const indexLogsHandlebars = require('../templates/helpers/index-logs.handlebars');

const onSuccess = function (data) {
  //  debugger;
  if (data.log) {
  } else {
    $('#view-logs').css('display', 'initial');

    let indexLogsHtml = indexLogsHandlebars({ logs: data.logs });
    $('.table').html(indexLogsHtml);
  }
};

// const onIndexSuccess = function (data) {
//   if (data.logs) {
//
//   }
// }

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Log was successfully deleted.');
};

const onUpdateSuccess = function (data) {
  if (data) {
  }
};

const onCreateSuccess =function() {
  console.log('Successful log');
};

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess,
};
