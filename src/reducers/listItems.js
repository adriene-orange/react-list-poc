import update from 'immutability-helper';
import findIndex from 'lodash/findIndex';
import filter from 'lodash/filter';
import * as listItemActionTypes from '../actionTypes/list';

const listItemWithUIState = (listItem, uiStatus, error, isSelected) => ({
    ...listItem,
    uiStatus,
    error,
    isSelected,
});

const initialState = () => [];

const listItemsReducer = (state=initialState(), action) => {
    switch(action.type) {
        case listItemActionTypes.ADD_ITEM_TO_LIST_REQUEST:
            const tempListItem = listItemWithUIState(action.item, 'LOADING', null, false);
            return update(state, {
                $push: [tempListItem],
            });
        case listItemActionTypes.ADD_ITEM_TO_LIST_SUCCESS:
            const newListItem = listItemWithUIState(action.item, 'LOADED', null, false);
            const index = findIndex(state, { id: action.item.id });
            return update(state, {
                [index]: {$set: newListItem},
            });
        case listItemActionTypes.TOGGLE_SELECT_LIST_ITEM: {
            const newListItem = listItemWithUIState(action.item, 'LOADED', null, !action.item.isSelected);
            const index = findIndex(state, { id: action.item.id });
            return update(state, {
                [index]: {$set: newListItem},
            });
        }
        case listItemActionTypes.REMOVE_ITEM_FROM_LIST_REQUEST: {
            const newListItem = listItemWithUIState(action.item, 'LOADING', null, false);
            const index = findIndex(state, { id: action.item.id });
            return update(state, {
                [index]: {$set: newListItem},
            });
        }
        case listItemActionTypes.REMOVE_ITEM_FROM_LIST_SUCCESS:
            return filter(state, (item) => item.id !== action.item.id);
        case listItemActionTypes.REMOVE_ITEM_FROM_LIST_FAILURE:
        case listItemActionTypes.ADD_ITEM_TO_LIST_FAILURE:
            return update(state, {
                [action.index]:  {
                    uiStatus: {$set: 'LOADED'},
                    error: {$set: action.e},
                }
            });
        case listItemActionTypes.UNLOAD_CURRENT_LIST:
            return initialState();
        default:
            return state;
    }
};

export default listItemsReducer;