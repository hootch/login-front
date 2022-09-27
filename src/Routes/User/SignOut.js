import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { signout } from "../../API/User/User";
import { getRefreshToken, removeRefreshToken } from "../../API/Cookie/Cookie";

import { DELETE_TOKEN } from "../../Store/Token/Token";

const SignOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { accessToken } = useSelector(state => state.token);
    const refreshToken = getRefreshToken();

    useEffect(() => {
        const action = async() => {
            const data = await signout({refresh_token: refreshToken}, accessToken);
            
            if(data.status){
                dispatch(DELETE_TOKEN());
                removeRefreshToken();
                return navigate("/user/signin");
            }else{
                window.location.reload();
            }
        }

        action();
    }, [])
    
    return (
        <Link to="/user/signin" />
    );
}

export default SignOut;