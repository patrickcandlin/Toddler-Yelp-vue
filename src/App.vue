<template>
  <div id="app">
    <nav-bar />
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"
import Axios from 'axios';


export default {
  name: 'app',
  components: {
    navBar: NavBar
  },
  data(){
    return {
      email: '',
      password: '',
      avatar: '',
    }
  },
  methods: {
    
  }
}
</script>

<style>

 #app {
   min-width: 100%;
 }

</style>
