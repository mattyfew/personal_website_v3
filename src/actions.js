import axios from 'axios'

export function login(creds) {
    return axios.post('/admin-login', creds)
        .then(resp => {
            return {
                type: 'LOGIN_ADMIN',
                success: resp.data.success
            }
        })
}
