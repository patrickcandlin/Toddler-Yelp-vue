<template>
    <b-container>

        <b-form @submit.stop.prevent @submit="sendLogin">
            <label for="username">Username or Password</label>
            <b-input v-model="username" type="text"></b-input>
            <label for="password">Password</label>
            <b-input type="password" id="text-password" v-model="password"></b-input>
            <b-form-text id="password-help-block">
            </b-form-text>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <p>{{ message }} </p>
    </b-container>
</template>
<script>
import Axios from 'axios';
import { token } from "../../token"

export default {
    name: 'Login',
    data(){
        return {
            username: "",
            password: "",
            message: "",
        }
    },
    methods: {
        sendLogin() {
                Axios.post('http://localhost:3000/api/v1/login/',{
                    "auth": { 
                        username: this.username, 
                        password: this.password, 
                        }
                })
                .then(result => {
                    console.log(result)
                    localStorage.setItem("jwt", result.data.jwt)
                    if(result.statusText === "Accepted" ){
                        this.$router.push({path: '/'})
                    }else{
                        this.message = "Please try again!"
                    }
                })
        }
    }
}
</script>