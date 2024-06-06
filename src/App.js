import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import UserForm from './UserForm';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import MySchedule from './MySchedule';
import Footer from './Footer';
import { logout } from './userSlice';

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    padding-bottom: 60px; // Space for footer
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
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Router>
            <Nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {isAuthenticated ? (
                    <>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/myschedule">My Schedule</NavLink>
                        <NavLink as="a" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        Logout
                    </NavLink>
                </>
            ) : (
                <>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </>
            )}
        </Nav>
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
                <Route path="/myschedule" element={<ProtectedRoute element={<MySchedule />} />} />
            </Routes>
        </Container>
        <Footer />
        <ToastContainer />
    </Router>
);
}

export default App;
