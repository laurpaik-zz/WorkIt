'use strict';

const onError = function (response) {
  console.error(response);
};

const onUpdateSuccess = function (data) {
  console.log(data);
};

module.exports = {
  onError,
  onUpdateSuccess,
};
