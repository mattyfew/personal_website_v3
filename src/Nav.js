import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  MenuItem,
  Menu
} from 'semantic-ui-react'

class Nav extends Component {
    constructor() {
        super()

        this.state = {}
    }

    render () {
        return (
            <div>
                <Menu>
                  <MenuItem><Link to="/"><img className="nav-logo" src="/img/logo-mf.svg" alt=""/></Link></MenuItem>
                  <MenuItem><Link to="/about">About</Link></MenuItem>
                  <MenuItem><Link to="/blog">Blog</Link></MenuItem>
                </Menu>
            </div>
        )
    }
}

export default Nav
