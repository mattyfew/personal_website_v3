const INITIAL_STATE = {
    authenticated: false
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'LOGIN_ADMIN':
            state = Object.assign({}, state, {
                authenticated: action.success
            })
    }

    return state
}
