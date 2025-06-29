import {createSlice} from "@reduxjs/toolkit";
type AuthState = {
}
const initialState:AuthState = {
}
const authSlice = createSlice({
    initialState,
    reducers:{
        loginAction: (state, action) => {
        },
        logoutAction: (state) => {
        }
    }
});

export const {loginAction, logoutAction} = authSlice.actions;