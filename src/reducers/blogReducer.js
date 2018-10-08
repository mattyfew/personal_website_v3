const INITIAL_STATE = {
    activePost: {},
    editPost: {},
    posts: []
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_POSTS':
            state = Object.assign({}, state, {
                posts: action.posts
            })
            break
        case 'FETCH_POST':
            state = Object.assign({}, state, {
                activePost: action.activePost
            })
            break
        case 'CREATE_POST':
            // TODO: add post to list of posts
            state = Object.assign({}, state)
            break
        case 'EDIT_POST':
            state = Object.assign({}, state)
            break
        case 'DELETE_POST':
            // TODO: remove post from list of posts
            state = Object.assign({}, state)
            break
    }
    return state
}
