import axios from 'axios'

const initialState = {
    loading: false,
    article: []
}

    const reducer = (state=initialState, action) => {
       
       switch (action.type) {

        case 'PENDING': 
        let newState = {
            ...state,
            stillPending: ''
        }
        return newState

        case 'REQUEST_ARTICLES': 
        let requestState = {
            ...state,
            articleRequest: ''
        }
        return requestState
        default:
            console.log('hit default')
            return state
        } 
    }



export default reducer