import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import UserForm from './UserForm';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import SignUp from './SignUp';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #333;
    padding: 10px 20px;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0 15px;
    &:hover {
        text-decoration: underline;
    }
`;

const ProtectedRoute = ({ element }) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
    return (
        <Router>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/form">User Form</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/login">Login</NavLink>
            </Nav>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/form" element={<ProtectedRoute element={<UserForm />} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Container>
            <ToastContainer />
        </Router>
    );
}

export default App;
