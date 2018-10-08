import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'

class Posts extends Component {
    constructor() {
        super()

        this.renderPosts = this.renderPosts.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    renderPosts() {
        return this.props.posts.map(item => (
            <div className="post" key={ item.id }>
                <div className="edit-card-options">
                    <Link to={`/post/${item.slug}`}><img src="/icons/edit-icon.svg" alt="edit"/></Link>
                    <img src="/icons/x-icon.svg" alt="delete"/>
                </div>

                <h3><Link to={`/posts/${item.slug}`}>{ item.title }</Link></h3>
                <p>Slug: { item.slug }</p>
                <p>Content: { item.content }</p>
            </div>
        ))
    }

    render() {
        if(!this.props.posts.length) {
            return (<div>Loading</div>)
        }

        return (
            <div id="posts-container">
                <h2>Posts</h2>

                { this.renderPosts() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps)(Posts)
