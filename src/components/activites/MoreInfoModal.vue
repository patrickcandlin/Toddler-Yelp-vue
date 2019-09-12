<template>
    <b-modal 
        id="more-info-modal" 
        scrollable
        size="lg">
       <h3>{{ selectedBusiness.name }}</h3> 
        <b-img :src="selectedBusiness.image_url"></b-img>
        <p>Phone: {{selectedBusiness.phone}}</p>
        <span>Address:</span> <span v-for="info in selectedBusiness.location.display_address"> {{info}}</span>
        <hr>
        <h4 >Reviews</h4>
        <b-list-group v-for="review in reviewsArray" v-if="selectedBusiness.id === review.yelp_id"> 
            <b-list-group-item >
                <p v-if="selectedBusiness.id === review.yelp_id">{{ review.content }}</p>
                <p v-if="selectedBusiness.id === review.yelp_id">Rating: {{ review.rating }}/5</p>
            </b-list-group-item>
        </b-list-group>
    </b-modal>
</template>
<script>
const token = localStorage.getItem('jwt')
const userId = localStorage.getItem('jwt')
export default {
    name: "MoreInfoModal",
    props: {
        selectedBusiness: Object,
        reviewsArray: Array,
    },
    methods: {

    },
}
</script>
   { 
       "id": 1, 
       "yelp_id": "i3w2z950AmxtymYJNURspQ", 
       "yelp_name": "Downtown Aquarium", 
       "rating": 5, 
       "content": "asdfasdf", 
       "user": { "id": 3, "username": "test" } 
       }