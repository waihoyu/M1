import ajax from './ajax';

const BASE_URL = 'http://127.0.0.1:1688';

export const getHomeCasual = ()=>{
    let promise = ajax(BASE_URL + '/api/homecasual');
    return  promise;
};

export const getHomeNav = ()=>{
    let promise = ajax(BASE_URL + '/api/homenav');
    return  promise;
};
