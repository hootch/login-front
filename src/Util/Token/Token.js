import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRefreshToken, removeRefreshToken } from "../../API/Cookie/Cookie";
import { refresh } from "../../API/Common";

import { DELETE_TOKEN, SET_TOKEN } from "../../Store/Token/Token";

import { isValueUndefined } from "../Valid/Valid"

export const Token = (key) => {
    
    const [isAuth, setIsAuth] = useState("Loaded");
    const { authenticated, expireTime } = useSelector(state => state.token); //이거 되나??????  될거같긴한데 시발 리액트를 잘 모르니...
    const refreshToken = getRefreshToken();

    const dispatch = useDispatch();

    useEffect( () => {
        const valid = async () => {
            if(isValueUndefined(refreshToken)){
                dispatch(DELETE_TOKEN());
                setIsAuth("Failed");
            }else{
                if(authenticated && new Date().getTime() < expireTime){
                    setIsAuth("Success")
                } else{
                    const data = await refresh(refreshToken);
                    if(data.status){
                        const token = data.json.access_token;
                        dispatch(SET_TOKEN(token));
                        setIsAuth("Success");
                    }else{
                        dispatch(DELETE_TOKEN());
                        removeRefreshToken();
                        setIsAuth("Failed");
                    }
                }
            }
        }

        valid();
    }, [refreshToken, dispatch, key]);

    return {
        isAuth
    };
}