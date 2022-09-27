import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { removeRefreshToken } from "../../API/Cookie/Cookie"
import { whoami } from "../../API/User/User";

import { DELETE_TOKEN } from "../../Store/Token/Token";
import { DISABLE_LOADING } from "../../Store/Loading/Loading";
import { SET_ERROR_MESSAGE } from "../../Store/Message/Message"
import {
    TemplateProfile,
    TemplateContainer,
    TemplateUserId,
    TemplateLastLogin,
    TempalteButton,
    TempalteWarrningButton
} from "../../Asset/Style/Template/Template";

import{
    CommonDivFlex
} from "../../Asset/Style/Common";

import Token from "../../Components/Token/Token";

function Template(){
    console.log("시행시행시행!");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { accessToken } = useSelector(state => state.token);

    const [ user, setUser ] = useState("");

    useEffect( () => {
        const action = async() => {

            console.log("Template.js/Template()");
            console.log("accessToken = " + accessToken)
            console.log("accessToken = " + accessToken)
            const response = await whoami(accessToken);
            if(response.status){
                setUser(response.json);
            }else{
                dispatch(SET_ERROR_MESSAGE(response.json))
            }
            dispatch(DISABLE_LOADING());
        }
        
        action();
    }, [])

    const profileUserId = (userid) => {
        return String(userid).substring(0,1);
    }

    const onClickSignOut = () => {
        removeRefreshToken();
        dispatch(DELETE_TOKEN());
        navigate("/user/signin");
    }

    const onClickRenewPassword = () => {
        navigate("/user/renew");
    }

    const onClickWithdrawal = () => {
        removeRefreshToken();
        dispatch(DELETE_TOKEN());
        navigate("/user/withdrawal");
    }

    return (
        <>
            <Token />
            <TemplateContainer>
                <TemplateProfile>{profileUserId(user.userid)}</TemplateProfile>
                <TemplateUserId>{user.userid}</TemplateUserId>
                <TemplateLastLogin>{user.last_login}</TemplateLastLogin>
                <CommonDivFlex className="space-x-4">
                    <TempalteButton onClick={onClickSignOut}>Sign Out</TempalteButton>
                    <TempalteButton onClick={onClickRenewPassword}>Renew Password</TempalteButton>
                    <TempalteWarrningButton onClick={onClickWithdrawal}>Withdrawal</TempalteWarrningButton>
                </CommonDivFlex>
            </TemplateContainer>
        </>
    )
}

export default Template;