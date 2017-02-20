'use strict';

const indexLogsHandlebars = require('../templates/helpers/index-logs.handlebars');

const onSuccess = function (data) {
  //  debugger;
  if (data.log) {
    console.log(data.log);
  } else {
    console.table(data.logs);
    $('.view').css('display', 'initial');
    $('.view').text('');

    let indexLogsHtml = indexLogsHandlebars({ logs: data.log });
    $('.view').html(indexLogsHtml);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Log was successfully deleted.');
};

const onUpdateSuccess = function (data) {
  console.log(data.log);
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
