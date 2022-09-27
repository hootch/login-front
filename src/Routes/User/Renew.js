import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { DISABLE_LOADING, ENABLE_LOADING } from "../../Store/Loading/Loading";
import { DELETE_TOKEN } from "../../Store/Token/Token";
import { SET_ERROR_MESSAGE } from "../../Store/Message/Message"

import { renew } from "../../API/User/User";
import { removeRefreshToken } from "../../API/Cookie/Cookie";

import {
    UserContainer,
    UserTitle,
    UserBody,
    UserContents,
    UserForm,
    UserLabel,
    UserMarginTop,
    UserInput,
    UserError,
    UserButton,
    UserButtonDiv,
    UserA
} from "../../Asset/Style/User/User";

import {
    CommonDiv
} from "../../Asset/Style/Common"

const Renew = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {register, setValue, setError, formState: {errors}, handleSubmit} = useForm();

    const { accessToken } = useSelector(state => state.token);

    const onValid = async({oldPassword, newPassword1, newPassword2}) => {
        dispatch(ENABLE_LOADING());

        if(!(newPassword1 === newPassword2)){
            setError("newPassword2", {
                type: "manual",
                message: "비밀번호가 일치하지 않습니다."
            });
        } else {
            const response = await renew({
                old_password: oldPassword, 
                new_password1: newPassword1, 
                new_password2: newPassword2
            } , accessToken);

            if(response.status){
                dispatch(DELETE_TOKEN());
                removeRefreshToken();
                dispatch(DISABLE_LOADING());
                return navigate("/user/signin");
            }else{
                dispatch(SET_ERROR_MESSAGE(response.json))
                //window.location.reload();
            }
        }

        setValue("oldPassword", "");
        setValue("newPassword1", "");
        setValue("newPassword2", "");
    }

    return (
        <UserContainer>
            <CommonDiv>
                <UserTitle>
                    Renew Password
                </UserTitle>
            </CommonDiv>

            <UserBody>
                <UserContents>
                    <UserForm onSubmit={handleSubmit(onValid)}>

                        <CommonDiv>
                            <UserLabel htmlFor="password">
                                Old Password
                            </UserLabel>
                            <UserMarginTop>
                                <UserInput
                                    {...register('oldPassword', { 
                                        required: "기존 비밀번호를 입력해 주세요",
                                        minLength: {
                                            value:8,
                                            message:"최소 8글자 이상이어야 합니다."
                                        } 
                                    })}
                                    type="password"
                                />
                                <ErrorMessage
                                    name="oldPassword"
                                    errors={errors}
                                    render={ ({message}) =>
                                        <UserError className="text-rose-500">
                                            {message}
                                        </UserError>
                                    }
                                />
                            </UserMarginTop>
                        </CommonDiv>


                        <CommonDiv>
                            <UserLabel htmlFor="password">
                                New Password
                            </UserLabel>
                            <UserMarginTop>
                                <UserInput
                                    {...register('newPassword1', { 
                                        required: "신규 비밀번호를 입력해 주세요",
                                        minLength: {
                                            value:8,
                                            message:"최소 8글자 이상이어야 합니다."
                                        } 
                                    })}
                                    type="password"
                                />
                                <ErrorMessage
                                    name="newPassword1"
                                    errors={errors}
                                    render={ ({message}) =>
                                        <UserError className="text-rose-500">
                                            {message}
                                        </UserError>
                                    }
                                />
                            </UserMarginTop>
                        </CommonDiv>

                        
                        <CommonDiv>
                            <UserLabel htmlFor="password">
                                New Password Confirm
                            </UserLabel>
                            <UserMarginTop>
                                <UserInput
                                    {...register('newPassword2', { 
                                        required: "신규 비밀번호를 다시 입력해 주세요",
                                        minLength: {
                                            value:8,
                                            message:"최소 8글자 이상이어야 합니다."
                                        } 
                                    })}
                                    type="password"
                                />
                                <ErrorMessage
                                    name="newPassword2"
                                    errors={errors}
                                    render={ ({message}) =>
                                        <UserError className="text-rose-500">
                                            {message}
                                        </UserError>
                                    }
                                />
                            </UserMarginTop>
                        </CommonDiv>

                        <CommonDiv>
                            <UserButton type="submit">
                                Renew
                            </UserButton>
                        </CommonDiv>
                    </UserForm>
                </UserContents>
                <UserButtonDiv>
                <UserA href="/">
                    Home
                </UserA>
            </UserButtonDiv>
            </UserBody>
        </UserContainer>
    )
}

export default Renew;