<template>
        <b-container>

        <b-form @submit.stop.prevent @submit="sendNewUserInfo">
            <label for="username">Username or Email</label>
            <b-input v-model="username" type="text"></b-input>
            <label for="password">Password</label>
            <b-input type="password" id="text-password" v-model="password"></b-input>
            <label for="password">Confirm Password</label>
            <b-input type="password" id="text-confirmpassword" v-model="confirmPassword"></b-input>
            <b-form-text id="password-help-block">
            </b-form-text>
            <label for="avatar">Would you like an avatar photo? (Optional) </label>
            <b-input v-model="avatar" type=text></b-input>
            <b-form-invalid-feedback :state="passwordConfrimation"> 
                Please confrim Your password
            </b-form-invalid-feedback> 
            <b-form-valid-feedback :state="passwordConfrimation"> 
                Password matches!
            </b-form-valid-feedback> 
            <b-button class="mr-1" type="submit" variant="primary">Sign Up</b-button>
            <b-button class="mr-1" @click="resetFrom" >Reset</b-button>
        </b-form>
    </b-container>
</template>
<script>
    import Axios from 'axios';
    
export default {
    
    name: "Signup",
    data(){
        return {
            username: "",
            password: "",
            confirmPassword: "",
            avatar: "", 

        }
    },
    methods: {
        resetFrom(){
            this.username = ""
            this.password = ""
            this.confirmPassword = ""
            this.avatar = ""
        },
        sendNewUserInfo(){
            Axios.post('http://localhost:3000/api/v1/users',{
                    "user": { 
                        username: this.username, 
                        password: this.password,
                        avatar: this.avatar 
                        }
                })
                .then(response => {
                        console.log(response)
                    if(response.statusText == "Created"){
                        this.$router.push({ path: '/login' })
                    }else{
                        console.log('woomp woomp')
                    }
                    
                })
        }
    },
    computed:{
        passwordConfrimation(){
            return this.password == this.confirmPassword
        }
    },

}
</script>