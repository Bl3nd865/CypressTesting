import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './userSlice';
import { Form, Input, Button, Error } from './styles';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication
        if (email === 'user@example.com' && password === 'password') {
            dispatch(setUser({ name: 'John Doe', email }));
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <Error>{error}</Error>}
                <Button type="submit">Login</Button>
            </Form>
        </div>
    );
};

export default Login;
