import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        isAuthenticated: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.name = '';
            state.email = '';
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
