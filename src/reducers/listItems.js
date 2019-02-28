
import update from 'immutability-helper';
import findIndex from 'lodash/findIndex';
import filter from 'lodash/filter';
import * as listItemActionTypes from '../actionTypes/list';

const listItemWithUIState = (listItem, uiStatus, error, isSelected, id) => ({
    ...listItem,
    id,
    uiStatus,
    error,
    isSelected,
});

const initialState = () => [];

const listItemsReducer = (state=initialState(), action) => {
    switch(action.type) {
        case listItemActionTypes.ADD_ITEM_TO_LIST_REQUEST:
            const tempListItem = listItemWithUIState(action.item, 'LOADING', null, false, state.length);
            return update(state, {
                $push: [tempListItem],
              });
        case listItemActionTypes.ADD_ITEM_TO_LIST_SUCCESS:
              const newListItem = listItemWithUIState(action.item, 'LOADED', null, false, action.item.id);
              const index = findIndex(state, { id: action.item.id });
              return update(state, {
                [index]: {$set: newListItem},
              });
        case listItemActionTypes.REMOVE_ITEM_FROM_LIST_REQUEST: {
            const newListItem = listItemWithUIState(action.item, 'LOADING', null, false, action.item.id);
            const index = findIndex(state, { id: action.item.id });
            return update(state, {
            [index]: {$set: newListItem},
            });
        }
        case listItemActionTypes.REMOVE_ITEM_FROM_LIST_SUCCESS:
            const items = filter(state, (item) => item.id !== action.item.id);
            return items;
        case listItemActionTypes.REMOVE_ITEM_FROM_LIST_FAILURE:
        case listItemActionTypes.ADD_ITEM_TO_LIST_FAILURE:
                return update(state[action.index], {
                    uiStatus: 'LOADED',
                    error: action.e,
                  });
        case listItemActionTypes.UNLOAD_CURRENT_LIST:
                return initialState();
        default:
            return state;
    }
};

export default listItemsReducer;