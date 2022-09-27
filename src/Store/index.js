import { configureStore } from "@reduxjs/toolkit";

import LoadingReducer from "./Loading/Loading";
import TokenReducer from "./Token/Token";
import MessageReducer from "./Message/Message";

export default configureStore({
    reducer: {
        loading:LoadingReducer,
        token:TokenReducer,
        message:MessageReducer
    }
});