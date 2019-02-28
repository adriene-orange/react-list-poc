// This is all throw away

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import list from '../src/reducers/list';
import listItems from '../src/reducers/listItems';
import RootSaga from '../src/sagas/listItems';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({ list, listItems }), composeWithDevTools(
    applyMiddleware(
        sagaMiddleware
    )
));

sagaMiddleware.run(RootSaga)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
