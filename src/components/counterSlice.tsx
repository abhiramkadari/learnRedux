import { createSlice } from "@reduxjs/toolkit";
//first create slice for declaring a vars or anything 


const counterSlice:any = createSlice({
    name: 'counter',
    initialState: { count: 0, abhiram:0 },
    reducers: {
        increment:(state:any)=>{
            state.count = state.count + 1;
            state.abhiram = state.abhiram + 5;
        },
        decrement:(state:any)=>{
            state.count = state.count - 1;
            state.abhiram = state.abhiram - 5;
        },
        reset:(state:any)=>{
            state.count = 0;
            state.abhiram = 0;
        }
    }
    //give name, in inintialstate u can create many variables and states, reduceres are methods
})



//export methods in counteslice.actions
export const { increment, decrement, reset } = counterSlice.actions;

//export the total slice info with the counterslice.reducer
export default counterSlice.reducer;



//These are the slices , create store.tsx file and import all this type of slices and maintain there 