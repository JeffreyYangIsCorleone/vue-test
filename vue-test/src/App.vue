<template>
  <div>
    <div class="panel panel-default">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">JeffreyTech</a>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="title_div" v-html="title"></div>
                
            </div>
          </div>
        </nav>
    </div>
    <div class="col-xs-2">
        <div id="left-panel" class="panel panel-primary">
            <div>
              <nav>
                <div id="logo-div" class="logo">                  
                </div>
                <div class="">
                  <ul class="nav nav-pills nav-stacked">
                    <li><a href="" class="glyphicon glyphicon-menu-right inactive"> 计算机</a>
                      <ul style="display: none" class="nav nav-pills nav-stacked">
                        <li><a href="" class="glyphicon glyphicon-menu-right"> -- 台式机</a></li> 
                        <li><a href="" class="glyphicon glyphicon-menu-right"> -- 笔记本</a></li> 
                        <li><a href="" class="glyphicon glyphicon-menu-right"> -- 掌上电脑</a></li>
                      </ul>
                    </li>
                    <li><a href="" class="glyphicon glyphicon-menu-right inactive"> 数码产品</a>
                      <ul style="display: none" class="nav nav-pills nav-stacked">
                        <li><a href="" class="glyphicon glyphicon-menu-right"> -- 数码照相机</a></li> 
                        <li><a href="" class="glyphicon glyphicon-menu-right"> -- 数码摄像机</a></li> 
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
        </div>
    </div>
    <div class="col-xs-10">
        <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

  // function jsonP(){
  //   $.ajax({ 
  //         url: 'http://127.0.0.1:8081/demo/test', 
  //         type: 'GET', 
  //         dataType: 'JSONP', 
  //         success: function (res) { 
  //           console.log(res);
  //         } 
  //       }) 
  // }

  export default {
    name: 'App',
    data(){
       return {
         title:'',
         titles:[]
       }    
    },
    mounted(){
     // jsonP();
        let _self = this;
        axios.get('http://localhost/api/demo/test').then(function(response){
        let list = response.data.success;
        let p_title = '';
        let s_title = '';
        let menus = {
          str:''
        };
        list.forEach(element => {
                let name = element.name;
               // console.log(name);
                let code = element.code;
                let parent = element.parent;
                let url = element.url;
                if( parent == null){
                    _self.title += "<a class=\"navbar-brand\" href=\"#\">" + name + "</a>";
                    console.log("parent:"+name);
                    p_title = code;
                    menus.str = null ;
                }else{
                    if( url == null){
                        s_title = code;
                        console.log("parent:"+p_title+",s_title:"+s_title);
                        s_title = code;
                    }else{
                         console.log("parent:"+p_title+",s_title:"+s_title+",this:"+ url);
                         menus.str = "parent:"+p_title+",s_title:"+s_title+",this:"+ url;
                    }
                }
                if(  menus.str != null &&  menus.str != ''){
                    _self.titles.push(menus.str);
                } 
        });
        console.log(_self.titles);
      }).catch(function(response){
        //alert(response);
      })
   },
   methods:{
      
   }
}

  
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.panel-default{
  border:none;
}

.container-fluid{
  background-color: rgb(40, 94, 155);
 .navbar-brand{
   margin-left: 20px;
   color: aliceblue;
 }
}

.navbar-header{
  float: right;
}

#left-panel{
   width:90%;
   height: 850px;
   background-color: rgb(243, 241, 241);
   margin-top: -20px;
   margin-left: -11px;
   border:none;
   #logo-div{
     height: 100px;
     width: 100%;
     border-bottom:1.5px solid #c2cad1;
   }
 }
</style>
