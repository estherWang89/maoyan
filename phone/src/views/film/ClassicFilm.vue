<template>
  <div class ="bg-white">
      <div v-for="film in classicListGetter" :key="film.id" @click=getDetail(film.id)>
          <div class="d-flex mx-4">
              <div class="mr-2"> 
                <img :src="film.img.replace('w.h','120.180')" style="width:66px;height:94px"> 
              </div>
              <div class="text-grey-1 flex-1 d-flex flex-column"> 
                  <div class="fs-xxl fwb text-dark-1 mb-1">{{film.nm}}</div>
                  <div class="mb-1">{{film.enm}}</div>
                  <div class="mb-1">{{film.cat}}</div>
                  <div class="mb-1">{{film.onlineDate}}</div>
              </div>
              <div style = "width:60px" class="d-flex jc-center ai-start fs-xs text-grey">
                <div :class="{'text-yellow-1':film.sc>0,'fwb':film.sc>0,'fs-lg':film.sc>0}">{{film.sc === 0 ? film.scoreLabel:film.sc}}</div>
                <div class="">{{film.sc === 0 ? '':'分'}}</div>
              </div>
            </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
   ...mapGetters(['classicListGetter'])
  },
  mounted(){
    if(this.classicListGetter.length === 0){
      this.getClassicList();
    }
  },
  methods: {
    async getClassicList(){
      const res = await this.$http.post('/api/classicfilms');
      this.$store.dispatch('getClassicListAction',res.data);
    },

     getDetail(id){
      this.$router.push(`/details/${id}`);
    }
  },
};
</script>

<style>

</style>
