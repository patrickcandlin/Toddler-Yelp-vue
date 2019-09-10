<template>
  <div id="app">
    <nav-bar />
    <b-container>

      <b-form @submit.prevent @submit='sendUser'>
        <label>Email:</label>
        <b-input type='text' v-model="email"></b-input>
        <label>password:</label>
        <b-input type='text' v-model="password"></b-input>
        <label>avatar:</label>
        <b-input type='text' v-model="avatar"></b-input>
      <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-container>
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
    sendUser(){
      Axios.post('http://localhost:3000/api/v1/users',{
        params: {
          username: this.email,
          password: this.password,
          avatar: this.avatar
        }
      }
      )
    }
  }
}
</script>

<style>

 #app {
   min-width: 100%;
 }

</style>
