import fetch from 'node-fetch';
import { CargoData } from './types';



async function updateCargoById(token: string, id: number, input: CargoData) {
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
        method: 'PUT',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + token
        },
        body: JSON.stringify({
            "title": input.title,
            "length": input.length,
            "width": input.width,
            "height": input.width,
            "mass": input.mass,
            "stacking": input.stacking,
            "stacking_limit": input.stacking_limit,
            "turnover": input.turnover,
            "article": input.article,
            "margin_length": input.margin_length,
            "margin_width": input.margin_width,
            "color": input.color,
            "demo": input.demo,
            "last_changed_user": input.last_changed_user
        })
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



export default updateCargoById;