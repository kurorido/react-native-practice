import * as types from './types'
import axios from 'axios'

export function increment (value=1) {
    return {
        type: types.INCREMENT,
        payload: {
            value: value
        }
    }
}

export function decrement (value=1) {
    return {
        type: types.DECREMENT,
        payload: {
            value: value
        }
    }
}

export function incrementServer () {
    return (dispatch, getstate) => {
        axios.get('http://localhost:8000')
             .then((response) => {
                const { value } = response.data
                console.log(`GET Server Response: ${value}`)
                dispatch(increment(value))
             })
             .catch((error) => {

             })
    }
}