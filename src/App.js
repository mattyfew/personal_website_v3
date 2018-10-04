import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import Blog from './blog/Blog'
import SinglePost from './blog/SinglePost'
import MainWrapper from './MainWrapper'

class App extends Component {
    render() {
        return (
            <div id="app-component">

                <BrowserRouter>
                    <React.Fragment>
                        <Nav />

                        <MainWrapper>
                            <Route exact path="/" component={ Home } />
                            <Route exact path="/about" component={ About } />
                            <Route exact path="/blog" component={ Blog } />
                            <Route exact path="/blog/:slug" component={ SinglePost } />
                        </MainWrapper>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
