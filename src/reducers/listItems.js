
import update from 'immutability-helper';
import find from 'lodash/find';
import * as listItemActionTypes from '../actionTypes/list';

const listItemWithUIState = (listItem, uiStatus, error, isSelected) => ({
    ...listItem,
    uiStatus,
    error,
    isSelected,
});

const initialState = () => ({
    items: [],
});

const listReducer = (state=initialState(), action) => {
    switch(action.type) {
        case listItemActionTypes.ADD_ITEM_TO_LIST_REQUEST:
            const tempListItem = listItemWithUIState(action.item, 'LOADING', null, false);
            return update(state.items, {
                $push: [tempListItem],
              });
        case listItemActionTypes.ADD_ITEM_TO_LIST_SUCCESS:
              const newListItem = listItemWithUIState(action.item, 'LOADED', null, false);
              const itemToReplace = find(state.items, { id: action.item.id });
              return [
                  ...state.items,
                  state[itemToReplace] = newListItem,
              ];
        case listItemActionTypes.REMOVE_ITEM_TO_LIST_FAILURE:
        case listItemActionTypes.ADD_ITEM_TO_LIST_FAILURE:
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