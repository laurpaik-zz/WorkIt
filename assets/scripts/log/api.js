'use strict';

const config = require('../config.js');
const store = require('../store.js');

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/logs',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/logs',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/logs/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const update = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/logs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    method: 'DELETE',
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
