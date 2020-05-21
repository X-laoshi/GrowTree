
<script src="../../babel.config.js"></script>
<template>
  <div id="eyes">
    <form style="height: 180px;padding-top: 15% ; background-color:rgba(255,255,255,0)">
      <table style=" border-radius: 10px; margin: auto auto auto auto;padding: 0 50px 0 0;height: 100%;background-color:rgba(255,255,255,0.5)" >
        <tr style="margin: auto">
          <td style="font-size: 20px">账号:</td>
          <td>
            <label><input type="text" name="username" v-model="name" /></label>
          </td>
        </tr>
        <tr style="margin: auto;height: 30px">
          <td style="font-size: 20px">密码:</td>
          <td style="position: relative;">
            <input type="password" name="password" v-model="psd" v-if="!ifdisplay"/>
            <input type="text" name="password" v-model="psd" v-else/>
            <div v-show="!ifdisplay"  @click="ifdisplay=!ifdisplay" class="back1" style="height: 20px;width: 20px;position: absolute; right: 5px"></div>
            <div v-show="ifdisplay"  @click="ifdisplay=!ifdisplay" class="back2" style="height: 20px;width: 20px;position: absolute;right: 5px"></div>
          </td>
        </tr>
        <tr style="margin:auto">
          <td colspan="2">
            <button style="width: 95px;height: 30px" type="submit" @click="login">登录</button>
          </td>
        </tr>
      </table>
    </form>
  </div>
</template>

<script>
  export default {
  name: 'Login',
    data(){
    return{
      ifdisplay:false,
      psd:'',
      name:''
    }
    },

    methods:{
      login(){
        if((this.name=='')&&(this.psd=='')) {
            alert("输入账号和密码");
        }
        else
          this.$router.push('/Auth')
      }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type="text"]{
    outline-style: none ;
    border: 1px solid #ccc;
    border-radius: 3px;
    height: 28px;
    width: 150px;
    font-size: 18px;
  }
  input[type="password"]{
    outline-style: none ;
    border: 1px solid #ccc;
    border-radius: 3px;
    height: 28px;
    width: 150px;
    font-size: 32px;
  }
  input:focus{
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
  }
  button{
    box-sizing: border-box;
    text-align:center;
    font-size:1.4em;
    height:28px;
    border-radius:4px;
    margin: auto 30px auto 80px;
    border:1px solid #c8cccf;
    background-color: rgba(255,255,255,0.5);
    display:block;
    outline:0;
    padding:0 1em;
    text-decoration:none;
    width:100px;
  }
  #eyes{
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.5);
    border-radius: 4px;
    text-align: center;
    background-image:url("../assets/tree.jpg");
    background-size: 100%;
    background-repeat:no-repeat;
  }
.back1{
  background-image: url("../assets/closeeyes.jpg");
  background-size: 100%;
  background-repeat:no-repeat;
  bottom: 16px;
}
  .back2{
    background-image: url("../assets/openeyes.png");
    background-size: 100%;
    background-repeat:no-repeat;
    bottom: 16px;
  }
tr{
   height: 40px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
