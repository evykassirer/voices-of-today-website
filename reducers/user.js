const user = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return action.id;
        }
        default:
            return state;
    }
};

module.exports = user;