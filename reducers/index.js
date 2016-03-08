const { combineReducers } = require('redux');
const entries = require('./entries.js');
const exercises = require('./exercises.js');
const user = require('./user.js');

const rootReducers = combineReducers({
    entries,
    exercises,
    user,
});

module.exports = rootReducers;
