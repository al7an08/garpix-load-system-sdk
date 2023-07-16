import getAuthToken from './getAuthToken'
import getRefreshedAuthToken from './getRefreshedAuthToken'

// getAuthToken('suyanovaltan@gmail.com', 'bqSJt2wpgA').then(data => console.log(data))

let token: string = '';






getAuthToken('suyanovaltan@gmail.com', 'bqSJt2wpgA').then(data => token = data.refresh_token).then(data => console.log(token)).then(data => getRefreshedAuthToken(token).then(data => console.log(data)))
// getRefreshedAuthToken('67e279dc1f7a9bdc621bebd5c2fec87fb0ed35d6').then(data => console.log(data))



