import fetch from 'node-fetch';




async function deleteCargoById(token: string, id: number) {
    const url: string = 'https://back.glsystem.net/api/v1/cargo/' + id + '/'


    const options = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + token
        }

    }

    try {
        const response = await fetch(url, options);

        return response.ok ? "Successfully deleted cargo with an id of " + id : response.json()
    } catch (error) {
        return error
    }
}



export default deleteCargoById;