import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import CreatePost from './CreatePost'
import Login from './Login'

class Admin extends Component {
    render() {
        return (
            <div>
                <h1>You are in Admin</h1>

                <BrowserRouter>
                    <div>
                        <Link to="/login">Login</Link>

                        <Route exact path="/login" component={Login} />
                        <Route exact path="/create" component={CreatePost} />
                        {/*<Route exact path="/delete" component={DeletePost} />*/}
                        {/*<Route exact path="/blog" component={Blog} />*/}
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Admin
