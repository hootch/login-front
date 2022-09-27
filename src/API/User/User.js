import { response } from "../Common";

export const signin = async (credentials) => {
    console.log("User.js/signin()");
    console.log(credentials.userid, credentials.password)
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(credentials)
    };
    return await response("api/authenticate/", option);
}

export const signup = async (credentials) => {
    const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        // body: JSON.stringify(credentials)
        data: JSON.stringify(credentials),
        responseType: "json"

    };

    return await response("users/register/", option);
}


export const signout = async (credentials, accessToken) => {
    const option = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };

    return await response("users/logout/", option);
}

export const whoami = async (accessToken) => {
    console.log("User.js/whoami() accessToken = "+ accessToken);
    const option = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=UTF-8'
        }
    };
    return await response("api/user", option);//users/에서 api/user로 바꾼거임
}


export const renew = async (credentials, accessToken) => {
    const option = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(credentials)
    };
    console.log("User.js/whoami()");
    return await response("users/", option);
}
