import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',// 'checking', 'authenticated', 'unauthenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        error: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';// 'checking', 'authenticated', 'unauthenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.error = null;
        },
        logout: (state, { payload }) => {
            state.status = 'unauthenticated';// 'checking', 'authenticated', 'unauthenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.error = payload?.errorMessage;
        },
        checking: (state) => {
            state.status = 'checking';
        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checking } = authSlice.actions;