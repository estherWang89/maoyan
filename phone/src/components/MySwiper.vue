<template>  
    <div class="tab-wrapper" ref="wrapper">
        <div ref="content" class="d-flex w-100">
            <slot></slot>
        </div>
    </div>
</template>  

<script>
import BScroll from 'better-scroll';
export default {
    props:{
        dataList:Array,
        perWidth:Number,
        },
        
    mounted(){
        if(this.dataList && this.dataList.length){
             this.initScroll();
        }
       
    },

    watch: {
        dataList:function(newVal, oldVal){
            this.initScroll();
        }
    },

    methods:{
        initScroll(){
             this.$nextTick(()=>{
                const wid = this.dataList.length * this.perWidth ;
                this.$refs.content.style.width = `${wid}px`;
                if(!this.scoll){
                    this.scroll = new BScroll(this.$refs.wrapper,{
                    click: true,  // 元素可触发点击事件
                    scrollX: true,  // 横向可滑动，默认为false
                    scrollY: false,  // 纵向可滑动，默认为true
                    bounce: false,  // 当滚动超过边缘的时候无回弹动画
                    })
                }else{
                    this.scroll.refresh(true)
                }
            })
        }
    }
   

  
}
</script>

<style lang="scss" scoped>
    .tab-wrapper{
        overflow:hidden;
    }
</style>
