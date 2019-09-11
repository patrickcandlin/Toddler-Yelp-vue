
<template>
    <div>
        <img src="./images/kid-in-field2.jpg" alt="kid-in-feild" >
        <Activites />
        <hr>
        <Events />
        <hr>
        <h2>Restaurants</h2>
    </div>
</template>

<script>
import Activites from './activites/Activites.vue'
import Events from './events/Events.vue'
export default {
   components: {
       Activites,
       Events
   } 
}
</script>
<style >
    img {
        width: 100%;
    }

    section div.container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    article {
        margin: .5rem;
    }
    h2 {
        padding: 1rem;
    }
  
</style>
