<template>
  <div class="container">
    <div class="row-fluid">
      <div class="row">
          <div class="col-sm-9 form-group"></div>
          <div class="col-sm-3 form-group" >
              <div class="row" style="height:100px"></div>
              <div class="row">
                <form class="form-horizontal">
                    <div class="form-group">
                        <label class="col-sm-3" for="inputEmail">邮箱</label>
                        <div class="col-sm-9">
                        <input class="form-control" id="inputEmail" v-model="user.account" type="text" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3" for="inputPassword">密码</label>
                        <div class="col-sm-9">
                        <input class="form-control" id="inputPassword" type="password" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-3"></div>
                        <div class="col-sm-9">
                        <label class="col-sm-12" style="margin-left:-15px;"><input type="checkbox" /> Remember me</label> <button @click="login()" class="btn">登陆</button>
                        </div>
                    </div>
                </form>
              </div>
         </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      user:{
          account:'',
          password:''
      }
    }
  },
  mounted(){
    let _q= this.$route.query;
      console.log(_q.x);  
  },
  methods:{
    login(){
        axios({
            method:"post",
            url:"http://47.107.36.143/api/login/check_login",
            data:{
                account:this.user.account,
                password:this.user.password
            }
        }).then((res)=>{
            console.log(res.data);
        })
    }
  }
}
</script>

<style lang="scss">
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 65px;
    margin-left: auto;
}
</style>
