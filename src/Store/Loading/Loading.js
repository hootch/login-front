import { createSlice } from "@reduxjs/toolkit";
// createSlice는 작업 생성자 및 작업 유형을 생성하는 옵션을 제공
// 즉, action과 reducer를 합쳐서 선언을 하게 해 준다는 뜻

export const LoadingSlice = createSlice(
    {
        //slice 명칭
        name : "loading",
        //state 초기 선언
        initialState:{
            isLoading:false,
        },
        //reducer 상태 정의
        reducers:{
            ENABLE_LOADING:(state) =>{
                state.isLoading = true;
            },
            DISABLE_LOADING:(state)=>{
                state.isLoading = false;
            }
        }
    }
);

//export 할 action값을 추출 => dispatch 를 이용하여 실제 사용할 값
export const {
    ENABLE_LOADING,
    DISABLE_LOADING
} = LoadingSlice.actions;

//export 할 reducer 값을 추출
export default LoadingSlice.reducer;