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

const update = function (id, given_name, surname, date_of_birth) {
  return $.ajax({
    url: config.apiOrigin + '/athletes/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data: {
      given_name: given_name,
      surname: surname,
      date_of_birth: date_of_birth,
    }
  });
};

module.exports = {
  create,
  update,
};
