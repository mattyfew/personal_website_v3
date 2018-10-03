import React, { Component } from 'react'
import requireAuth from '../requireAuth'

class CreatePost extends Component {
    render() {
        return (
            <div>
                CreatePost
            </div>
        )
    }
}

export default requireAuth(CreatePost)
