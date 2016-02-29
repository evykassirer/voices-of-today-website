const exercise = (state, action) => {
    switch (action.type) {
        case 'ADD_EXERCISE':
            return {
                id: action.id,
                date: null,
                name: 'new exercise',
            };
        default:
            return state;
    }
};

const exercises = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXERCISE':
            return [
                ...state,
                exercise(undefined, action),
            ];
        default:
            return state;
    }
};

module.exports = exercises;