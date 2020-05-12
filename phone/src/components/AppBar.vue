<template>
  <div  class="appBar d-flex ai-center px-4 py-2">
        <img style="width:42px;height:42px" src="../assets/images/logo.png">
        <div class="flex-1 d-flex flex-column p-2">
            <span class="fs-xxl text-dark">猫眼</span>
            <span class="fs-xs text-grey">在线选座，热门影讯，爱上看电影</span>
        </div>
        <div class="btn fs-sm" @click.prevent="">立即打开</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .appBar{
        width:100%;
        height:64px;
    }
</style>