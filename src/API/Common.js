import { getRefreshToken } from "./Cookie/Cookie";

export const BASE_URL = "http://localhost:8080";

//응답 대기 만료 시간
export const TIME_OUT = 30 * 60 * 1000;
//토큰 redirect
export const TOKEN_REDIRECT_TIME = 60 * 1000;
//토큰 만료시간
export const TOKEN_TIME_OUT = 60 * 60 * 1000;

const error = {
    status: false,
    json: {
        error: ["연결이 원활하지 않습니다."]
    }
}

const request = (url, option) => {
    return fetch(`${BASE_URL}/${url}`, option);
}

const timeout = () => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), TIME_OUT));
}

const promise = async (url, option) => {
    return await Promise.race([
        request(url, option),
        timeout()
    ]);
}

const responseData = async (data) => {
    const status = data.ok;
    const code = data.status;
    const text = await data.text();
    const json = text.length ? JSON.parse(text) : "";

    return {
        status,
        code,
        json
    }
}

const responseStatus = async (url, option) => {
    const data = await promise(url, option).catch(
        () => {
            return error;
        }
    );
    return data;
}

const credential = async (url, option) => {
    console.log("common.js/credential()");
    console.log("common.js/credential()");
    const refreshToken = getRefreshToken(); //쿠키에서 refreshToken을 가져오는 부분임...
    const token = await refresh(refreshToken);
    const accessToken = await token.json();

    option.headers.Authorization = `Bearer ${accessToken.accessToken}`;
    option.headers.Refresh = `Refresh ${accessToken.refreshToken}`;

    const data = await responseStatus(url, option);
    return responseData(data);
}

export const refresh = async (refreshToken) => {//리프레쉬 토큰 받는 부분인가봄! 사실 지금 이부분은 인증하면서 리프레쉬를 같이 받기에 나눠줘야하긴함 시발...
    console.log("common.js/refresh()");
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            refresh_token: refreshToken
        })
    }

    return await response("api/authenticate",option);
    // return await response("users/token/refresh/", option);
}

export const response = async (url, option) => {
    const data = await responseStatus(url, option);

    switch (data.status) {
        case false:
        case 500:
            return error;
        case 401:
            return credential(url, option)
        default:
            return responseData(data);
    }
}