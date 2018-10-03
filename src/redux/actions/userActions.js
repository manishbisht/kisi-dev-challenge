import API from '../../utils/api'

export function getLocks(data) {
    return (dispatch) => {
        dispatch({
            type: 'GET_PLACES',
            payload: API.getLocks(data).then((response) => {
                return response;
            })
        });
    };
}

export function changeLock(data, state) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_LOCK',
            payload: API.changeLock(data).then((response) => {
                return response;
            })
        });
    };
}