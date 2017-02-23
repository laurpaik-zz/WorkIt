'use strict';

const indexWorkoutsHandlebars = require('../templates/helpers/index-workouts.handlebars');

const onIndexSuccess = function (data) {
  $('#accordion').css('display', 'initial');
  $('#view-workouts').css('display', 'initial');

  let indexWorkoutsHtml = indexWorkoutsHandlebars({ workouts: data.workouts });
  $('#workit').html(indexWorkoutsHtml);
};

const onError = function (response) {
  console.error(response);
};

module.exports = {
  onError,
  onIndexSuccess,
};
