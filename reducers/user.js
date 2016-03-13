const user = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return action.id;
        }
        case 'LOGOUT': {
            return null;
        }
        default:
            return state;
    }
};

module.exports = user;