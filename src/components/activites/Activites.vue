<template>
    <section>
        <router-link to="/activites">
            <h2>Activities</h2>
        </router-link>
         <div class="container">
               
            <Card /> 
                    

        </div>
    </section>
</template>
<script>
import Card from "./Card.vue"

export default {
    components: {
        Card
    }
}
</script>