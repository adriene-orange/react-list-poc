import { put, takeEvery, all } from 'redux-saga/effects';
import * as listItemActions from '../actions/list';
import * as listItemActionTypes from '../actionTypes/list';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* addItemToList(action) {
    yield delay(1000);
    yield put(listItemActions.addItemToListSuccess(action.item))
}

function* removeItemFromList(action) {
    yield delay(1000);
    yield put(listItemActions.removeItemFromListSuccess(action.item));
}
  
function* listItemSaga() {
    yield takeEvery(listItemActionTypes.ADD_ITEM_TO_LIST_REQUEST, addItemToList);
    yield takeEvery(listItemActionTypes.REMOVE_ITEM_FROM_LIST_REQUEST, removeItemFromList);
}

export default function* rootSaga() {
    yield all([
        listItemSaga(),
    ])
};