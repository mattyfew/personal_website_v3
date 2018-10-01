import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'

class App extends Component {
    render() {
        return (
            <div id="app-component">

                <BrowserRouter>
                    <React.Fragment>
                        <Nav />

                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                    </React.Fragment>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
