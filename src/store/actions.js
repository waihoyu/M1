import {
    getHomeCasual,
    getHomeNav,
    getHomeShopList,
    getRecommendShopList,
    getRearchGoods,
    getUserInfo,
    getHotAds,
    getLogOut,
} from '../api'

import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST,
    REARCH_GOODS,
    USER_INFO,
    HOT_ADS,
    RESET_USER_INFO,
} from './mutation-types'

export default {
    async reqHomeCasual({ commit }) {
        const result = await getHomeCasual()
        commit(HOME_CASUAL, {
            homecasual: result.message,
        })
    },
    async reqHomeNav({ commit }) {
        const result = await getHomeNav()
        commit(HOME_NAV, {
            homenav: result.message,
        })
    },
    //得到热销广告
    async reqHotAds({ commit }) {
        const result = await getHotAds()
        commit(HOT_ADS, {
            hotads: result.message,
        })
    },
    //商品列表
    async reqHomeShopList({ commit }) {
        const result = await getHomeShopList()
        commit(HOME_SHOP_LIST, {
            homeshoplist: result.message.goods_list,
        })
    },

    async reqRecommendShopList({ commit }) {
        const result = await getRecommendShopList()
        commit(RECOMMEND_SHOP_LIST, {
            recommendshoplist: result.message.data,
        })
    },
    async reqRearchGoods({ commit }) {
        const result = await getRearchGoods()
        commit(REARCH_GOODS, {
            rearchgoods: result.message.data,
        })
    },
    async reqUserInfo({ commit }) {
        const result = await getUserInfo()
        if (200 === result.success_code) {
            commit(USER_INFO, {
                userinfo: result.data,
            })
        }
    },
    // 6. 同步用户的信息
    syncUserInfo({ commit }, userinfo) {
        commit(USER_INFO, {
            userinfo,
        })
    },
    // 8. 退出登录
    async logOut({ commit }) {
        const result = await getLogOut()
        if (200 === result.success_code) {
            commit(RESET_USER_INFO)
        }
    },
}
