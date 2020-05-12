<template>
  <div>
    <nav-bar></nav-bar>
    <router-view class="content"/>
  </div>
</template>
<script>
import NavBar from './components/NavBar'
export default {
  components:{
    NavBar
  }
}
</script>
<style lang="scss" scoped>
  .content{
    padding-bottom: 50px;
  }
</style>
