export const loadListRequest = (listId) => ({
    type: 'LOAD_LIST_REQUEST',
    listId,
});

export const loadListSuccess = (data) => ({
    type: 'LOAD_LIST_SUCCESS',
    data,
});

export const loadListFailure = (e) => ({
    type: 'LOAD_LIST_FAILURE',
    e,
});

export const addItemToListRequest = (item) => ({
    type: 'ADD_ITEM_TO_LIST_REQUEST',
    item,
});

export const addItemToListSuccess = (data) => ({
    type: 'ADD_ITEM_TO_LIST_FAILURE',
    data,
});

export const addItemToListFailure = (e) => ({
    type: 'ADD_ITEM_TO_LIST_FAILURE',
    e,
});

export const removeItemFromListRequest = (itemId) => ({
    type: 'REMOVE_ITEM_TO_LIST_REQUEST',
    itemId,
});

export const removeItemFromListSuccess = (data) => ({
    type: 'REMOVE_ITEM_TO_LIST_SUCCESS',
    data,
});

export const removeItemToListFailure = (e) => ({
    type: 'REMOVE_ITEM_TO_LIST_FAILURE',
    e,
});