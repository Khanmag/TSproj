export interface todoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    currentPage: number,
    pageSize: number,
}

export enum todoActionTypes {
    FETCH_TODOS = 'todoReducer/FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'todoReducer/FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'todoReducer/FETCH_TODOS_ERROR',
    FETCH_TODO_PAGE = 'todoReducer/FETCH_TODO_PAGE',
}

interface fetchTodoActionType {
    type: todoActionTypes.FETCH_TODOS,
}

interface fetchTodoSuccessActionType {
    type: todoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[],
}

interface fetchTodoErrorActionType {
    type: todoActionTypes.FETCH_TODOS_ERROR,
    payload: string,
}

interface fetchTodoPageActionType {
    type: todoActionTypes.FETCH_TODO_PAGE,
    payload: number,
}

export type todoAction =
    fetchTodoActionType
    | fetchTodoSuccessActionType
    | fetchTodoErrorActionType
    | fetchTodoPageActionType