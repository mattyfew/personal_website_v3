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


export function createPost(info) {
    return axios.post('/create-post', info)
        .then(resp => {
            return {
                type: 'CREATE_POST',
                info
            }
        })
}
