import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import CreatePost from './CreatePost'
import Login from './Login'

import requireAuth from './requireAuth'

class Admin extends Component {
    render() {
        return (
            <div>
                <h1>You are in Admin</h1>

                <HashRouter>
                    <div>
                        <Link to="/login">Login</Link>

                        <Route exact path="/login" component={Login} />
                        <Route exact path="/create" component={requireAuth(CreatePost)} />
                        {/*<Route exact path="/delete" component={DeletePost} />*/}
                        {/*<Route exact path="/blog" component={Blog} />*/}
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default Admin
