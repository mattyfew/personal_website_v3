import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class SinglePost extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.match.params.slug))
    }

    render() {
        const { id, title, content, slug } = this.props.activePost

        if (!id) {
            return (<div>Loading...</div>)
        }

        return (
            <div>
                <h1>{ title }</h1>

                <h2>This is one single post</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activePost: state.blog.activePost
    }
}

export default connect(mapStateToProps)(SinglePost)
