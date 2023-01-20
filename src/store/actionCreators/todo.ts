import {Dispatch} from "redux";
import {todoAction, todoActionTypes} from "../../types/todo";
import axios from "axios";


export function fetchTodos(currentPage = 1, pageSize:number = 10) {
    return async (dispatch: Dispatch<todoAction>) => {
        try {
            dispatch({type: todoActionTypes.FETCH_TODOS})
            const res = await axios
                // .get(`https://jsonplaceholder.typicode.com/todos?_limit=${pageSize}&_page=${currentPage}`)
                .get(`https://jsonplaceholder.typicode.com/todos`, {
                    params: {_page: currentPage, _limit: pageSize}
                })
            console.log(res)
            dispatch({type: todoActionTypes.FETCH_TODOS_SUCCESS, payload: res.data})
        } catch (e) {
            console.log(e)
            dispatch({type: todoActionTypes.FETCH_TODOS_ERROR, payload: 'fetch todo error'})
        }
    }
}

export function setTodoCurrentPage (page:number):todoAction {
    return {type: todoActionTypes.FETCH_TODO_PAGE, payload: page}
}