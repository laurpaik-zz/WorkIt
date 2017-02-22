'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');

const getFormFields = require('../../../lib/get-form-fields');

const onIndexLogs = function (event) {
  event.preventDefault();
  // let data = getFormFields(event.target);
  api.index()
  .then(ui.onSuccess)
  .catch(ui.onError);

};

const onShowLogs = function (event) {
  event.preventDefault();
  api.show()
  .then(ui.onShowSuccess)
  .catch(ui.onShowError);
};

const onCreateLog = function (event) {
  event.preventDefault();

  $('#hidden-athlete').val(store.user.id);
  let data = getFormFields(event.target);
  api.create(data)
    .then((response) => {
      store.log = response.log;
      return store.log;
    })
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateError);
};

// const onGetLogs = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//
//   if (data.log.id.length === 0) {
//     api.index()
//     .then(ui.onSuccess)
//     .catch(ui.onError);
//   } else {
//     api.show(data.log.id)
//     .then(ui.onSuccess)
//     .catch(ui.onError);
//   }
// };

const onDeleteLog = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.destroy(data.log.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteError);
};

const onUpdateLog = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.update(data.log.id, data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateError);
};

const addHandlers = () => {
  $('#sign-in').on('submit', onIndexLogs);
  $('#my-logs').on('submit', onShowLogs);
  $('#log-destroy').on('submit', function () {
    onDeleteLog(event);
    onIndexLogs(event);
  });
  $('#edit-log').on('submit', function () {
    onUpdateLog(event);
    onIndexLogs(event);
  });
  $('#post-log').on('submit', function () {
    onCreateLog(event);
    onIndexLogs(event);
  });
};

module.exports = {
  onIndexLogs,
  onDeleteLog,
  onUpdateLog,
  onCreateLog,
  onShowLogs,
  addHandlers,
};
