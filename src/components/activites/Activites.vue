<template>
    <section>
        <router-link to="/activites">
            <h2>Activities</h2>
        </router-link>
         <div class="container" v-for='business in businessArray'>

            <Card  /> 
                    

        </div>
    </section>
</template>
<script>
import axios from 'axios'
import Card from "./Card.vue"

export default {
    data() {
        return {
            businessArray: [],
        }
    },
    components: {
        Card
    },
    mounted() {
        axios
        .get('http://localhost:3000/fusion/index')
        .then((response) => {
                console.log(response.data.businesses)
                this.businessArray = response.data.businesses
            }
        )
    }
    
}
</script>