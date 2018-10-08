import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
// const { Input, Group, TextArea, Button } = Form
import { connect } from 'react-redux'
import requireAuth from '../requireAuth'
import { fetchPost, editPost } from '../actions'
import { reduxForm, Field } from 'redux-form'
import { InputField, TextAreaField } from 'react-semantic-redux-form';


class EditPost extends Component {
    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.match.params.slug))
    }

    onSubmit(formProps) {
        console.log(formProps);
        this.props.dispatch(editPost(formProps))
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <div>
                <h1>EditPost</h1>

                <Form onSubmit={ handleSubmit(this.onSubmit) }>
                    <Form.Group widths='equal'>
                        <Field fluid label='Title' component={ InputField } placeholder='Title' name='title' type='text'/>
                        <Field fluid label='Slug' component={ InputField } placeholder='Slug' name='slug' type='text'/>
                    </Form.Group>
                    <Field label='Content' component={ TextAreaField } control='textarea' rows='3' placeholder='Content...' name='content' />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

EditPost = reduxForm({
    form: 'editPostForm'
})(EditPost)

function mapStateToProps(state) {
    return {
        initialValues: state.blog.activePost,
        enableReinitialize: true
    }
}

export default connect(mapStateToProps)(EditPost)
