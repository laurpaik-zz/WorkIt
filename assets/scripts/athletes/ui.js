'use strict';

const onError = function (response) {
  console.error(response);
};

const onCreateSuccess = function (data) {
  console.log(data.athlete);
};

const onUpdateSuccess = function (data) {
  console.log(data.athlete);
};

module.exports = {
  onError,
  onCreateSuccess,
  onUpdateSuccess,
};
