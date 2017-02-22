'use strict';

const config = require('../config.js');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/workouts',
    method: 'GET',
  });
};

module.exports = {
  index,
};
