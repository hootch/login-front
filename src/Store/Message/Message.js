import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name:"message",
    initialState:{
        state:null,
        message:[]
    },
    reducers:{
        SET_INFO_MESSAGE:(state, action) => {
            state.state = "info";
            state.message = [action.payload];
        },
        SET_ERROR_MESSAGE:(state, action) => {
            state.state = "error";
            if(Array.isArray(action.payload)){
                state.message = action.payload;
            }else{
                const errorKeys = Object.keys(action.payload);
                errorKeys.forEach( (key) => state.message.push(action.payload[key]) );
            }
        },
        REMOVE_MESSAGE:(state) =>{
            state.state = null;
            state.message = [];
        }
    }
});

export const {
    SET_INFO_MESSAGE,
    SET_ERROR_MESSAGE,
    REMOVE_MESSAGE
} = messageSlice.actions;

export default messageSlice.reducer;