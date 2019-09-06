<template>
  <div id="app">
    <nav-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar"

export default {
  name: 'app',
  components: {
    navBar: NavBar
  },
}
</script>

<style>

 #app {
   min-width: 100%;
 }

</style>
