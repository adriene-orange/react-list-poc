import * as listActionTypes from '../actionTypes/list';

export const loadListRequest = (listId) => ({
    type: listActionTypes.LOAD_LIST_REQUEST,
    listId,
});

export const loadListSuccess = (data) => ({
    type: listActionTypes.LOAD_LIST_SUCCESS,
    data,
});

export const loadListFailure = (e) => ({
    type: listActionTypes.LOAD_LIST_FAILURE,
    e,
});

export const addItemToListRequest = (item) => ({
    type: listActionTypes.ADD_ITEM_TO_LIST_REQUEST,
    item,
});

export const addItemToListSuccess = (data) => ({
    type: listActionTypes.ADD_ITEM_TO_LIST_SUCCESS,
    data,
});

export const addItemToListFailure = (e) => ({
    type: listActionTypes.ADD_ITEM_TO_LIST_FAILURE,
    e,
});

export const removeItemFromListRequest = (itemId) => ({
    type: listActionTypes.REMOVE_ITEM_TO_LIST_REQUEST,
    itemId,
});

export const removeItemFromListSuccess = (data) => ({
    type: listActionTypes.REMOVE_ITEM_TO_LIST_SUCCESS,
    data,
});

export const removeItemToListFailure = (e) => ({
    type: listActionTypes.REMOVE_ITEM_TO_LIST_FAILURE,
    e,
});

export const toggleSelectItem = (itemId) => ({
    type: listActionTypes.TOGGLE_SELECT_LIST_ITEM,
    itemId,
});

export const unLoadCurrentList = () => ({
    type: listActionTypes.UNLOAD_CURRENT_LIST,
});
