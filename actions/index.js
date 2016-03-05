
let nextEntryId = 0;
const addEntry = () => {
    return {
        type: 'ADD_ENTRY',
        id: nextEntryId++,
        exercises: {},
    };
};
const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        id: id,
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
    deleteEntry,
    addExercise,
};