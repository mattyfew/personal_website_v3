import React, { Component } from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import CreatePost from './CreatePost'
import Login from './Login'
import AdminNav from './AdminNav'
import AdminHome from './AdminHome'
import MainWrapper from '../MainWrapper'

// import requireAuth from '../requireAuth'

class Admin extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>

                        <AdminNav />
                        <h1 id="admin-title">Admin</h1>

                        <MainWrapper>
                            <Route exact path="/" component={AdminHome} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/create" component={CreatePost} />
                        </MainWrapper>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default Admin
