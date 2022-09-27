import { createSlice } from "@reduxjs/toolkit";

import { TOKEN_TIME_OUT } from "../../API/Common";

//토큰 slice
export const TokenSlice = createSlice(
    {
        name:"token",
        initialState:{
            authenticated:false, //인증상태
            accessToken:null, //access token
            expireTime:null // 만료 시간
        },
        reducers:{
            SET_TOKEN:(state,action) => {
                state.authenticated = true; 
                state.accessToken = action.payload;
                state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
            },
            DELETE_TOKEN:(state) => {
                state.authenticated = false;
                state.accessToken = null;
                state.expireTime = null;
            }
        }
    }
)

export const {
    SET_TOKEN,
    DELETE_TOKEN
} = TokenSlice.actions;

export default TokenSlice.reducer;