import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout } from './userSlice';
import { Form, Input, Button, Error } from './styles';

const Profile = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) {
            setError('Name and Email are required.');
            return;
        }
        dispatch(setUser({ name, email }));
    };

    return (
        <div>
            <h1>Profile</h1>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {error && <Error>{error}</Error>}
                <Button type="submit">Update Profile</Button>
            </Form>
            <Button onClick={() => dispatch(logout())}>Logout</Button>
        </div>
    );
};

export default Profile;
