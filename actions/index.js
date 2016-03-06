
const addEntry = () => {
    return {
        type: 'ADD_ENTRY',
    };
};
const updateEntryDate = (id, date) => {
    return {
        type: 'UPDATE_ENTRY',
        id: id,
        date: date,
    };
};
const deleteEntry = (id) => {
    return {
        type: 'DELETE_ENTRY',
        id: id,
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
        id: id,
        name: name,
    };
};
const deleteExercise = (id) => {
    return {
        type: 'DELETE_EXERCISE',
        id: id,
    };
};

module.exports = {
    addEntry,
    deleteEntry,
    updateEntryDate,

    addExercise,
    updateExercise,
    deleteExercise,
};