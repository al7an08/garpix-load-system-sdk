import fetch from 'node-fetch';




async function getCargoInfoById(token: string, id: number) {
    const url: string = 'https://back.glsystem.net/api/v1/cargo/' + id + '/'
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
        method: 'GET',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + token
        },

    }

    try {
        const response = await fetch(url, options);
        // return response.json().then(data => data.access_token ? data.access_token : data)
        return response.json()
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



export default getCargoInfoById;