import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { adminLogin } from './actions'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.dispatch(adminLogin(this.state))
    }

    render() {
        const { email, password } = this.state

        return (
            <div>
                <h1>Please login to proceed</h1>

                <form onSubmit={this.handleSubmit}>
                    <input value={email} onChange={this.handleChange} name="email" placeholder="email" type="text"/>
                    <input value={password} onChange={this.handleChange} name="password" placeholder="password" type="text"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null)(Login)
