import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './userSlice';
import { Button } from './styles';

const Profile = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <Button onClick={() => dispatch(logout())}>Logout</Button>
        </div>
    );
};

export default Profile;
