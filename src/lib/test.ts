import getAuthToken from './getAuthToken'
import getCalculation from './getCalculation';
import getRefreshedAuthToken from './getRefreshedAuthToken'
import getCargo from './getCargo';
// getAuthToken('suyanovaltan@gmail.com', 'bqSJt2wpgA').then(data => console.log(data))

let token: string = '';






getAuthToken('suyanovaltan@gmail.com', 'bqSJt2wpgA').then(data => token = data).then(data => console.log(token)).then(data => getCargo(token).then(data => console.log(data)))
// getRefreshedAuthToken('67e279dc1f7a9bdc621bebd5c2fec87fb0ed35d6').then(data => console.log(data))



