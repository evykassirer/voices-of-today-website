
// User actions
const login = (id) => {
    return {
        type: 'LOGIN',
        id: id,
    };
};

const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

// Entries
const loadEntries = (entries) => {
    return {
        type: 'LOAD_ENTRIES',
        entries: entries,
    };
};
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
const loadExercises = (exercises) => {
    return {
        type: 'LOAD_EXERCISES',
        exercises: exercises,
    };
};
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
    logout,

    loadEntries,
    addEntry,
    addExerciseToEntry,
    deleteEntry,
    updateEntryDate,

    loadExercises,
    addExercise,
    updateExercise,
    deleteExercise,
};