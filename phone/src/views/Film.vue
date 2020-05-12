<template>
  <div class="bg-bgc-1">
    <film-head  :isAppShow="isAppShow" class="filmHead">
          <div  ref = "tabBar" class="tabBar text-center d-flex text-grey-1 fs-lg p-4 b-b jc-center ai-center">
            <div @click="switchRoute(-1)">
                <span>{{nowCityName}}</span>
                <i class="iconfont icon-ico_arrowdown  text-grey"></i>
            </div>
            <div class="d-flex jc-center ai-center flex-1">
                <router-link :to="tab.router" class="tab text-grey-3 px-3  d-flex flex-column  ai-center"
                    v-for="(tab,index) in tabList" :key="index" activeClass="activeCls">
                    <span>{{tab.name}}</span>
                    <div class="underline"></div>
                </router-link>
            </div>
            <div @click="switchRoute(-2)"><i class="iconfont icon-sousuo1 text-button fs-mlg"></i></div>
        </div>
    </film-head>
    <router-view class="filmContent"></router-view>
  </div>
</template>
<script>
import FilmHead from './film/FilmHead'
export default {
  data() {
    return {
      isAppShow:true,
      tabList: [
        {name:'热映',router:'/film/f-hot'},
        // {name:'影院',router:'/cinema'},
        {name:'待映',router:'/film/commingsoon'},
        {name:'经典电影',router:'/film/classic'}
      ],
      // selectIdx: 0,
      nowCityName: '建德',
      tabBarHeight:44,
    };
  },


  mounted() {
    this.showLocalCity();
    // window.onscroll = ()=>{
    //   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //    this.isAppShow = scrollTop <= this.$refs.tabBar.clientHeight;
       
    // }
  },
 
  // beforeDestory(){
  //   window.onscroll = null;
  // },

  methods: {
    showLocalCity() {
      const historyData = localStorage.getItem('my_history_citylist');
      if (!historyData) {
        this.nowCityName = '建德';
      } else {
        this.nowCityName = JSON.parse(historyData)[0].nm;
      }
    },
    switchRoute(idx) {
      switch (idx) {
        case -1:
          this.$router.push('/citylist');
          break;
        case -2:
          this.$router.push('/search');
          break;
      }
    },
  },
  components:{
    FilmHead,
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/variables";
.tabBar{
  height: 44px;
  .tab{
    font-weight:bold;
    .underline{
      width:1.4286rem;
      height:5px;
      border-bottom:3px solid map-get($colors,'button');
      display: none;
    }
    &.activeCls{
      span{
        font-size:map-get($font-sizes,"xxl")*$base-font-size;
        color: map-get($colors,"dark-1");
        display: inline;
      }
      .underline{
        display:block;
      }
    }
  }
}
.filmContent{
  padding-top:168px;
}
</style>


