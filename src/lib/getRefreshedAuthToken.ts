import fetch from 'node-fetch';




async function getRefreshedAuthToken(refresh_token: string) {
    const url: string = 'https://back.glsystem.net/api/v1/auth/refresh/' //request URL


    const options = {
        method: 'POST',
        headers: {
            user_session_token: '',
            'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            "refresh_token": refresh_token
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



export default getRefreshedAuthToken;