import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  MenuItem,
  Menu
} from 'semantic-ui-react'

class AdminNav extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render () {
        return (
            <div>
                <Menu>
                  <MenuItem><Link to="/"><img className="nav-logo" src="/img/logo-mf.svg" alt=""/></Link></MenuItem>
                  <MenuItem><Link to="/admin">Admin</Link></MenuItem>
                  <MenuItem><Link to="/login">Login</Link></MenuItem>
                  <MenuItem><Link to="/create">Create Post</Link></MenuItem>
                </Menu>
            </div>
        )
    }
}

export default AdminNav
