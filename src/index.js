import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Admin from './admin/Admin'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import reducers from './reducers';
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxPromise)));
let elem

if (location.pathname == "/admin") {
    elem = <Admin />
} else {
    elem = <App />
}

ReactDOM.render(<Provider store={store}>{elem}</Provider>, document.querySelector('main'))
