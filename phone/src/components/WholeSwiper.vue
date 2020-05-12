<template>  
    <div >
        <div class="wrapper">
            <slot></slot>
        </div>
    </div>
</template>  

<script>
import BScroll from 'better-scroll';
export default {
   mounted(){
        this.$nextTick(() => {
            if(!this.scroll){
            this.scroll = new BScroll('.wrapper',{
                    click: true,  // 元素可触发点击事件
                    scrollX: false,  // 横向可滑动，默认为false
                    scrollY: true,  // 纵向可滑动，默认为true
                    bounce: false,  // 当滚动超过边缘的时候无回弹动画
                     mouseWheel: {
                            speed: 20,
                            invert: false,
                            easeTime: 300
                        },
                })
            }else{
                this.scroll.refresh(true)
            }
            this.scroll.on('scorllEnd',(pos)=>{
                this.$route.meta.y = pos.y;
            })
            this.scroll.scrollTo(0, this.$route.meta.y, 0);
        })
       
   }
    
  
}
</script>

<style lang="scss" scoped>
   
</style>
