'use strict';

const onSuccess = function (data) {
  if (data.athlete) {
    console.log(data.athlete);
  } else {
    console.log(data.athletes);
  }
};

const onIndexSuccess = function (data) {
  if (data.athletes) {
    console.log(data.athletes);
  }
};

const onGetSuccess = function (data) {
  if (data.athlete) {
    console.log(data.athlete);
  }
};

const onError = function (response) {
  console.error(response);
};

const onPostSuccess = function (data) {
  console.log(data);
};

const onPatchSuccess = function (data) {
  console.log(data.athlete);
};

module.exports = {
  onSuccess,
  onError,
  onPostSuccess,
  onPatchSuccess,
  onGetSuccess,
  onIndexSuccess,
};
