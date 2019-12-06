import {
    HOME_CASUAL,
    HOME_NAV,
    HOME_SHOP_LIST,
    RECOMMEND_SHOP_LIST,
    REARCH_GOODS,
    USER_INFO,
    HOT_ADS
} from './mutation-types';
export default {

    //请求首页数据
    [HOME_CASUAL](state, {
        homecasual
    }) {
        state.homecasual = homecasual;
    },

    //请求首页导航栏数据
    [HOME_NAV](state, {
        homenav
    }) {
        state.homenav = homenav;
    },

    //请求商品列表数据
    [HOME_SHOP_LIST](state, {
        homeshoplist
    }) {
        state.homeshoplist = homeshoplist;
    },

    [RECOMMEND_SHOP_LIST](state, {
        recommendshoplist
    }) {
        state.recommendshoplist = recommendshoplist;
    },

    [REARCH_GOODS](state, {
        rearchgoods
    }) {
        state.rearchgoods = rearchgoods;
    },

    [USER_INFO](state, {
        userinfo
    }) {
        state.userinfo = userinfo;
    },

    [HOT_ADS](state, {
        hotads
    }) {
        state.hotads = hotads;
    }

};