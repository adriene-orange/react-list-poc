
import update from 'immutability-helper';
import * as listItemActionTypes from '../actionTypes/list';

const initialState = () => ({
    id: null,
    uiStatus: 'LOADED',
    error: null,
});

const listReducer = (state=initialState(), action) => {
    switch(action.type) {
        case listItemActionTypes.LOAD_LIST_REQUEST:
            return update(state, {
                id: action.listId,
                uiStatus: 'LOADING',
                error: null,
              });
        case listItemActionTypes.LOAD_LIST_SUCCESS:
              return update(state, {
                  uiStatus: 'LOADED',
                });
        case listItemActionTypes.LOAD_LIST_FAILURE:
                return update(state, {
                    uiStatus: 'LOADED',
                    error: action.e,
                  });
        case listItemActionTypes.UNLOAD_CURRENT_LIST:
                return initialState();
        default:
            return state;
    }
};

export default listReducer;