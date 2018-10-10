import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../actions'
import { Link } from 'react-router-dom'
import moment from 'moment'
import Modal from 'react-modal'
import { Button } from 'semantic-ui-react'

Modal.setAppElement('main')

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            modalIsOpen: false
        }
        this.renderPosts = this.renderPosts.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    renderPosts() {
        const { posts, dispatch } = this.props

        return posts.map(item => (
            <div className="post" key={ item.id }>
                <div className="edit-card-options">
                    <Link to={`/post/${item.slug}`}><img src="/icons/edit-icon.svg" alt="edit"/></Link>
                    <img onClick={ () => this.setState({ modalIsOpen: true, postToDelete: item.id }) } src="/icons/x-icon.svg" alt="delete"/>
                </div>

                <h3><Link to={`/post/${item.slug}`}>{ item.title }</Link></h3>
                <p>Published: { moment(item.created_at).format("MMM DD, YYYY") }</p>
                <p>Slug: { item.slug }</p>
                <p>Content: { item.content }</p>
            </div>
        ))
    }

    deletePost() {
        this.props.dispatch(deletePost(this.state.postToDelete))
        this.setState({ modalIsOpen: false, postToDelete: null })
    }

    handleCloseModal () {
        this.setState({ modalIsOpen: false });
    }


    render() {
        if(!this.props.posts.length) {
            return (<div>Loading</div>)
        }

        return (
            <div id="posts-container">
                <Modal
                    style={customStyles}
                    isOpen={this.state.modalIsOpen}
                    contentLabel="Example Modal"
                    onRequestClose={this.handleCloseModal}
                    shouldCloseOnOverlayClick={true}
                >
                    <h3>Are you sure you want to delete this post?</h3>
                    <Button onClick={ () => this.setState({ modalIsOpen: false }) }>CANCEL</Button>
                    <Button onClick={ this.deletePost } negative>DELETE</Button>
                </Modal>


                <h2>Posts</h2>

                { this.renderPosts() }
            </div>
        )
    }
}
const customStyles = {
    content: {
        color: 'red',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}


function mapStateToProps(state) {
    return {
        posts: state.blog.posts
    }
}

export default connect(mapStateToProps)(Posts)
