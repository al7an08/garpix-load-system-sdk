import fetch from 'node-fetch';




async function getCargoInfoById(token: string, id: number) {
    const url: string = 'https://back.glsystem.net/api/v1/cargo/' + id + '/'


    const options = {
        method: 'GET',
        headers: {
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



export default getCargoInfoById;