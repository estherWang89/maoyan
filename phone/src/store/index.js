import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAppShow:true,
    hotCelebrityList: [],
    newsList: [],
    hotWishesList:[],
    comingList:[],
    filmIdList:[],
    classicList:[],
  },
  getters: {
    hotCelebrityListGetter(state) {
      return state.hotCelebrityList;
    },
    newsListGetter(state) {
      return state.newsList;
    },
    hotWishesListGetter(state) {
      return state.hotWishesList;
    },
    commingListGetter(state){
      return state.comingList;
    },
    isAppShowGetter(state){
      return state.isAppShow;
    },
    filmIdListGetter(state){
      return state.filmIdList;
    },
    classicListGetter(state){
      return state.classicList;
    }
  },
  mutations: {
    hotCelebrityListMutation(state, data) {
      state.hotCelebrityList = data;
    },
    newsListMutation(state, data) {
      state.newsList = data;
    },
    hotWishesListMutation(state, data) {
      state.hotWishesList = data;
    },
    commingListMutation(state,data){
      state.comingList.push(...data);
    },
    filmIdListMutation(state,data){
      state.filmIdList = data;
    },
    classicListMutation(state,data){
      state.classicList = data;
    },
    isAppShowMutation(state,data){
      state.isAppShow = data;
    }
  },
  actions: {
    getHotCelebrityListAction(store, data) {
      store.commit('hotCelebrityListMutation', data);
    },
    getNewsListAction(store, data) {
      store.commit('newsListMutation', data);
    },
    getHotWishesListAction(store, data) {
      store.commit('hotWishesListMutation', data);
    },
    getCommingListAction(store, data) {
      store.commit('commingListMutation', data);
    },
    getFilmIdListAction(store,data){
      store.commit('filmIdListMutation', data);
    },
    setIsAppShowAction(store, data){
      store.commit('isAppShowMutation', data);
    },
    getClassicListAction(store,data){
      store.commit('classicListMutation', data);
    }
  },
  modules: {
  },
});
