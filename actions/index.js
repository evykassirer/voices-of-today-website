

// Login
const login = (id) => {
    return {
        type: 'LOGIN',
        id: id,
    };
};


// Entries
const addEntry = () => {
    return {
        type: 'ADD_ENTRY',
    };
};
const updateEntryDate = (id, date) => {
    return {
        type: 'UPDATE_ENTRY',
        id,
        date,
    };
};
const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        id,
    };
};
const addExerciseToEntry = (entryId, exerciseId, weight, reps) => {
    return {
        type: 'ADD_EXERCISE_TO_ENTRY',
        entryId,
        exerciseId,
        weight,
        reps,
    };
};

// Exercises
const addExercise = () => {
    return {
        type: 'ADD_EXERCISE',
    };
};
const updateExercise = (id, name) => {
    return {
        type: 'UPDATE_EXERCISE',
        id,
        name,
    };
};
const deleteExercise = (id) => {
    return {
        type: 'DELETE_EXERCISE',
        id,
    };
};

module.exports = {
    login,

    addEntry,
    addExerciseToEntry,
    deleteEntry,
    updateEntryDate,

    addExercise,
    updateExercise,
    deleteExercise,
};