
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

<style >
    img {
        width: 100%;
    }
    div.container {
        display: flex;
        flex-wrap: wrap

    }
    article {
        margin: 1rem;
    }
    h2 {
        padding: 1rem;
    }
  
</style>

<script>
import Activites from './activites/Activites.vue'
export default {
   components: {
       Activites
   } 
}
</script>