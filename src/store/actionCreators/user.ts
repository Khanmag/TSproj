import {userAction, userActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";


export function fetchUsers():any {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: userActionTypes.FETCH_USERS})

            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout( () => {
                dispatch({type: userActionTypes.FETCH_USERS_SUCCESS, payload: res.data})
            }, 1000)

        } catch (e) {
            console.log(e)
            dispatch({type: userActionTypes.FETCH_USERS_ERROR, payload: 'error whet fetch users'})
        }
    }
 }