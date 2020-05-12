<template>
  <div>
      <div class="mb-2 bg-white px-4">
        <div class="py-3">热门影人</div>
        <my-swiper :perWidth="92" :dataList="hotCelebrityListGetter">
            <div  class="mr-2" v-for="data in hotCelebrityListGetter" :key = "data.id">
                <img style="width:85px;height:115px;"  :src="data.avatar"/> 
                <div class = "pb-3 fwb">{{data.cnm}}</div>
            </div>
        </my-swiper> 
      </div>
      <div class="bg-white pl-4">
        <div class="py-3">娱乐热点</div>
        <ul>
            <li class="text-ellipsis w-95 py-2" v-for="(news,index) in newsListGetter" :key = "news.id">
                  <span class="text-dark-1">{{index+1}}.{{news.title}}</span>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MySwiper from '../../components/MySwiper';
export default {
  data() {
    return {
     
    };
  },

  computed: {
    ...mapGetters(['hotCelebrityListGetter','newsListGetter']),
  },

  mounted() {
    if (this.$store.state.hotCelebrityList.length === 0) {
      this.$http.get('/api/hotcelebrity').then((res) => {
        this.$store.dispatch('getHotCelebrityListAction', res.data);
      });
    }
    if (this.$store.state.hotCelebrityList.length === 0) {
      this.$http.get('/api/newslist').then((res) => {
        this.$store.dispatch('getNewsListAction', res.data);
      });
    }
  },

  beforeDestory(){
    window.onscroll = null;
  },

  components:{
    MySwiper,
  }
};
</script>

