import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'

class App extends Component {
    render() {
        return (
            <div id="app-component">
                <Nav />
                <h1>This is App</h1>

                <BrowserRouter>
                    <div id="browserrouter-component">
                        <Link to="/about">Learn More</Link>

                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
