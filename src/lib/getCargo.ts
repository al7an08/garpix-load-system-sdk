import fetch from 'node-fetch';




async function getCargo(token: string) {
    const url: string = 'https://back.glsystem.net/api/v1/cargo/'


    const options = {
        method: 'GET',
        headers: {
            user_session_token: '',
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + token
        },

    }

    try {
        const response = await fetch(url, options);

        return response.json()
    } catch (error) {
        return error
    }


}



export default getCargo;