import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import Admin from './admin/Admin'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import reducers from './reducers'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const INITIAL_STATE = {
    auth: {
        authenticated: localStorage.getItem('loggedIn')
    }
}
const store = createStore(reducers, INITIAL_STATE, composeWithDevTools(applyMiddleware(reduxPromise)))

const elem = location.pathname == "/admin"
                ? <Admin />
                : <App />

ReactDOM.render(<Provider store={store}>{elem}</Provider>, document.querySelector('main'))
