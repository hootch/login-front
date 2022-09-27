import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { SET_ERROR_MESSAGE } from "../../Store/Message/Message";
import { DISABLE_LOADING, ENABLE_LOADING } from "../../Store/Loading/Loading";

import { signup } from "../../API/User/User"

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
    CommonDiv,
} from "../../Asset/Style/Common";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {register, setValue, setError, formState: {errors}, handleSubmit} = useForm();

    const onValid = async( {userid, password1, password2} ) => {
        dispatch(ENABLE_LOADING());

        if(!(password1 === password2)){
            setError("password2", {
                type: "manual",
                message: "비밀번호가 일치하지 않습니다."
            });
        } else {
            const data = await signup({userid, password1, password2});

            if(data.status){
                dispatch(DISABLE_LOADING());
                return navigate("/user/signin");
            }else{
                dispatch(SET_ERROR_MESSAGE(data.json));
            }
            setValue("password1", "");
            setValue("password2", "");
        }

        dispatch(DISABLE_LOADING());
    }

    return (
        <UserContainer>
            <CommonDiv>
                <UserTitle>
                    Sign Up
                </UserTitle>
            </CommonDiv>

            <UserBody>
                <UserContents>
                    <UserForm onSubmit={handleSubmit(onValid)}>
                        <CommonDiv>
                            <UserLabel htmlFor="id">
                                Username
                            </UserLabel>
                            <UserMarginTop>
                                <UserInput 
                                    { ...register("userid", { required: "아이디를 입력해 주세요." })}
                                    type="text"
                                />
                                <ErrorMessage
                                    name="userid"
                                    errors={errors}
                                    render={
                                        ({message}) =>
                                        <UserError className="text-rose-500">
                                            {message}
                                        </UserError>
                                    }
                                />
                            </UserMarginTop>
                        </CommonDiv>

                        <CommonDiv>
                            <UserLabel htmlFor="password">
                                Password
                            </UserLabel>
                            <UserMarginTop>
                                <UserInput
                                    {...register('password1', { 
                                        required: "비밀번호를 입력해 주세요",
                                        minLength: {
                                            value:8,
                                            message:"최소 8글자 이상이어야 합니다."
                                        } 
                                    })}
                                    type="password"
                                />
                                <ErrorMessage
                                    name="password1"
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
                                Confirm Password
                            </UserLabel>
                            <UserMarginTop>
                                <UserInput
                                    {...register('password2', { 
                                        required: "비밀번호를 입력해 주세요",
                                        minLength: {
                                            value:8,
                                            message:"최소 8글자 이상이어야 합니다."
                                        } 
                                    })}
                                    type="password"
                                />
                                <ErrorMessage
                                    name="password2"
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
                                Sign Up
                            </UserButton>
                        </CommonDiv>
                    </UserForm>
                </UserContents>
                <UserButtonDiv>
                <UserA href="./signin">
                    Sign In
                </UserA>
            </UserButtonDiv>
            </UserBody>
        </UserContainer>
    )
}

export default SignUp;