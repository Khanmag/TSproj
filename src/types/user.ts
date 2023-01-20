
export interface userState {
    users: any[],
    loading: boolean,
    error: null | string,
}

export enum userActionTypes {
    FETCH_USERS = 'userReducer/FETCH_USERS',
    FETCH_USERS_SUCCESS = 'userReducer/FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'userReducer/FETCH_USERS_ERROR',
}

interface fetchUserAction {
    type: userActionTypes.FETCH_USERS,
}

interface fetchUserSuccessAction {
    type: userActionTypes.FETCH_USERS_SUCCESS,
    payload: any[],
}

interface fetchUserErrorAction {
    type: userActionTypes.FETCH_USERS_ERROR,
    payload: string,
}
export type userAction = fetchUserAction | fetchUserSuccessAction | fetchUserErrorAction