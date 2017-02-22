'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const onGetWorkouts = function () {
    api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError);
};

module.exports = {
  onGetWorkouts,
};
