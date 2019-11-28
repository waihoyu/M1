
import { HOME_CASUAL, HOME_NAV, HOME_SHOP_LIST} from './mutation-types';
export default {
    //请求首页数据
    [HOME_CASUAL](state, { homecasual }) {
        state.homecasual = homecasual;
    },
    //请求首页导航栏数据
    [HOME_NAV](state, { homenav }) {
        state.homenav = homenav;
    },
    //请求商品列表数据
    [HOME_SHOP_LIST](state, { homeshoplist }) {
        state.homeshoplist = homeshoplist;
    }
};
