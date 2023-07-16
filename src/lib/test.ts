import getAuthToken from './getAuthToken'
import getCalculation from './getCalculation';
import getRefreshedAuthToken from './getRefreshedAuthToken'
import getCargo from './getCargo';
import createNewCargo from './createNewCargo';
import { CargoData } from './types';
import getCargoInfoById from './getCargoInfoById';
import updateCargoById from './updateCargoById';
import deleteCargoById from './deleteCargoById';
// getAuthToken('suyanovaltan@gmail.com', 'bqSJt2wpgA').then(data => console.log(data))

let token: string = '';






// getAuthToken('suyanovaltan@gmail.com', 'bqSJt2wpgA').then(data => token = data).then(data => console.log(token)).then(data => getCargo(token).then(data => console.log(data)))
// getRefreshedAuthToken('67e279dc1f7a9bdc621bebd5c2fec87fb0ed35d6').then(data => console.log(data))

const input: CargoData = {
    "title": "test",
    "length": 10,
    "width": 10,
    "height": 19,
    "mass": 100,
    "stacking": true,
    "stacking_limit": 32767,
    "turnover": true,
    "article": "string",
    "margin_length": 32767,
    "margin_width": 32767,
    "color": "#Ba0fbf",
    "demo": true
}

const updatedInput: CargoData = {
    "title": "test11",
    "length": 11,
    "width": 11,
    "height": 1000,
    "mass": 100,
    "stacking": false,
    "stacking_limit": 32767,
    "turnover": false,
    "article": "supertest",
    "margin_length": 32767,
    "margin_width": 32767,
    "color": "#Ba0fbf",
    "demo": false
}

createNewCargo('d5cc1555c7bca64bc59641b2fe342e71f3bf8a21', input).then(data => console.log(data));
// getCargoInfoById('d5cc1555c7bca64bc59641b2fe342e71f3bf8a21', 15180).then(data => console.log(data))
// updateCargoById('d5cc1555c7bca64bc59641b2fe342e71f3bf8a21', 15180, input).then(data => console.log(data))

deleteCargoById('d5cc1555c7bca64bc59641b2fe342e71f3bf8a21', 15181).then(data => console.log(data));