import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import Blog from './Blog'
import MainWrapper from './MainWrapper'

class App extends Component {
    render() {
        return (
            <div id="app-component">

                <BrowserRouter>
                    <React.Fragment>
                        <Nav />

                        <MainWrapper>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/blog" component={Blog} />
                        </MainWrapper>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
