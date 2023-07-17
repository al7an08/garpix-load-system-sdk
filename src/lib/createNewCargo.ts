import fetch from 'node-fetch';
import { CargoData } from './types';

async function createNewCargo(token: string, input: CargoData) {
    const url: string = 'https://back.glsystem.net/api/v1/cargo/'

    const options = {
        method: 'POST',
        headers: {
            user_session_token: '',
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
        }),
    }

    try {
        const response = await fetch(url, options);
        return response.json()
    } catch (error) {
        return error
    }
}



export default createNewCargo;