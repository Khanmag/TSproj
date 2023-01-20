import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {todos, loading, error, currentPage, pageSize} = useTypedSelector(state => state.todo)
    const {fetchTodos} = useActions()

    useEffect(() => {
        fetchTodos(currentPage, pageSize)
    }, [currentPage, pageSize])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    console.log(todos, loading, error)
    return (
        <div>
            {
                todos.map( todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }

        </div>
    );
};

export default TodoList;