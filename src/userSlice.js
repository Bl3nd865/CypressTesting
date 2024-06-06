import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: localStorage.getItem('name') || '',
    email: localStorage.getItem('email') || '',
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isAuthenticated = true;
            localStorage.setItem('name', action.payload.name);
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('isAuthenticated', 'true');
        },
        logout: (state) => {
            state.name = '';
            state.email = '';
            state.isAuthenticated = false;
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('isAuthenticated');
        },
    },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
