import fetch from 'node-fetch';
import { CargoData, InputData } from './types';

async function createNewCalculation(token: string, input_data: InputData, project_id: number, status: string, callback_url: string, external_api: boolean) {
    const url: string = 'https://back.glsystem.net/api/v1/calculation/'

    const options = {
        method: 'POST',
        headers: {
            user_session_token: '',
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer' + ' ' + token
        },
        body: JSON.stringify({
            "project": project_id,
            "input_data": input_data,
            "status": status,
            "callback_url": callback_url,
            "external_api": external_api
        }),
    }

    try {
        const response = await fetch(url, options);
        return response.json()
    } catch (error) {
        return error
    }
}



export default createNewCalculation;