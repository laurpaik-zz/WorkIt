'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');

const getFormFields = require('../../../lib/get-form-fields');

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

const onGetLogs = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  if (data.log.id.length === 0) {
    api.index()
    .then(ui.onSuccess)
    .catch(ui.onError);
  } else {
    api.show(data.log.id)
    .then(ui.onSuccess)
    .catch(ui.onError);
  }
};

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
  $('#log-search').on('submit', onGetLogs);
  $('#log-destroy').on('submit', onDeleteLog);
  $('#edit-log').on('submit', onUpdateLog);
  $('#post-log').on('submit', onCreateLog);
};

module.exports = {
  onGetLogs,
  onDeleteLog,
  onUpdateLog,
  onCreateLog,
  addHandlers,
};
