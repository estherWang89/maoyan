<template>
  <div>
      <app-bar></app-bar>
      <div :style="`backgroundColor:${filmData.backgroundColor}`" class="pt-4  text-white">
          <div class="text-grey-4  mb-4  px-5">
              <span>猫眼电影</span><span>>{{filmData.nm}}</span>
          </div>
          <div class="mb-4  px-5 d-flex">
              <div class="d-flex ai-center">
                 <img :src="filmData.postImg" alt="" style="width:100px;height:138px;">
              </div>
              <div class="ml-3 fs-xs flex-1 d-flex flex-column transparent" style="height:138px;">
                 <div class="fs-slg fwb text-white">{{filmData.nm}}</div>  
                 <div class="mt-1">{{filmData.enm}}</div>  
                 <div class="mt-1">{{filmData.cat}}</div> 
                 <div class="mt-1">{{filmData.star?filmData.star.split(',').join(' / '):filmData.star}}</div> 
                 <div class="mt-1">{{filmData.onlineDate}}/{{filmData.dur}}分钟</div> 
                 <div class="mt-2 d-flex jc-between ai-center">
                     <div class = "button" @click="buyTicket(filmData.id)">想看</div>
                     <div class = "button">看过</div>
                 </div>
              </div>
          </div>
          <div class="mb-4  px-5  praise p-3">
                <div class="d-flex  fs-xs text-white">
                        <img style= "width:16px;height:16px;" src="../assets/images/logo.png" alt="">
                        <span class="text flex-1 ml-1">实时口碑</span>
                        <span class="transparent">{{filmData.wish}}想看</span>
                        <span v-if="filmData.sc !== 0" class="ml-2 transparent">{{filmData.watched}}人看过</span>
                </div>
                <div v-if="filmData.sc !== 0" class="py-5 d-flex ai-center jc-center  mb-2 bb-trans">
                    <div style="width:64px;height:64px;">
                        <div class="fs-lgst text-yellow-1">{{filmData.sc}}</div>
                        <div class="transparent fs-xs">{{filmData.snum}}人评</div>
                    </div>
                    <div>
                        <div v-for="(distr,index) in filmData.distribution" :key="index" class="d-flex jc-end ai-center">
                            <div v-for="count in (5-index)" :key="count" class="d-flex"><img style="width:10px;height:10px;" src="../assets/images/star.png" alt=""></div>
                            <div class="ml-1 processbar">
                                <div :style="`width:${distr.percent*100}%`" class="bg-yellow-1 h-100"></div>
                            </div>
                            <span style="width:40px" class="ml-1 transparent fs-xs text-left">{{(distr.percent*100).toFixed(1)}}%</span>
                        </div>
                    </div>
                    
                </div>
          </div>
          <div class="mb-4  px-5">
            <div class="d-flex jc-between ai-center" style="height:20px">
                <div class="fs-lg">简介</div> 
                <div @click="isFold = !isFold" class="fs-xs transparent">
                    <span style="height:20px;">{{isFold?'展开':'收起'}}</span>
                    <i style="height:20px;" class="iconfont text-grey" :class="isFold?'icon-zhankai2':'icon-shouqi'"></i>
                </div> 
            </div>
            <div style="line-height: 26px;" :class="isFold?'text-up':''" class="my-2 fs-lg">{{filmData.dra}}</div>
          </div>
          <div class="mb-4 px-5">
            <div class="fs-lg mb-2">演职人员</div>
            <my-swiper :dataList="filmData.celebrities" :perWidth="89">
                 <div v-for="(person,index) in filmData.celebrities" :key="index" style="width:82px;" class="mr-2">
                    <img :src="person.avatar.replace('w.h','82.115')" alt="" style="width:82px;height:115px;">
                    <div class="w-100 text-center text-ellipsis">{{person.cnm}}</div>
                    <div class="w-100 transparent fs-xs text-center text-ellipsis">{{person.desc}}</div>
                </div>
            </my-swiper>
          </div>
          <div v-if="filmData.photos.length" class="mb-4 px-5">
            <div class="fs-lg mb-2">剧照</div>
            <my-swiper :dataList="filmData.photos" :perWidth="150">
                 <div v-for="(photo,index) in filmData.photos" :key="index"  style="width:150px;" >
                     <div>
                          <img :src="photo.replace('w.h','140.93')" alt="" style="width:140px;height:93px;">
                     </div>
                   
                </div>
            </my-swiper>
          </div>
          <div class="mb-4 bg-white commontCon text-black">
              <div class="px-5 fs-lg  py-2" :class="hotComments.length?'':'b-b'">讨论</div>
              <div class= "px-5 py-3 b-b d-flex" v-for="comment in hotComments" :key="comment._id"> 
                  <img style="width:34px;height:34px;border-radius:17px;" :src="comment.avatarUrl" alt="">
                  <div class="ml-2 d-flex flex-column  w-100">
                      <div>
                          <span class="mr-1 text-dark-1">{{comment.nick}}</span>
                          <span class="px-1 fs-xs ellipticalBg">Lv{{comment.userLevel}}</span>
                      </div>
                      <span class="fs-xs text-grey py-1">给这部电影打了{{comment.score}}分</span>
                      <span style= "line-height:25px;" class="text-up text-dark-1 fs-xl py-1">{{comment.content}}</span>
                      <div class="text-grey d-flex fs-xs jc-between ai-center">
                           <span>{{getFormDate(comment.time)}}</span>
                           <div class="d-flex jc-end ai-center">
                               <div class="px-2">
                               <i class="fs-xs iconfont icon-dianzan"></i><span>{{comment.upCount}}</span>
                           </div>
                           <div class="fs-xs ellipticalBg px-2 py-1 text-center"><i class="iconfont icon-huifu1"></i><span>{{comment.replyCount}}</span></div>
                           </div>
                           
                      </div>
                  </div>
              </div>
              <div class="py-3 text-center fs-xxl text-tabBtn">打开APP,{{filmData.hotComments.length+4}}人正在讨论 ></div>
         </div>
      </div>

        
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
import MySwiper from '../components/MySwiper'
export default {
    data(){
        return {
            filmData:{
               hotComments:[], 
               photos:[],
            },
            isFold:true,
            hotComments:[],
        }
    },

    created(){
        this.getDetail(this.$route.params.id);
    },

    mounted(){
        
    },

    methods:{
        buyTicket(filmId){
            this.$router.push(`/buyTicket/${filmId}`);
        },

        getFormDate(time){
            let date = new Date(time);
            return date.getFullYear()+"-"+this.numTo2Str(date.getMonth()+1)+"-"+this.numTo2Str(date.getDate());
        },

        numTo2Str(num){
            return  num < 10 ? '0'+num : num;
        },

        async getDetail(id){
            const res = await this.$http.post('/api/filmDetail',{id});
            this.filmData = res.data;
            this.hotComments = this.filmData.hotComments.filter((item,index)=>index < 3);
        }
    },

    components:{
        AppBar,
        MySwiper,
    }

}
</script>

<style lang="scss" scoped>
    .button{
        width:110px;
        height:30px;
        font-size:14px;
        border-radius: 5px;
        color:white;
        background-color:rgba(255,255,255,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .praise{
        background-color: rgba(0,0,0,0.3);
        border-radius: 5px;
    }

    .transparent{
        color:rgba(255,255,255,0.5);
    }

    .processbar{
        background-color:rgba(255,255,255,0.2);
        width:100px;
        height:5px;
    }

    .bb-trans{
        border-bottom:1px solid rgba(255,255,255,0.2);
    }

    .text-up{
        height:78px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
    }
    .commontCon{
        border-radius:10px 10px 0 0;
    }
    
    .ellipticalBg{
        border-radius: 50%;
        border:1px solid rgb(0,0,0,0.2);
    }

</style>