'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const logEvents = require('./log/events');
const athleteEvents = require('./athletes/events');
const auth = require('./auth/events');
const firstScreen = require('./login-screen-events.js');
// const workoutEvents = require('./workout/events');
// const workoutEvents = require('./workout/events');

$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(() => {
  firstScreen.addHandlers();
  auth.addHandlers();
  // workoutEvents.addHandlers();
  athleteEvents.addHandlers();
  logEvents.addHandlers();
});
