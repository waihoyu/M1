import ajax from './ajax'

const BASE_URL = 'http://127.0.0.1:1688'

/**
 * 请求首页的轮播图
 */
export const getHomeCasual = () => {
    let promise = ajax(BASE_URL + '/api/homecasual')
    return promise
}

/**
 * 请求首页的导航
 */
export const getHomeNav = () => {
    let promise = ajax(BASE_URL + '/api/homenav')
    return promise
}

/**
 * 请求得到热销广告
 */
export const getHotAds = () => {
    let promise = ajax(BASE_URL + '/api/hotads')
    return promise
}

/**
 * 请求商品的数据
 */
export const getHomeShopList = () => {
    let promise = ajax(BASE_URL + '/api/homeshoplist')
    return promise
}

/**
 * 获得推荐商店列表
 */
export const getrRcommendShopList = () => {
    let promise = ajax(BASE_URL + '/api/recommendshoplist')
    return promise
}

/**
 *
 */
export const getRecommendShopList = () => {
    let promise = ajax(BASE_URL + '/api/recommendshoplist')
    return promise
}

/**
 * 获取搜索列表
 */
export const getRearchGoods = () => {
    let promise = ajax(BASE_URL + '/api/searchgoods')
    return promise
}

/**
 * 用户信息部分
 */
export const getUserInfo = () => {
    let promise = ajax(BASE_URL + '/api/userinfo')
    return promise
}

/**
 * 获取短信验证码
 */
export const getPhoneCode = phone =>
    ajax(BASE_URL + '/api/send_code', {
        phone,
    })

/**
 * 手机验证码登录
 */
export const phoneCodeLogin = (phone, code) => {
    return ajax(
        BASE_URL + '/api/login_code',
        {
            phone,
            code,
        },
        'POST',
    )
}

/**
 * 退出系统
 */
export const getLogOut = () => {
    let promise = ajax(BASE_URL + '/api/logout')
    return promise
}
