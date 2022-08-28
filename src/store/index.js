import watchers from '@/other/watchers'
import { createStore } from 'vuex'

export default createStore({
  state: {
    watchers:[],
    basket:[]
  },
  getters: {
    getWatchers(state){
      return state.watchers
    },
    getBasket(state){
      return state.basket
    }
  },
  mutations: {
    SET_WATCHERS(state,payload){
      state.watchers = payload
    },
    ADDING_TO_BASKET(state,payload){
      let isCreated = false
      if(state.basket.length){
        state.basket.forEach(element => {
          isCreated = true
          if(element.id == payload.id){
            element.count++
            isCreated = false
          }
        })
      if(isCreated){
        state.basket.push({...payload, count:1})
      }
      }
      else {
        state.basket.push({...payload, count:1})
      }
    },
    REMOVING_PRODUCT(state,payload){
      for(let item of payload){
        let index = state.basket.indexOf(item)
        if(item.count>1){
          item.count--
        }
        else{
          state.basket.splice(index,1) 
        }
        
      }
    },
  },
  actions: {
    loadWatchers({commit}, payload){
      commit('SET_WATCHERS',watchers)
    },
    addToBasket ({commit}, payload){
      commit('ADDING_TO_BASKET', payload)
    },
    removalАromСart({commit}, payload){
      commit('REMOVING_PRODUCT', payload)
    }
   }
  }
)
