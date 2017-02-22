'use strict';

const indexWorkoutsHandlebars = require('../templates/helpers/index-workouts.handlebars');

const onSuccess = function (data) {
  if (data.workout) {
    console.log(data.workout);
  } else {
    console.log(data.workouts);
  }
};

const onIndexSuccess = function (data) {
  $('#view-workouts').css('display', 'initial');

  let indexWorkoutsHtml = indexWorkoutsHandlebars({ workouts: data.workouts });
  $('#workit').html(indexWorkoutsHtml);
};

const onGetSuccess = function (data) {
  if (data.workout) {
    console.log(data.workout);
  }
};

const onError = function (response) {
  console.error(response);
};

const onPostSuccess = function (data) {
  console.log(data);
};

const onPatchSuccess = function (data) {
  console.log(data.workout);
};

module.exports = {
  onSuccess,
  onError,
  onPostSuccess,
  onPatchSuccess,
  onGetSuccess,
  onIndexSuccess,
};
