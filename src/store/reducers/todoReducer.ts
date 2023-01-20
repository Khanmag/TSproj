import {todoAction, todoActionTypes, todoState} from "../../types/todo";


const initialState:todoState = {
    todos: [],
    loading: false,
    error: null,
    currentPage: 1,
    pageSize: 10,
}

export const todoReducer = (state = initialState, action: todoAction): todoState => {
    switch (action.type) {
        case todoActionTypes.FETCH_TODOS:
            return {...state, loading: true, error: null}
        case todoActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, error: null, todos: [...action.payload]}
        case todoActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case todoActionTypes.FETCH_TODO_PAGE:
            return {...state, pageSize: action.payload}
        default:
            return state
    }
}