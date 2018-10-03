export default function (state = {}, action) {
    switch(action.type) {

        case 'CREATE_POST':
            // TODO: something here
            state = Object.assign({}, state)

        case 'FETCH_POSTS':
            state = Object.assign({}, state, {
                posts: action.posts
            })
        case 'FETCH_POST':
            state = Object.assign({}, state, {
                activePost: action.activePost
            })

    }
    return state
}
