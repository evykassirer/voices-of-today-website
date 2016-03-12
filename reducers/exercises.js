const exercise = (state, action) => {
    switch (action.type) {
        case 'ADD_EXERCISE': {
            let highestId = 0;
            state.forEach((exercise) => {
                highestId = exercise.id > highestId ? exercise.id : highestId;
            });
            return {
                id: highestId + 1,
                exId: `ex-${highestId + 1}`,
                name: 'new exercise',
            };
        }
        case 'UPDATE_EXERCISE':
            return {
                ...state,
                name: action.name || state.name,
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
                exercise(state, action),
            ];
        case 'DELETE_EXERCISE': {
            const deletedExercisePos = state.findIndex((a) => {
                return a.id === action.id;
            });
            const newState = [...state];
            newState.splice(deletedExercisePos, 1);
            return newState;
        }
        case 'UPDATE_EXERCISE': {
            const updatedExercise = state.findIndex((a) => {
                return a.id === action.id;
            });
            const newState = [...state];
            newState[updatedExercise] = exercise(
                state[updatedExercise], action);
            return newState;
        }
        default:
            return state;
    }
};

module.exports = exercises;