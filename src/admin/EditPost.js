import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import requireAuth from '../requireAuth'
import { fetchPost, editPost } from '../actions'

class EditPost extends Component {
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

    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.match.params.slug))
    }


    handleChange(e) {
        this.setState({
            [ e.target.name ]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.dispatch(editPost(this.state))
    }

    render() {
        const { title, slug, content } = this.props.activePost

        return (
            <div>
                <h1>EditPost</h1>

                <Form onSubmit={ this.handleSubmit }>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' defaultValue={title} onChange={this.handleChange} placeholder='Title' name="title" />
                        <Form.Input fluid label='Slug' defaultValue={slug} onChange={this.handleChange} placeholder='Slug' name="slug" />
                    </Form.Group>
                    <Form.TextArea label='Content' defaultValue={content} onChange={this.handleChange} control='textarea' rows='3' placeholder='Content...' name='content' />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activePost: state.blog.activePost
    }
}

export default connect(mapStateToProps)(requireAuth(EditPost))
