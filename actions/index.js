
let nextEntryId = 0;
const addEntry = () => {
    return {
        type: 'ADD_ENTRY',
        id: nextEntryId++,
        exercises: {},
    };
};

let nextExerciseId = 0;
const addExercise = () => {
    return {
        type: 'ADD_EXERCISE',
        id: nextExerciseId++,
    };
};

module.exports = {
    addEntry,
    addExercise,
};