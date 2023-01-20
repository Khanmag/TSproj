import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./Layout";



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UserList/>} />
                <Route path={'todos'} element={<TodoList />} />
            </Route>
        </Routes>
    );
};

export default App;