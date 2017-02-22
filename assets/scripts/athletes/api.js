'use strict';

const config = require('../config.js');
const store = require('../store.js');

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/athletes',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const update = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/athletes/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

module.exports = {
  create,
  update,
};
