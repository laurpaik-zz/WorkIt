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
    .catch(ui.onError);
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
    .catch(ui.onError);
};

const onUpdateLog = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.update(data.log.id, data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError);
};

const addHandlers = () => {
  $('#sign-in').on('submit', onIndexLogs);
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
  addHandlers,
};
