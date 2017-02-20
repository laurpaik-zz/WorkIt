'use strict';

const onError = function (response) {
  console.error(response);
};

const onCreateSuccess = function (data) {
  console.log(data);
};

const onUpdateSuccess = function (data) {
  console.log(data);
};

module.exports = {
  onError,
  onCreateSuccess,
  onUpdateSuccess,
};
