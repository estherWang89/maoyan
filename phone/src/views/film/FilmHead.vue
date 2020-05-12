<template>
  <div class="bg-white filmHead">
    <div class = "header">
        <div class="w-100 h-100 d-flex jc-center ai-center">
          <span class="fs-xxxl text-white">猫眼电影</span>
        </div>
        <div class="moreBtn d-flex jc-center ai-center">
          <img width="17" height="16" src="../../assets/images/btnIcon.png">
        </div>
    </div>
    <app-bar v-show="isAppShow" class="b-b"></app-bar>
    <slot></slot>
  </div>
</template>
<script>
import AppBar from '../../components/AppBar'
export default {
  props:['isAppShow'],
  components:{
    AppBar,
  }
}
</script>

