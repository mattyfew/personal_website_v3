import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Grid } from 'semantic-ui-react'
import { TimelineLite } from 'gsap'

class Blog extends Component {
    constructor(props) {
        super(props)
        this.renderPosts = this.renderPosts.bind(this)
        this.myTween = new TimelineLite({paused: true})
        this.myElements = []
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    renderPosts() {
        const self = this
        return self.props.posts.map((item, i) => {
            return (
                <div></div>
                <Grid.Row className="post" key={ item.id } ref={card => self.myElements[i] = card} >
                    <Grid.Column width={ 4 }><h3><Link to={`/blog/${item.slug}`}>{ item.title }</Link></h3></Grid.Column>
                    <Grid.Column width={ 12 }><p>Published: { moment(item.created_at).format("MMM DD, YYYY") }</p></Grid.Column>
                </Grid.Row>
            )
        })
        // this.myTween.staggerTo(this.myElements, 0.5, {y: 0, autoAlpha: 1}, 0.1);
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
