import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import { BounceLoader } from 'react-spinners'
import Remarkable from 'remarkable'
const md = new Remarkable()

class SinglePost extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.match.params.slug))
    }

    render() {
        const { id, title, content } = this.props.activePost
        const input = '# This is a header\n\nAnd this is a paragraph'


        if (!id) {
            return (
                <div className="spinner-wrapper">
                    <BounceLoader
                        color="#88105B"
                        />
                </div>
            )
        }

        return (
            <article id="single-post">
                <header>
                    <h1 id="single-post-title">{ title }</h1>
                </header>

                <div id="post-body" dangerouslySetInnerHTML={{ __html: md.render(content) }} />
            </article>
        )
    }
}


function mapStateToProps(state) {
    return {
        activePost: state.blog.activePost
    }
}

export default connect(mapStateToProps)(SinglePost)
