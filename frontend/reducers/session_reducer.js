import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const session = (state = _nullUser, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return { id: action.currentUser.id };
            nextState[id] = action.currentUser.id
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState = _nullUser
            return nextState;
        default:
            return state;
    }
};

export default session;