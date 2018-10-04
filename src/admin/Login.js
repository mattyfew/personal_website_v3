import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { adminLogin } from '../actions'

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

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Email' value={email} onChange={this.handleChange} placeholder='Email' />
                        <Form.Input fluid label='Password' value={password} onChange={this.handleChange} placeholder='Password' />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>

            </div>
        )
    }
}

export default connect(null)(Login)
