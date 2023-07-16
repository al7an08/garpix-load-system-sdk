import fetch from 'node-fetch';

type AuthToken = {
    access_token: string,
    refresh_token: string,
    token_type: string,
    access_token_expires: number,
    refresh_token_expires: number

}



async function getAuthToken(username: string, password: string) {
    const url: string = 'https://back.glsystem.net/api/v1/auth/login/'
    // const response = await fetch('https://back.glsystem.net/api/v1/docs/#/auth/auth_login_create', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json;charset=UTF-8',
    //     },
    //     body: JSON.stringify({
    //         username: username,
    //         password: password
    //     }),
    // });

    const options = {
        method: 'POST',
        headers: {
            user_session_token: '',
            'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        }),
    }

    try {
        const response = await fetch(url, options);
        return response.json().then(data => data.access_token ? data.access_token : data)
    } catch (error) {
        return error
    }

    // if (response.ok) {
    //     console.log('success')
    //     return data.refresh_token
    // }
    // else {
    //     console.log(errors)
    //     return "error"
    // }
}



export default getAuthToken;