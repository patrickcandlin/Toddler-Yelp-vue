<template>
    <section>
        <router-link to="/activites">
            <h2>Activities</h2>
        </router-link>
        <div class="container" >

            <Card  v-for='business in businessArray' :name='business.name' :image_url='business.image_url' /> 
                    
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

<style>
    div.container {
        display: flex;
        flex-wrap: wrap;
    }
</style>