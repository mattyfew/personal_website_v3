import React, { Component } from 'react'
import requireAuth from '../requireAuth'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class CreatePost extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(e) {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.dispatch(createPost(this.state))
    }

    render() {
        return (
            <div>
                <h1>CreatePost</h1>

                <form onSubmit={ this.handleSubmit }>
                    <input onChange={ this.handleChange }name="title" type="text"/>
                    <input onChange={ this.handleChange }name="slug" type="text"/>
                    <textarea onChange={ this.handleChange }name="content" type="text"/>

                    <button>Create Post</button>
                </form>
            </div>
        )
    }
}

export default connect(null)(requireAuth(CreatePost))
