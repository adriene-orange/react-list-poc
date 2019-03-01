import React, { useEffect } from 'react';
import List from './list';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import list from '../reducers/list';
import listItems from '../reducers/listItems';
import ListItemCard from './list/listItemCard';
import AddItemToListButton from './addItemToList';
import RootSaga from '../sagas/listItems';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ list, listItems });
const store = createStore(reducers,
  composeWithDevTools(applyMiddleware(
    sagaMiddleware
    ))
    );
sagaMiddleware.run(RootSaga)
// Temp component for testing standalone
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <List />
        <AddItemToListButton />
      </div>
      </Provider>
    )
};

export default App;

module.export = {
  List,
  ListItemCard,
}
