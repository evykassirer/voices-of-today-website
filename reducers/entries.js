const moment = require('moment');

const entry = (state, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return {
                id: action.id,
                date: moment().valueOf(),
                exercises: action.exercises,
            };
        default:
            return state;
    }
};

const entries = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return [
                ...state,
                entry(undefined, action),
            ];
        case 'DELETE_ENTRY': {
            const deletedEntry = state.findIndex((a) => {
                return a.id === action.id;
            });
            const newState = [...state];
            newState.splice(deletedEntry, 1);
            return newState;
        }
        default:
            return state;
    }
};

module.exports = entries;