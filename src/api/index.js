

import ajax from './ajax';
const BASE_URL = 'http://127.0.0.1:1688';


//请求首页的轮播图
export const getHomeCasual = ()=>{
    let promise = ajax(BASE_URL + '/api/homecasual');
    return  promise;
};

//请求首页的导航
export const getHomeNav = ()=>{
    let promise = ajax(BASE_URL + '/api/homenav');
    return  promise;
};

//请求商品的数据
export const getHomeShopList = ()=>{
    let promise = ajax(BASE_URL + '/api/homeshoplist');
    return  promise;
};

export const getrRcommendShopList = ()=>{
    let promise = ajax(BASE_URL + '/api/recommendshoplist');
    return  promise;
};

export const getRecommendShopList = ()=>{
    let promise = ajax(BASE_URL + '/api/recommendshoplist');
    return  promise;
};
