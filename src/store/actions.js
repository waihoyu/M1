import {getHomeCasual, getHomeNav, getHomeShopList, getRecommendShopList} from '../api';
import {HOME_CASUAL, HOME_NAV, HOME_SHOP_LIST, RECOMMEND_SHOP_LIST} from './mutation-types';

export default {
    async reqHomeCasual({commit}){
        const result = await getHomeCasual();
        commit(HOME_CASUAL, {homecasual: result.message});
    },
    async reqHomeNav({commit}){
        const result = await getHomeNav();
        commit(HOME_NAV, {homenav: result.message});
    },
    //商品列表
    async reqHomeShopList({commit}){
        const result = await getHomeShopList();
        commit(HOME_SHOP_LIST, {homeshoplist: result.message.goods_list});
    },
    async reqRecommendShopList({commit})
    {
        const result = await getRecommendShopList();
        commit(RECOMMEND_SHOP_LIST, {recommendshoplist: result.message.data});
    }
};