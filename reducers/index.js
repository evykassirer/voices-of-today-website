const { combineReducers } = require('redux');
const entries = require('./entries.js');
const exercises = require('./exercises.js');

const weightAppReducers = combineReducers({
    entries,
    exercises,
});

module.exports = weightAppReducers;
