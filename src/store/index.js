import {createSlice,configureStore} from "@reduxjs/toolkit"

const userslice = createSlice({
    name:"user",
    initialState:{isLoggedin:false},
    reducers:{
        login(state){
            state.isLoggedin=true;
        }, logout(state){
            localStorage.removeItem("userId")
            state.isLoggedin=false;
        },
    }
})

const adminslice = createSlice({
    name:"auth",
    initialState:{isLoggedin:false},
    reducers:{
        login(state){
            state.isLoggedin=true;
        }, logout(state){
            localStorage.removeItem("adminId");
            localStorage.removeItem("token");
            state.isLoggedin=false;
        },
    }
})

export const userAction = userslice.actions
export const adminAction = adminslice.actions


export const store = configureStore({
    reducer:{
        user:userslice.reducer,
        admin:adminslice.reducer
    }
})