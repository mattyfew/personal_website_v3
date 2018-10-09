import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'
import moment from 'moment'

class Blog extends Component {
    constructor() {
        super()

        this.renderPosts = this.renderPosts.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    renderPosts() {
        return this.props.posts.map(item => {
            console.log(moment(item.created_at).format("MM-DD-YYYY"));
            return (
                <div className="post" key={ item.id }>
                    <h3><Link to={`/blog/${item.slug}`}>{ item.title }</Link></h3>
                    {/*<p>Date: { moment(item.created_at, moment.ISO_8601) }</p>*/}
                    <p>Slug: { item.slug }</p>
                    <p>Content: { item.content }</p>
                </div>
            )
        })
    }

    render() {
        if (!this.props.posts) {
            return (<div>Loading...</div>)
        }

        return (
            <div>
                <h1>Blog Archive</h1>

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
