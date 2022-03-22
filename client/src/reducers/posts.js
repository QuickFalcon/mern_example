const posts = (state = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return action.payload
        case 'FETCH_ALL':
            return state
        default:
            return state;
    }
}

export default posts
