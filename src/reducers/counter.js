import * as types from '../actions/types'

const counter = (state = 0, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return state + action.payload.value
        case types.DECREMENT:
            return state - action.payload.value
        default:
            return state
    }
}

export default counter