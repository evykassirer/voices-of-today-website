const something = (state = null, action) => {
    switch (action.type) {
        case 'SOMETHING': {
            return action.something;
        }
        default:
            return state;
    }
};

module.exports = something;