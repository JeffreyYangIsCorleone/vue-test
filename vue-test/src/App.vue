<template>
  <div>
    <div class="panel panel-default">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">JeffreyTech</a>
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
  export default {
    name: 'App'
  }

  
</script>

<style lang="scss" scoped>
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
   color: aliceblue;
 }
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
