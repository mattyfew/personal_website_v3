import axios from 'axios'

export function adminLogin(creds) {
    return axios.post('/admin-login', creds)
        .then(resp => {
            return {
                type: 'LOGIN_ADMIN',
                success: resp.data.success
            }
        })
}

export function adminLogout() {
    return axios.post('/admin-logout')
        .then(resp => {
            return {
                type: 'LOGOUT_ADMIN',
                success: resp.data.success
            }
        })
}

// ====================== BLOG =======================

export function fetchPosts(){
    return axios.get('/fetch-posts')
        .then(resp => {
            return {
                type: 'FETCH_POSTS',
                posts: resp.data.posts
            }
        })
}

export function fetchPost(slug){
    return axios.get(`/fetch-post/${slug}`)
        .then(resp => {
            return {
                type: 'FETCH_POST',
                activePost: resp.data.activePost
            }
        })
}

export function createPost(info) {
    return axios.post('/create-post', info)
        .then(resp => {
            return {
                type: 'CREATE_POST',
                info: resp.data.info
            }
        })
}

export function editPost(info) {
    return axios.post('/edit-post', info)
        .then(resp => {
            return {
                type: 'EDIT_POST',
                info: resp.data.info
            }
        })
}

export function deletePost(postId) {
    return axios.delete('/delete-post', { params: { postId } })
        .then(resp => {
            return {
                type: 'DELETE_POST',
                postId
            }
        })
}
