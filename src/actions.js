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
