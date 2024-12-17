import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/components/counterSlice';
import userReducer from '../src/components/user/userSlice';
//configure the store globally and call this is with provider in the main.tsx


export const store = configureStore({
    //every slice u import has to be in reducer
    reducer:{
        counterGlobalStoreVal: counterReducer,
        usersStore: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;