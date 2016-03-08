const user = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return state;
        }
        default:
            return state;
    }
};

module.exports = user;