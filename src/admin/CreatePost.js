import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import requireAuth from '../requireAuth'
import { createPost } from '../actions'


class CreatePost extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            slug: '',
            content: ''
        }

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
        const { title, slug, content } = this.state

        return (
            <div>
                <h1>CreatePost</h1>

                <Form onSubmit={ this.handleSubmit }>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' value={title} onChange={this.handleChange} placeholder='Title' name="title" />
                        <Form.Input fluid label='Slug' value={slug} onChange={this.handleChange} placeholder='Slug' name="slug" />
                    </Form.Group>
                    <Form.TextArea label='Content' value={content} onChange={this.handleChange} control='textarea' rows='3' placeholder='Content...' name='content' />

                    {/* maybe put a spinning loader button after click? */}
                    <Form.Button color='green' floated='right'>Create Post</Form.Button>
                </Form>
            </div>
        )
    }
}

export default connect(null)(requireAuth(CreatePost))
