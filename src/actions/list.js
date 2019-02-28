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

export const addItemToListRequest = (item, index) => ({
    type: listActionTypes.ADD_ITEM_TO_LIST_REQUEST,
    item,
    index,
});

export const addItemToListSuccess = (item) => ({
    type: listActionTypes.ADD_ITEM_TO_LIST_SUCCESS,
    item,
});

export const addItemToListFailure = (e) => ({
    type: listActionTypes.ADD_ITEM_TO_LIST_FAILURE,
    e,
});

export const removeItemFromListRequest = (item) => ({
    type: listActionTypes.REMOVE_ITEM_FROM_LIST_REQUEST,
    item,
});

export const removeItemFromListSuccess = (item) => ({
    type: listActionTypes.REMOVE_ITEM_FROM_LIST_SUCCESS,
    item,
});

export const removeItemToListFailure = (e) => ({
    type: listActionTypes.REMOVE_ITEM_FROM_LIST_FAILURE,
    e,
});

export const toggleSelectItem = (item) => ({
    type: listActionTypes.TOGGLE_SELECT_LIST_ITEM,
    item,
});

export const unLoadCurrentList = () => ({
    type: listActionTypes.UNLOAD_CURRENT_LIST,
});
