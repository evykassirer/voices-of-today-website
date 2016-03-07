const { combineReducers } = require('redux');
const entries = require('./entries.js');
const exercises = require('./exercises.js');

const rootReducers = combineReducers({
    entries,
    exercises,
});

module.exports = rootReducers;
