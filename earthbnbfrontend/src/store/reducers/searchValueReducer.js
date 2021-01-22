export const LOAD_SEARCH = 'LOAD_SEARCH'

export default function reducer(state = null, action) {
    switch (action.type) {
        case LOAD_SEARCH: {
            return action.searchValue
        }

        default:
            return state
    }
}