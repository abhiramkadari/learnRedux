import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const addUser = createAsyncThunk('api/addUser', async(user:any) => {
    const response = await axios.post('https://reqres.in/api/users',user);
    return response.data;
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    const response = await axios.get('https://reqres.in/api/users');
    return response.data.data;
})

//createAsyncThunk is a redux key which is used to handle asynchronous calls or methods

const userSlice = createSlice({
    name:'user',
    initialState:{
        users:[],
        error:null,
    },
    reducers:{},
    extraReducers:(builder:any)=>{
        //3 use cases
        builder

            .addCase(fetchUsers.pending, (state:any)=>{

            })
            .addCase(fetchUsers.fulfilled, (state:any,action:any)=>{
                state.users = action.payload;

            })
            .addCase(fetchUsers.rejected, (state:any,action:any)=>{

            })




            .addCase(addUser.pending, (state:any)=>{

            })
            .addCase(addUser.fulfilled, (state:any,action:any)=>{
                // state have access to our initial state variables -> initial Values
                // action have data/result which is returned in api addUser  -> result

                state.users.push( action.payload )
                //action.payload will contain response from api,  It is inbuilt

            })
            .addCase(addUser.rejected, (state:any,action:any)=>{

            })
    }
})


export default userSlice.reducer