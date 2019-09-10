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
        <h4>Reviews</h4>
    </b-modal>
</template>
<script>
export default {
    name: "MoreInfoModal",
    props: {
        selectedBusiness: Object,
    },
    methods: {
    },
}
</script>