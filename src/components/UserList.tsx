import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/actionCreators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    console.log(users, loading, error)
    return (
        <div>
            {
                users.map( user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </div>
    );
};

export default UserList;