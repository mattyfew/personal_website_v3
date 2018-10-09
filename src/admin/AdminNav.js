import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { adminLogout } from '../actions'
import MainWrapper from '../MainWrapper'
import { MenuItem, Menu } from 'semantic-ui-react'

class AdminNav extends Component {
    constructor() {
        super()
        this.state = {}
    }

    renderButton() {
        if (this.props.authenticated) {
            return (
                <span id="logout-button" onClick={() => this.props.dispatch(adminLogout())}>Logout</span>
            )
        } else {
            return (
                <Link to="/login">Login</Link>
            )
        }
    }

    render() {
        return (
            <Menu id="nav">
                <MenuItem><Link to="/"><img className="nav-logo" src="/img/logo-mf.svg" alt=""/></Link></MenuItem>
                <MenuItem><Link to="/posts">Posts</Link></MenuItem>
                <MenuItem><Link to="/create">Create Post</Link></MenuItem>
                <MenuItem>{this.renderButton()}</MenuItem>
            </Menu>
        )
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(AdminNav)
