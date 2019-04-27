import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        imagesCarousel: [
            {
                src: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                src: 'https://images.pexels.com/photos/1345082/pexels-photo-1345082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                src: 'https://images.pexels.com/photos/1534517/pexels-photo-1534517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            {
                src: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
        ],
        products: []
    },
    actions: {
        async getCollections({commit}) {
           const response =  await fetch('https://api.mercadolibre.com/sites/MPE/search?category=MPE1051')
           const {results} = await response.json()
           commit('setData', results)
        }
    },
    mutations: {
        setData(state, payload) {
            state.products = payload
        }
    }
});