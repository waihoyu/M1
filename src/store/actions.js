import {getHomeCasual, getHomeNav} from '../api';
import {HOME_CASUAL, HOME_NAV} from './mutation-types';
export default {
    async reqHomeCasual({commit}){
        const result = await getHomeCasual();
        commit(HOME_CASUAL,{homecasual: result.message});
    },
    async reqHomeNav({commit}){
        const result = await getHomeNav();
        commit(HOME_NAV,{homenav: result.message});
    }
};