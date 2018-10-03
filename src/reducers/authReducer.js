export default function (state = false, action) {
    switch (action.type) {
        case 'LOGIN_ADMIN':
            state = Object.assign({}, state, {
                authenticated: action.success
            })
            break
        case 'LOGOUT_ADMIN':
            state = Object.assign({}, state, {
                authenticated: false
            })
            break
        default:
            return state;
    }
    return state;

}
