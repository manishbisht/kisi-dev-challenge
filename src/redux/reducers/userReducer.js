import {createReducer} from 'redux-create-reducer'

const initialState = {
    locks: [],
    error: '',
};

export default createReducer(initialState, {
    ['GET_PLACES' + '_FULFILLED'](state, action) {
        return {
            ...state,
            locks: action.payload.data || [],
        }
    },
    ['CHANGE_LOCK' + '_FULFILLED'](state, action) {
        console.log(action);
        return {
            ...state,
            locks: action.payload.data || [],
        }
    },
});