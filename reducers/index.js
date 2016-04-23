const { combineReducers } = require('redux');

const something = require('./something.js');

const rootReducers = combineReducers({
    something,
});

module.exports = rootReducers;
