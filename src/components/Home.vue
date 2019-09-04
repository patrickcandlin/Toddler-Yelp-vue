
<template>
    <div>
        <img src="./images/kid-in-field2.jpg" alt="kid-in-feild" >
        <Activites />
        <hr>
        <h2>Restaurants</h2>
        <hr>
        <h2>Events</h2>
    </div>
</template>

<script>
import Activites from './activites/Activites.vue'
export default {
   components: {
       Activites
   } 
}
</script>
<style >
    img {
        width: 100%;
    }
    section {
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
