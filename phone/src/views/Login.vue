<template>
  <div>
  
     <div class = "header">
        <div class="w-100 h-100 d-flex jc-center ai-center">
          <span class="fs-xxxl text-white">猫眼电影</span>
        </div>
        <div class="moreBtn d-flex jc-center ai-center">
          <img width="17" height="16" src="../assets/images/btnIcon.png">
        </div>
     </div>
     <div class="px-3">
        <input class="w-100 fs-xl" type="text" v-model="loginForm.username" placeholder="用户名"/>
     </div>
     <div class="px-2">
        <input class="w-100 fs-xl" type="text" v-model="loginForm.password" placeholder="密码"/>
        </div>
    <div class="d-flex jc-center ai-center mt-3">
      <div @click="loginOrReg(curIdx)" class="btn">{{loginStrArr[curIdx%2]}}</div>
    </div>
    <div class="px-4 d-flex jc-between">
      <div class="text-yellow-1 fs-xs" @click="curIdx++">立即{{loginStrArr[(curIdx+1)%2]}}</div>
      <div class="text-header fs-xs">忘记密码</div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
     return {
      loginForm: {
        username: '',
        password: '',
      },
      curIdx:0,
      loginStrArr:['登录','注册'],
    }
  },

  methods:{
     async loginOrReg(idx){
        if (this.loginForm.username === '' || this.loginForm.password === '') {
          alert('账号或密码不能为空');
        } else {
           this.login(idx%2 === 0 ?'login':'register');
        }
     },

     async login(resApi){
          await this.$http.post(`/api/${resApi}`,this.loginForm).then(res=>{
              localStorage.setItem('token',res.data.token);
              this.$router.push(this.$route.query.redirect || '/')
              console.log(resApi+'成功！')
              }).catch(err=>{
                console.log(err.message);
          })
     }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/variables";
.header{
        background-color: map-get($colors, "header");
        height:50px;
        position:relative;
        .moreBtn{
            height:100%;
            position: absolute;
            top:0;
            right:15px;
        }
    }
  
  input{
    border:0px;
    height:40px;
    border-bottom:2px solid $border-color;

  }
</style>
