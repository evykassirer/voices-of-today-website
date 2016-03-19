const moment = require('moment');

const entry = (state, action) => {
    switch (action.type) {
        case 'ADD_ENTRY': {
            let highestId = 0;
            state.forEach((entry) => {
                highestId = entry.id > highestId ? entry.id : highestId;
            });
            return {
                id: highestId + 1,
                date: moment().valueOf(),
                exercises: {},
                deleted: false,
            };
        }
        case 'UPDATE_ENTRY':
            return {
                id: action.id || state.id,
                date: action.date || state.date,
                exercises: action.exercises || state.exercises,
            };
        case 'DELETE_ENTRY':
            return {
                ...state,
                deleted: true,
            };
        case 'ADD_EXERCISE_TO_ENTRY':
            return {
                ...state,
                exercises: {
                    ...state.exercises,
                    [action.exerciseId]: {
                        weight: action.weight || null,
                        reps: action.reps || null,
                    },
                },
            };
        default:
            return state;
    }
};

const entries = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ENTRIES':
            return action.entries || [];
        case 'ADD_ENTRY':
            return [
                ...state,
                entry(state, action),
            ];
        case 'DELETE_ENTRY': {
            const deletedEntry = state.findIndex((a) => {
                return a.id === action.id;
            });
            const newState = [...state];
            newState[deletedEntry] = entry(state[deletedEntry], action);
            return newState;
        }
        case 'UPDATE_ENTRY': {
            const updatedEntry = state.findIndex((a) => {
                return a.id === action.id;
            });
            const newState = [...state];
            newState[updatedEntry] = entry(state[updatedEntry], action);
            return newState;
        }
        case 'ADD_EXERCISE_TO_ENTRY': {
            const updatedEntry = state.findIndex((a) => {
                return a.id === action.entryId;
            });
            const newState = [...state];
            newState[updatedEntry] = entry(state[updatedEntry], action);
            return newState;
        }
        default:
            return state;
    }
};

module.exports = entries;