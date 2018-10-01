import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Admin from './Admin'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import reducer from './reducer'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));
let elem

if (location.pathname == "/admin") {
    elem = <Admin />
} else {
    elem = <App />
}

ReactDOM.render(<Provider store={store}>{elem}</Provider>, document.querySelector('main'))
