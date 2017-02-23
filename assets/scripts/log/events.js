'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');

const getFormFields = require('../../../lib/get-form-fields');

const onIndexLogs = function () {
  api.index()
  .then(ui.onSuccess)
  .catch(ui.onError);

};

const onShowLogs = function () {
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
    .then(onIndexLogs)
    .then(onShowLogs)
    .catch(ui.onCreateError);
};

const onDeleteLog = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.destroy(data.log.id)
    .then(ui.onDeleteSuccess)
    .then(onIndexLogs)
    .then(onShowLogs)
    .catch(ui.onDeleteError);
};

const onUpdateLog = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.update(data.log.id, data)
    .then(ui.onUpdateSuccess)
    .then(onIndexLogs)
    .then(onShowLogs)
    .catch(ui.onUpdateError);
};

const addHandlers = () => {
  $('#log-destroy').on('submit', function () {
    onDeleteLog(event);
  });
  $('#edit-log').on('submit', function () {
    onUpdateLog(event);
  });
  $('#post-log').on('submit', function () {
    onCreateLog(event);
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
