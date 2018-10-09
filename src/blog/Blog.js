import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Grid } from 'semantic-ui-react'


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
            return (
                <Grid.Row className="post" key={ item.id }>
                    <Grid.Column width={ 4 }><h3><Link to={`/blog/${item.slug}`}>{ item.title }</Link></h3></Grid.Column>
                    <Grid.Column width={ 12 }><p>Published: { moment(item.created_at).format("MMM DD, YYYY") }</p></Grid.Column>
                </Grid.Row>
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
