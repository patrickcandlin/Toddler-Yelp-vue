
<template>
    <div>
        <img src="./images/kid-in-field2.jpg" alt="kid-in-feild" >
        <Activites />
    </div>
</template>
<script>
import Activites from './activites/Activites.vue'
import Events from './events/Events.vue'
export default {
    data() {
        return {
            searchForm: {
                    location: '',
                    searchTerm: '',      
                }
        }        
    },
   components: {
       Activites,
       Events
   },

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
