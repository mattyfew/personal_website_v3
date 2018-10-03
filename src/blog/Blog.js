import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class Blog extends Component {
    constructor() {
        super()

        this.renderPosts = this.renderPosts.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    renderPosts() {
        return this.props.posts.map(item => (
            <div className="post">
                <h3>{ item.title }</h3>
                <p>{ item.slug }</p>
                <p>{ item.content }</p>
            </div>
        ))
    }

    render() {
        if (!this.props.posts) {
            return (<div>Loading...</div>)
        }

        return (
            <div>
                <h1>Blog</h1>

                <h2>A list of recent articles will be here</h2>

                <div id="posts-container">
                    { this.renderPosts() }
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps)(Blog)
