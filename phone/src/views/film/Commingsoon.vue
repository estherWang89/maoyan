<template>
    <div>
      <div class="mb-2 bg-white pl-4 pr-3">
          <div class="py-3">近期最受期待</div>
          <my-swiper  :perWidth ="100" :dataList = "hotWishesListGetter">
              <div  class="mr-2" style="text-align:center" v-for="item in hotWishesListGetter" :key = "item._id" @click="getDetail(item.id)">
                <div style="position:relative; width:85px;height:115px;" class="mr-2">
                    <img :src="item.img.replace('w.h','170.230')" onerror="this.style.visibility='hidden'" style="width:85px;height:115px;float:left">
                    <span class="text-yellow-1" style="font-weight:bold;position:absolute;left:0;bottom:2px">{{item.wish}}人想看</span>
                </div>
                <span style="width:85px;" class="text-sm text-ellipsis fwb text-dark mr-2">{{item.nm}}</span>
                <span class="text-grey mr-2">{{item.comingTitle.split(' ')[0]}}</span>
              </div>
          </my-swiper>
      </div>
      <div class="bg-white pl-4">
          <div v-for="(film,idx) in showFilmList" :key="film._id" class="pb-2" @click="getDetail(film.id)">
            <div v-if="(idx == 0)||(idx != 0 && showFilmList[idx-1].comingTitle != film.comingTitle)" class="text-dark-1 py-2">{{film.comingTitle}}</div>
            <div class="d-flex">
              <div class="mr-2"> 
                <img :src="film.img.replace('w.h','128.180')"  style="width:64px;height:90px"> 
              </div>
              <div class="flex-1 d-flex b-b ai-center pr-3">
                <div class="text-grey-1 flex-1 d-flex flex-column"> 
                  <span class="fs-xxl fwb text-dark-1">{{film.nm}}</span>
                  <div><span class="text-yellow-1 fwb">{{film.wish}}</span>人想看</div>
                  <div>主演:{{film.star}}</div>
                  <div>{{film.rt}}上映</div>
                </div>
                <div class="mr-3 wisihBtn d-flex jc-center ai-center" @click="buyTicket(film.id)">想看</div>
              </div>
            </div>
          </div>
      </div>
    </div>
 
</template>

<script>
import {mapGetters} from 'vuex'
import MySwiper from '../../components/MySwiper'
import WholeSwiper from '../../components/WholeSwiper'
export default {
  data(){
    return{
        timeId:0,
        showFilmList:[],
    }
  },

  mounted(){
    if(this.hotWishesListGetter.length === 0){
      this.$http.get('/api/hotWisheslist').then((res)=>{
          this.$store.dispatch('getHotWishesListAction',res.data);
      })
    }  
    if(this.filmIdListGetter.length === 0){
       this.$http.get('/api/filmids').then(res=>{
         this.$store.dispatch('getFilmIdListAction',res.data);
         if(this.commingListGetter.length === 0){
            this.getComingList();
         }else{
            this.showFilmList = this.sliceComingList();
         }
         
       })
    }else{
        if(this.commingListGetter.length > 0){
          this.showFilmList = this.sliceComingList();
       }
    }
   
    window.addEventListener('scroll',this.handlerScroll);
  

    
  },

  beforeDestroy(){
   clearTimeout(this.timeId);
   this.timerId = null;
   window.removeEventListener('scroll',this.handlerScroll);
   this.showFilmList = [];
  },

  watch:{
    showFilmList:function(newVal,oldVal){
        this.$nextTick(()=>{
           clearTimeout(this.timeId);
           this.timerId = null;
        })
    }
  },

  methods:{
    buyTicket(filmId){
      this.$router.push(`/buyTicket/${filmId}`);
    },

    handlerScroll(){
       let scrollTop = document.documentElement.scrollTop||document.body.scrollTop ;
       let clientHeight = document.documentElement.clientHeight || document.body.clientHeight ;
       let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight ;
       if(scrollTop+clientHeight === scrollHeight){
          if(!this.timerId){
            this.timerId = setTimeout(() => {
              if(this.showFilmList.length < this.commingListGetter.length){
                  this.showFilmList = this.sliceComingList();
                  return;
              }
              this.getComingList();    
            }, 300)
        }  
      }	
    },

    async getComingList(){
       const list = this.filmIdListGetter.slice(this.commingListGetter.length,this.commingListGetter.length+10);
       const filmIdList = list.map(film=>{
          return film.id;
       })
       if(filmIdList.length !== 0){
          const res = await this.$http.post('/api/cominglist',{filmIdList});
          this.$store.dispatch('getCommingListAction',res.data);
          this.showFilmList = this.showFilmList.concat(res.data);
          clearTimeout(this.timerId);
          this.timerId = 0;
       }
    },

    sliceComingList(){
      let len = this.showFilmList.length;
      return  this.showFilmList.concat(this.commingListGetter.slice(len,len+10));
    },

    getDetail(id){
      this.$router.push(`/details/${id}`);
    }
  },

  computed: {
    ...mapGetters(['hotWishesListGetter','commingListGetter','filmIdListGetter',]),
  },

  components:{
    MySwiper,
    WholeSwiper,
  },

};
</script>

<style lang="scss" scoped>
.wisihBtn{
  width: 47px;
  height: 27px;
  color:white;
  background-color: #faaf00;
  font-weight: bold;
}
</style>

