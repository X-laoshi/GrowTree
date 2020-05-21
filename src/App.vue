<template>
  <div id="app" >
  <Login/>
<!--   <Auth/>-->
  </div>
</template>

<script>
    import Login from './components/Login.vue'
//import Auth from './components/Auth.vue'
export default {
  name: 'App',
  components: {
    Login,
       // Auth
  }
}
</script>

<style>
  html,body{
    height: 100%;
    width: 100%;
  }
#app {
  height: 100%;
  width: 100%;
  text-align: center;
  color: #2c3e50;
}

</style>
