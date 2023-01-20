import {userAction, userActionTypes, userState} from "../../types/user";


const initialState: userState = {
    users: [],
    loading: false,
    error: null,
}


export const userReducer = (state = initialState, action: userAction): userState => {
    switch (action.type) {
        case userActionTypes.FETCH_USERS:
            return {...state, loading: true}
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: [...action.payload]}
        case userActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }

}